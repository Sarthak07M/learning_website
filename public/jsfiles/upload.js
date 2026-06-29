// ========== NAVIGATION SCROLL EFFECT ==========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========== HAMBURGER MENU ==========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// ========== FILE INPUT HANDLING ==========
const fileInput = document.getElementById('file');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');

fileInput?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        fileName.textContent = file.name;
        fileSize.textContent = formatFileSize(file.size);
    } else {
        fileName.textContent = 'No file selected';
        fileSize.textContent = '';
    }
});

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// ========== DYNAMIC SUBJECT POPULATION ==========
const branchSelect = document.getElementById('branch');
const semesterSelect = document.getElementById('semester');
const subjectSelect = document.getElementById('subject');
const facultyInput = document.getElementById('faculty');

const API_BASE_URL =
    window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5000'
        : window.location.origin;

// Function to populate subjects based on branch and semester
async function populateSubjects() {
    const branch = branchSelect.value;
    const semester = semesterSelect.value;

    if (!branch || !semester) {
        subjectSelect.innerHTML = '<option value="">Select Subject</option>';
        facultyInput.value = '';
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/subjects?branch=${encodeURIComponent(branch)}&semester=${encodeURIComponent(semester)}`);
        const result = await response.json();

        if (response.ok && result.success) {
            subjectSelect.innerHTML = '<option value="">Select Subject</option>';
            result.data.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject.name;
                option.textContent = `${subject.code} - ${subject.name}`;
                option.setAttribute('data-faculty', subject.faculty);
                subjectSelect.appendChild(option);
            });
        } else {
            console.error('Failed to fetch subjects:', result.message);
            subjectSelect.innerHTML = '<option value="">Error loading subjects</option>';
        }
    } catch (error) {
        console.error('Error fetching subjects:', error);
        subjectSelect.innerHTML = '<option value="">Error loading subjects</option>';
    }
}

// Event listeners for branch and semester changes
branchSelect?.addEventListener('change', populateSubjects);
semesterSelect?.addEventListener('change', populateSubjects);

// Event listener for subject change to show faculty
subjectSelect?.addEventListener('change', (e) => {
    const selectedOption = e.target.selectedOptions[0];
    const faculty = selectedOption ? selectedOption.getAttribute('data-faculty') : '';
    facultyInput.value = faculty || '';
});

// ========== FORM SUBMISSION ==========
const uploadForm = document.getElementById('uploadForm');
const uploadBtn = document.querySelector('.upload-btn');
const btnText = document.querySelector('.btn-text');
const btnLoader = document.querySelector('.btn-loader');
const uploadStatus = document.getElementById('uploadStatus');

// Helper function to convert the file to a Base64 string
const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]); // Extract base64 part
        reader.onerror = error => reject(error);
    });
};

uploadForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Show loading state
    uploadBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'block';
    uploadStatus.style.display = 'none';

    try {
        const fileInput = document.getElementById('file');
        const file = fileInput.files[0];
        
        if (!file) {
            throw new Error("Please select a file.");
        }

        // Convert file to Base64
        const base64Data = await getBase64(file);

        // Build the JSON payload
        const payload = {
            title: document.getElementById('title').value,
            branch: document.getElementById('branch').value,
            semester: document.getElementById('semester').value,
            subject: document.getElementById('subject').value,
            faculty: document.getElementById('faculty').value,
            fileName: file.name,
            mimeType: file.type,
            fileContent: base64Data
        };

        // Replace this URL with your generated Google Apps Script Web App URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyPC0HPN7NDMEFHRyb2LIhte-08pDvC0_36i9o3-SVHsMWIMdOt60PS3H7N7ZWf67yJ/exec';

        // Note: Sending as text/plain bypasses strict CORS preflight checks in GAS
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            }
        });

        const result = await response.json();

        if (result.success) {
            showStatus('success', 'Upload Successful!', 'Your resource has been uploaded securely.');
            uploadForm.reset();
            fileName.textContent = 'No file selected';
            fileSize.textContent = '';
            facultyInput.value = '';
        } else {
            throw new Error(result.message || 'Upload failed');
        }
    } catch (error) {
        console.error('Upload error:', error);
        showStatus('error', 'Upload Failed', error.message || 'An error occurred while uploading. Please try again.');
    } finally {
        // Reset loading state
        uploadBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
    }
});

function showStatus(type, title, message) {
    uploadStatus.className = `upload-status ${type}`;
    uploadStatus.innerHTML = `
        <h3>${title}</h3>
        <p>${message}</p>
    `;
    uploadStatus.style.display = 'block';

    // Scroll to status
    uploadStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ========== DYNAMIC PARTICLE GENERATION ==========
function createParticles() {
    const particleContainer = document.querySelector('.bg-animation');
    if (!particleContainer) return;

    const particleCount = 10;

    for (let i = 5; i < particleCount + 5; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDelay = Math.random() * 10;
        const randomDuration = 20 + Math.random() * 15;

        particle.style.left = `${randomX}%`;
        particle.style.top = `${randomY}%`;
        particle.style.animationDelay = `${randomDelay}s`;
        particle.style.animationDuration = `${randomDuration}s`;

        particleContainer.appendChild(particle);
    }
}

createParticles();

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe upload container
const uploadContainer = document.querySelector('.upload-container');
if (uploadContainer) {
    uploadContainer.style.opacity = '0';
    observer.observe(uploadContainer);
}
