const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  branch: {
    type: String,
    required: true,
    enum: ['CSE', 'IT', 'ETC', 'EI', 'MECH', 'CIVIL', 'BDES','CSBS']
  },
  semester: {
    type: Number,
    required: true,
    min: 1,
    max: 8
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  fileURL: {
    type: String,
    required: true,
    trim: true
  },
  fileType: {
    type: String,
    enum: ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'video'],
    default: 'pdf'
  },
  uploadedBy: {
    type: String,
    trim: true
  },
  paperType: {
    type: String,
    enum: ['notes', 'mst', 'end-sem'],
    default: 'notes'
  },
  uploadDate: {
    type: Date,
    default: Date.now
  }
});

// Index for efficient querying
resourceSchema.index({ branch: 1, semester: 1, subject: 1 });

module.exports = mongoose.model('Resource', resourceSchema);
