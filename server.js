const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const Resource = require('./models/Resource');
const subjectsData = require('./models/Subjects');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Mount page routes (dynamic branch/semester routes)
const pageRouter = require('./routes/pagesRoutes');
app.use('/', pageRouter);

// Route for root URL - send index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'htmlfiles','index.html'));
});

// Connect to MongoDB and start server
const startServer = () => {
  // Connect to MongoDB first
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/iet-portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    console.log('Successfully connected to IET Team Cloud!');

    // Configure Multer for file uploads
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'uploads/');
      },
      filename: (req, file, cb) => {
        // Generate unique filename with timestamp
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
      }
    });

    const upload = multer({
      storage: storage,
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

    // POST /api/resources - Upload new resource
    app.post('/api/resources', upload.single('file'), async (req, res) => {
      try {
        if (!req.file) {
          return res.status(400).json({
            success: false,
            message: 'No file uploaded'
          });
        }

        const { title, branch, semester, subject } = req.body;

        // Validate required fields
        if (!title || !branch || !semester || !subject) {
          return res.status(400).json({
            success: false,
            message: 'All fields are required'
          });
        }

        // Create new resource document
        const newResource = new Resource({
          title,
          branch,
          semester: parseInt(semester),
          subject,
          fileName: req.file.originalname,
          fileURL: `/uploads/${req.file.filename}`,
          fileType: path.extname(req.file.originalname).substring(1),
          fileSize: req.file.size,
          uploadedBy: req.body.uploadedBy || 'Admin' // Can be modified for user authentication
        });

        await newResource.save();

        res.status(201).json({
          success: true,
          message: 'Resource uploaded successfully',
          data: newResource
        });
      } catch (error) {
        console.error('Error uploading resource:', error);
        res.status(500).json({
          success: false,
          message: error.message || 'Failed to upload resource'
        });
      }
    });

    // DELETE /api/resources/:id - Delete resource (optional)
    app.delete('/api/resources/:id', async (req, res) => {
      try {
        const resource = await Resource.findByIdAndDelete(req.params.id);
        if (!resource) {
          return res.status(404).json({
            success: false,
            message: 'Resource not found'
          });
        }

        // Optionally delete file from filesystem
        const fs = require('fs');
        const filePath = path.join(__dirname, resource.fileURL);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }

        res.json({
          success: true,
          message: 'Resource deleted successfully'
        });
      } catch (error) {
        console.error('Error deleting resource:', error);
        res.status(500).json({
          success: false,
          message: 'Failed to delete resource'
        });
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
