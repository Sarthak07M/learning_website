# Deployment Guide (Vercel Frontend + Render Backend)

## Target Architecture
- Frontend: static files from `public/` deployed on Vercel
- Backend: normal Node.js + Express + MongoDB app deployed on Render

## Local Development
1. Install dependencies:
```bash
npm install
```
2. Create `.env` (backend):
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```
3. Run locally:
```bash
npm run dev
```

## Frontend Deployment (Vercel)
1. In Vercel, import this repo.
2. Set framework preset to `Other`.
3. Set output directory to `public`.
4. Deploy.

### Frontend Entry
- `public/index.html` exists at the root and redirects to `public/htmlfiles/index.html`.

## Backend Deployment (Render)
1. Create a new Web Service on Render from this repository.
2. Set build command:
```bash
npm install
```
3. Set start command:
```bash
npm start
```
4. Add environment variables in Render:
- `MONGODB_URI`
- `PORT` (optional; Render provides one automatically)
- Any Cloudinary variables used by backend

## Frontend API Base URL
Current frontend scripts use:
- `http://localhost:5000` when running locally
- `https://your-render-backend-url.onrender.com` for non-localhost

Update this placeholder in these files after backend deployment:
- `public/jsfiles/resources.js`
- `public/jsfiles/upload.js`

## Notes
- Backend files (`server.js`, `routes/`, `models/`) remain CommonJS and unchanged in architecture.
- Netlify serverless files/configs were removed to avoid mixed deployment setups.
