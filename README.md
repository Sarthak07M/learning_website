# IET Portal Backend

Node.js + Express backend for the IET study portal.

## Quick Start

1. Install dependencies:
  ```bash
  npm install
  ```
2. Create `.env`:
  ```env
  MONGODB_URI=mongodb://localhost:27017/IET_Portal
  PORT=5000
  NODE_ENV=development
  ```
3. Start server:
  ```bash
  npm run dev
  ```

Server runs at `http://localhost:5000`.

## Main Endpoints

- `GET /api/health`
- `GET /api/resources?branch=CSE&semester=4`
- `GET /api/resources/:id`
- `POST /api/resources`
- `PUT /api/resources/:id`
- `DELETE /api/resources/:id`

Files in `uploads/` are served at `/uploads/<filename>`.

## Tech

Node.js, Express, MongoDB, Mongoose.
