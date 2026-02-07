# IET Portal Backend

A Node.js and Express backend for the IET Study Portal, providing API endpoints for managing academic resources.

## Features

- **MongoDB Integration**: Uses Mongoose to connect to MongoDB database
- **Resource Management**: CRUD operations for academic resources
- **File Serving**: Static file serving for PDF and other resource files
- **RESTful API**: Clean REST endpoints for frontend integration
- **Filtering**: Query resources by branch and semester

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

## Installation

1. **Clone the repository** (if applicable) or navigate to the project directory

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up MongoDB**:
   - Make sure MongoDB is installed and running locally
   - Or update the `MONGODB_URI` in `.env` for cloud MongoDB

4. **Create uploads directory** (if not exists):
   ```bash
   mkdir uploads
   ```

## Configuration

Create a `.env` file in the root directory with the following variables:

```env
MONGODB_URI=mongodb://localhost:27017/IET_Portal
PORT=5000
NODE_ENV=development
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000` by default.

## API Endpoints

### Health Check
- **GET** `/api/health` - Check server and database status

### Resources
- **GET** `/api/resources` - Get all resources (with optional filtering)
  - Query parameters: `?branch=CSE&semester=4`
- **GET** `/api/resources/:id` - Get a specific resource by ID
- **POST** `/api/resources` - Create a new resource
- **PUT** `/api/resources/:id` - Update a resource
- **DELETE** `/api/resources/:id` - Delete a resource

### File Serving
- **Static files** served from `/uploads` directory
- Access files via: `http://localhost:5000/uploads/filename.pdf`

## Resource Schema

```javascript
{
  title: String (required),
  branch: String (required, enum: ['CSE', 'IT', 'ECE', 'EI', 'MECH', 'CIVIL', 'BDES']),
  semester: Number (required, 1-8),
  subject: String (required),
  fileURL: String (required),
  fileType: String (enum: ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'video']),
  uploadedBy: String,
  uploadDate: Date (default: now)
}
```

## Usage Examples

### Get resources for CSE branch, semester 4
```bash
GET /api/resources?branch=CSE&semester=4
```

### Create a new resource
```bash
POST /api/resources
Content-Type: application/json

{
  "title": "Data Structures Notes",
  "branch": "CSE",
  "semester": 4,
  "subject": "Data Structures",
  "fileURL": "/uploads/ds-notes.pdf",
  "fileType": "pdf",
  "uploadedBy": "John Doe"
}
```

## Project Structure

```
├── models/
│   └── Resource.js          # Resource model/schema
├── routes/
│   └── resourceRoutes.js    # API routes
├── uploads/                 # Static file directory
├── .env                     # Environment variables
├── package.json             # Dependencies
├── server.js                # Main server file
└── README.md                # This file
```

## Frontend Integration

The backend is designed to work with the multi-page frontend:

1. **Branch Selection** → `branch.html`
2. **Semester Selection** → `semester.html`
3. **Subject Selection** → `faculty.html`
4. **Resource Display** → `resources.html`

The API endpoints can be called from the frontend JavaScript files to fetch and display resources dynamically.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
