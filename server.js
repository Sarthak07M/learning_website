const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const Resource = require('./models/Resource');
const subjectsData = require('./models/Subjects');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup (EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Mount page routes (dynamic branch/semester routes)
const pageRouter = require('./routes/pagesRoutes');
app.use('/', pageRouter);

// Route for root URL - send index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'htmlfiles', 'index.html'));
});

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Helper function to upload memory buffer stream to Cloudinary
const uploadToCloudinary = (fileBuffer, folderPath, originalName) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: folderPath,
        resource_type: 'auto', // 'auto' tells Cloudinary to automatically handle PDFs, docs, videos, etc.
        public_id: `${Date.now()}-${originalName.split('.')[0].replace(/[^a-zA-Z0-9]/g, '_')}`
      },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    
    // Convert buffer to readable stream and pipe to Cloudinary
    const { Readable } = require('stream');
    const readableStream = new Readable();
    readableStream.push(fileBuffer);
    readableStream.push(null);
    readableStream.pipe(uploadStream);
  });
};

// Connect to MongoDB and start server
const startServer = () => {
  // Connect to MongoDB Atlas
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/iet-portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    console.log('Successfully connected to IET Team Cloud!');

    // Migrate existing resources to set paperType when missing
    const inferPaperType = (title = '') => {
      const normalized = title.toLowerCase();
      if (normalized.includes('mst') || normalized.includes('mid sem') || normalized.includes('mid-sem')) {
        return 'mst';
      }
      if (normalized.includes('end sem') || normalized.includes('end-sem') || normalized.includes('final')) {
        return 'end-sem';
      }
      return 'notes';
    };

    Resource.updateMany(
      { paperType: { $exists: false } },
      [
        { $set: { paperType: { $cond: [
          { $or: [
            { $regexMatch: { input: { $toLower: '$title' }, regex: 'mst|mid\\s?sem|mid-sem' } },
            { $regexMatch: { input: { $toLower: '$title' }, regex: 'end sem|end-sem|final' } }
          ] },
          { $cond: [ { $regexMatch: { input: { $toLower: '$title' }, regex: 'mst|mid\\s?sem|mid-sem' } }, 'mst', 'end-sem' ] },
          'notes'
        ] } } }
      ]
    ).then(result => {
      console.log('✅ Migrated old resources paperType fields', result.modifiedCount);
    }).catch(err => {
      console.error('⚠️ Failed to migrate old resource paperType:', err.message);
    });

    // Configure Multer for MEMORY storage (Files stay in RAM until sent to Cloudinary)
    const upload = multer({
      storage: multer.memoryStorage(),
      limits: {
        fileSize: 50 * 1024 * 1024, // 50MB limit
      },
      fileFilter: (req, file, cb) => {
        // Check file type
        const allowedTypes = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'application/vnd.ms-powerpoint',
          'application/vnd.openxmlformats-officedocument.presentationml.presentation',
          'video/mp4',
          'video/avi',
          'video/quicktime'
        ];

        if (allowedTypes.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(new Error('Invalid file type. Only PDF, DOC, DOCX, PPT, PPTX, MP4, AVI, MOV files are allowed.'), false);
        }
      }
    });

    // Routes

    // GET /api/subjects - Get subjects for branch and semester
    app.get('/api/subjects', (req, res) => {
      try {
        const { branch, semester } = req.query;

        if (!branch || !semester) {
          return res.status(400).json({
            success: false,
            message: 'Branch and semester are required'
          });
        }

        const semNum = parseInt(semester);
        const subjects = subjectsData[branch]?.[semNum] || [];

        res.json({
          success: true,
          data: subjects
        });
      } catch (error) {
        console.error('Error fetching subjects:', error);
        res.status(500).json({
          success: false,
          message: 'Failed to fetch subjects'
        });
      }
    });

    // GET /api/resources - Get resources with optional filtering
    app.get('/api/resources', async (req, res) => {
      try {
        const { branch, semester, subject } = req.query;
        let query = {};

        if (branch) query.branch = branch;
        if (semester) query.semester = parseInt(semester);
        if (subject) query.subject = subject;

        const resources = await Resource.find(query).sort({ uploadDate: -1 });
        res.json({
          success: true,
          data: resources
        });
      } catch (error) {
        console.error('Error fetching resources:', error);
        res.status(500).json({
          success: false,
          message: 'Failed to fetch resources'
        });
      }
    });

    // GET /api/resources/:id - Get specific resource
    app.get('/api/resources/:id', async (req, res) => {
      try {
        const resource = await Resource.findById(req.params.id);
        if (!resource) {
          return res.status(404).json({
            success: false,
            message: 'Resource not found'
          });
        }
        res.json({
          success: true,
          data: resource
        });
      } catch (error) {
        console.error('Error fetching resource:', error);
        res.status(500).json({
          success: false,
          message: 'Failed to fetch resource'
        });
      }
    });

    // POST /api/resources - Upload or Override resource
    app.post('/api/resources', upload.single('file'), async (req, res) => {
      try {
        if (!req.file) {
          return res.status(400).json({ success: false, message: 'No file uploaded' });
        }

        const { title, branch, semester, subject, paperType } = req.body;

        // Validate required fields
        if (!title || !branch || !semester || !subject) {
          return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const normalizedTitle = (title || '').toLowerCase();
        const inferredPaperType = (paperType || '').toLowerCase();
        let resolvedPaperType = 'notes';
        if (['mst', 'end-sem', 'endsem', 'end sem', 'end-sem'].includes(inferredPaperType)) {
          resolvedPaperType = inferredPaperType === 'endsem' || inferredPaperType === 'end sem' ? 'end-sem' : inferredPaperType;
        } else if (normalizedTitle.includes('mst') || normalizedTitle.includes('mid sem') || normalizedTitle.includes('mid-sem')) {
          resolvedPaperType = 'mst';
        } else if (normalizedTitle.includes('end sem') || normalizedTitle.includes('end-sem') || normalizedTitle.includes('final')) {
          resolvedPaperType = 'end-sem';
        }


        // ==========================================
        // STEP 1: Check if this resource already exists
        // ==========================================
        const existingResource = await Resource.findOne({
            title: title,
            branch: branch,
            semester: parseInt(semester),
            subject: subject
        });

        // ==========================================
        // STEP 2: If it exists, delete old file from Cloudinary
        // ==========================================
        if (existingResource && existingResource.fileURL.includes('/IET_Resources/')) {
            try {
                // Extract the exact public_id from the Cloudinary URL
                // Example URL: .../upload/v1234/IET_Resources/CSE/Semester_3/Physics/123-file.pdf
                let publicId = 'IET_Resources/' + existingResource.fileURL.split('/IET_Resources/')[1];
                
                // Cloudinary public IDs for PDFs usually do not include the file extension, so we remove it
                publicId = publicId.substring(0, publicId.lastIndexOf('.'));

                // Delete the old file from Cloudinary (Try both 'image' and 'raw' types to be safe)
                await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
                await cloudinary.uploader.destroy(publicId, { resource_type: 'raw' });
                
                console.log(`🗑️ Deleted old file from Cloudinary: ${publicId}`);
            } catch (deleteError) {
                console.error('⚠️ Could not delete old Cloudinary file:', deleteError);
                // We don't fail the request here, we still want to upload the new file
            }
        }

        // ==========================================
        // STEP 3: Upload the NEW file to Cloudinary
        // ==========================================
        const safeSubject = subject.replace(/[^a-zA-Z0-9]/g, '_');
        const folderPath = `IET_Resources/${branch}/Semester_${semester}/${safeSubject}`;
        const cloudinaryResult = await uploadToCloudinary(req.file.buffer, folderPath, req.file.originalname);

        // ==========================================
        // STEP 4: Update existing DB record OR create a new one
        // ==========================================
        if (existingResource) {
            // Update the existing document
            existingResource.fileName = req.file.originalname;
            existingResource.fileURL = cloudinaryResult.secure_url;
            existingResource.fileType = path.extname(req.file.originalname).substring(1);
            existingResource.fileSize = req.file.size;
            existingResource.uploadedBy = req.body.uploadedBy || 'Admin';
            existingResource.uploadDate = Date.now(); // Reset timestamp to now
            existingResource.paperType = resolvedPaperType;

            await existingResource.save();

            return res.status(200).json({
                success: true,
                message: 'Existing resource updated and overridden successfully!',
                data: existingResource
            });
        } else {
            // Create a brand new document if it didn't exist
            const newResource = new Resource({
                title,
                branch,
                semester: parseInt(semester),
                subject,
                fileName: req.file.originalname,
                fileURL: cloudinaryResult.secure_url,
                    fileType: path.extname(req.file.originalname).substring(1),
                fileSize: req.file.size,
                uploadedBy: req.body.uploadedBy || 'Admin',
                paperType: resolvedPaperType
            });

            await newResource.save();

            return res.status(201).json({
                success: true,
                message: 'New resource uploaded successfully to Cloudinary',
                data: newResource
            });
        }

      } catch (error) {
        console.error('Error uploading resource:', error);
        res.status(500).json({ success: false, message: error.message || 'Failed to upload resource' });
      }
    });

    // DELETE /api/resources/:id - Delete resource from MongoDB AND Cloudinary
    app.delete('/api/resources/:id', async (req, res) => {
      try {
        // 1. Find the resource first so we can get its Cloudinary URL
        const resource = await Resource.findById(req.params.id);
        
        if (!resource) {
          return res.status(404).json({ success: false, message: 'Resource not found' });
        }

        // 2. Delete the actual file from Cloudinary
        if (resource.fileURL && resource.fileURL.includes('/IET_Resources/')) {
            try {
                // Extract the exact public_id from the Cloudinary URL
                let publicId = 'IET_Resources/' + resource.fileURL.split('/IET_Resources/')[1];
                
                // Remove the file extension (Cloudinary IDs don't include .pdf or .docx)
                publicId = publicId.substring(0, publicId.lastIndexOf('.'));

                // Tell Cloudinary to permanently destroy the file
                await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
                await cloudinary.uploader.destroy(publicId, { resource_type: 'raw' });
                
                console.log(`🗑️ Successfully deleted file from Cloudinary: ${publicId}`);
            } catch (cloudinaryError) {
                console.error('⚠️ Could not delete Cloudinary file:', cloudinaryError);
            }
        }

        // 3. Delete the text record from MongoDB Atlas
        await Resource.findByIdAndDelete(req.params.id);

        res.json({
          success: true,
          message: 'Resource permanently deleted from both Database and Cloud Storage'
        });
        
      } catch (error) {
        console.error('Error deleting resource:', error);
        res.status(500).json({ success: false, message: 'Failed to delete resource' });
      }
    });

    // Health check endpoint
    app.get('/health', (req, res) => {
      res.json({ status: 'OK', message: 'Server is running' });
    });

    // Start server only after database connection is established
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  });
};

// Start the server
startServer();