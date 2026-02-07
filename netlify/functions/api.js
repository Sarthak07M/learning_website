const mongoose = require('mongoose');
const Resource = require('../../models/Resource');
const subjectsData = require('../../models/Subjects');

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
};

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    await connectDB();

    const path = event.path.replace('/.netlify/functions/api', '');
    const method = event.httpMethod;

    if (method === 'GET' && path === '/subjects') {
      // GET /api/subjects
      const queryParams = event.queryStringParameters || {};
      const { branch, semester } = queryParams;

      if (!branch || !semester) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            message: 'Branch and semester are required',
          }),
        };
      }

      const semNum = parseInt(semester);
      const subjects = subjectsData[branch]?.[semNum] || [];

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          data: subjects,
        }),
      };
    }

    if (method === 'GET' && path === '/resources') {
      // GET /api/resources
      const queryParams = event.queryStringParameters || {};
      const { branch, semester, subject } = queryParams;
      let query = {};

      if (branch) query.branch = branch;
      if (semester) query.semester = parseInt(semester);
      if (subject) query.subject = subject;

      const resources = await Resource.find(query).sort({ uploadDate: -1 });

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          data: resources,
        }),
      };
    }

    if (method === 'GET' && path.startsWith('/resources/')) {
      // GET /api/resources/:id
      const id = path.split('/resources/')[1];
      const resource = await Resource.findById(id);

      if (!resource) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({
            success: false,
            message: 'Resource not found',
          }),
        };
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          data: resource,
        }),
      };
    }

    if (method === 'POST' && path === '/resources') {
      // POST /api/resources
      // Note: File upload handling is simplified for Netlify functions
      // In production, consider using a service like Cloudinary or AWS S3
      const body = JSON.parse(event.body);
      const { title, branch, semester, subject, fileURL, fileName, fileType, fileSize } = body;

      if (!title || !branch || !semester || !subject) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            message: 'All fields are required',
          }),
        };
      }

      const newResource = new Resource({
        title,
        branch,
        semester: parseInt(semester),
        subject,
        fileName,
        fileURL,
        fileType,
        fileSize,
        uploadedBy: body.uploadedBy || 'Admin',
      });

      await newResource.save();

      return {
        statusCode: 201,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Resource uploaded successfully',
          data: newResource,
        }),
      };
    }

    if (method === 'DELETE' && path.startsWith('/resources/')) {
      // DELETE /api/resources/:id
      const id = path.split('/resources/')[1];
      const resource = await Resource.findByIdAndDelete(id);

      if (!resource) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({
            success: false,
            message: 'Resource not found',
          }),
        };
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Resource deleted successfully',
        }),
      };
    }

    if (method === 'GET' && path === '/health') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ status: 'OK', message: 'Server is running' }),
      };
    }

    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Endpoint not found',
      }),
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: error.message || 'Internal server error',
      }),
    };
  }
};
