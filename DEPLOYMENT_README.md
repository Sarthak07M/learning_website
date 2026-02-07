# Cara Menyambung Database Melalui Netlify

## Langkah-langkah Deployment

### 1. Persiapan Database
- Buat akun di [MongoDB Atlas](https://www.mongodb.com/atlas)
- Buat cluster baru dan dapatkan connection string
- Pastikan IP whitelist sudah dikonfigurasi (0.0.0.0/0 untuk development)

### 2. Konfigurasi Environment Variables di Netlify
1. Login ke [Netlify Dashboard](https://app.netlify.com)
2. Pilih project Anda
3. Pergi ke **Site settings** > **Environment variables**
4. Tambahkan variable berikut:
   - `MONGODB_URI`: Connection string MongoDB Atlas Anda
   - `NODE_ENV`: `production`

### 3. Deploy ke Netlify
1. Push kode ke Git repository (GitHub/GitLab)
2. Connect repository ke Netlify
3. Set build settings:
   - **Build command**: (kosong atau `npm run build` jika ada)
   - **Publish directory**: `Frontend`
   - **Functions directory**: `netlify/functions`

### 4. File Upload Handling
Karena Netlify Functions tidak mendukung multipart/form-data secara langsung, untuk upload file:

**Opsi 1: Gunakan Cloudinary atau AWS S3**
- Upload file ke cloud storage terlebih dahulu
- Simpan URL file di database

**Opsi 2: Gunakan API Gateway**
- Buat endpoint terpisah untuk upload file
- Gunakan service seperti Vercel atau Railway untuk backend

### 5. Testing
Setelah deploy:
1. Akses situs Netlify Anda
2. Test navigasi: branch → semester → faculty → resources
3. Cek koneksi database melalui browser console

## Struktur File yang Dibutuhkan

```
project/
├── Frontend/           # Static files
│   ├── index.html
│   ├── branch.html
│   ├── semester.html
│   ├── faculty.html
│   ├── resources.html
│   ├── *.css
│   └── *.js
├── netlify/
│   └── functions/
│       └── api.js      # Serverless function
├── models/
│   └── Resource.js     # Mongoose model
├── netlify.toml        # Netlify config
└── package.json
```

## Troubleshooting

### Error: "MongoDB connection error"
- Pastikan MONGODB_URI sudah benar
- Cek whitelist IP di MongoDB Atlas
- Pastikan database user memiliki permission yang cukup

### Error: "Function not found"
- Pastikan file `netlify/functions/api.js` ada
- Cek build logs di Netlify dashboard

### CORS Error
- Netlify functions sudah dikonfigurasi dengan CORS headers
- Jika masih error, cek `netlify.toml` configuration

## Development vs Production

### Development (Local)
- Server berjalan di `http://localhost:5000`
- API endpoint: `http://localhost:5000/api/*`

### Production (Netlify)
- Frontend di-host di Netlify
- API endpoint: `/.netlify/functions/api/*`

Frontend code sudah dikonfigurasi untuk mendeteksi environment secara otomatis.
