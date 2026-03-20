// ========== GET URL PARAMETERS ==========
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// ========== STATE MANAGEMENT ==========
let selectedBranch = getUrlParameter('branch');
let selectedSemester = getUrlParameter('semester');
let selectedSubject = getUrlParameter('subject');
let selectedSubjectCode = getUrlParameter('code');

// Fallback: parse from pathname like /branch/sem{number}/subject when query params are not provided
if (!selectedBranch || !selectedSemester || !selectedSubject) {
    const parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length >= 3) {
        if (!selectedBranch) selectedBranch = parts[0];
        // Check for /branch/sem{number}/subject format
        if (!selectedSemester && parts[1].startsWith('sem')) {
            selectedSemester = parts[1].substring(3); // Extract number after 'sem'
        }
        if (!selectedSubject && parts[2]) selectedSubject = decodeURIComponent(parts[2]);
    }
}

let allResources = [];

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

// ========== DISPLAY SELECTED INFO ==========
function displaySelectedInfo() {
    const branchDisplay = document.getElementById('selected-branch');
    const semesterDisplay = document.getElementById('selected-semester');
    const subjectDisplay = document.getElementById('subject-name');
    const codeDisplay = document.getElementById('selected-subject-code');
    
    if (branchDisplay && selectedBranch) {
        branchDisplay.textContent = selectedBranch;
    }
    
    if (semesterDisplay && selectedSemester) {
        semesterDisplay.textContent = `Semester ${selectedSemester}`;
    }
    
    if (subjectDisplay && selectedSubject) {
        subjectDisplay.textContent = selectedSubject;
    }
    
    if (codeDisplay && selectedSubjectCode) {
        codeDisplay.textContent = selectedSubjectCode;
    }
}

// ========== MOCK DATA FOR TESTING ==========
function getMockResources() {
    return [
        {
            _id: '1',
            title: 'Data Structures Notes',
            branch: selectedBranch,
            semester: parseInt(selectedSemester),
            subject: 'Data Structures',
            fileName: 'ds_notes.pdf',
            fileURL: '#',
            fileType: 'pdf',
            fileSize: 2048576,
            uploadedBy: 'Admin',
            uploadDate: new Date().toISOString()
        },
        {
            _id: '2',
            title: 'Algorithm Analysis PPT',
            branch: selectedBranch,
            semester: parseInt(selectedSemester),
            subject: 'Algorithms',
            fileName: 'algorithms.pptx',
            fileURL: '#',
            fileType: 'pptx',
            fileSize: 5242880,
            uploadedBy: 'Professor John',
            uploadDate: new Date().toISOString()
        },
        {
            _id: '3',
            title: 'Programming Assignment 1',
            branch: selectedBranch,
            semester: parseInt(selectedSemester),
            subject: 'Computer Programming',
            fileName: 'assignment1.docx',
            fileURL: '#',
            fileType: 'docx',
            fileSize: 1024000,
            uploadedBy: 'Teaching Assistant',
            uploadDate: new Date().toISOString()
        }
    ];
}

// ========== FETCH RESOURCES FROM API ==========
async function fetchResources() {
    if (!selectedBranch || !selectedSemester) {
        console.error('Branch and semester parameters are required');
        return;
    }

    try {
        // For production (Netlify), use: /.netlify/functions/api/resources
        // For local development, use: http://localhost:5000/api/resources
        const apiUrl = `http://localhost:5000/api/resources?branch=${encodeURIComponent(selectedBranch)}&semester=${encodeURIComponent(selectedSemester)}&subject=${encodeURIComponent(selectedSubject)}`;        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
            allResources = data.data;
            displayResources(allResources);
        } else {
            console.error('API returned error:', data.message);
            // Use mock data for testing
            console.log('Using mock data for testing...');
            allResources = getMockResources();
            displayResources(allResources);
        }
    } catch (error) {
        console.error('Error fetching resources:', error);
        // Use mock data when API is not available
        console.log('API not available, using mock data for testing...');
        allResources = getMockResources();
        displayResources(allResources);
    }
}

// ========== DISPLAY RESOURCES DYNAMICALLY ==========
function displayResources(resources) {
    const resourcesGrid = document.querySelector('.resources-grid');

    if (!resourcesGrid) {
        console.error('Resources grid not found');
        return;
    }

    // Clear existing content
    resourcesGrid.innerHTML = '';

    if (resources.length === 0) {
        resourcesGrid.innerHTML = `
            <div class="no-resources">
                <h3>No resources found</h3>
                <p>No study materials are available for ${selectedBranch} - Semester ${selectedSemester} yet.</p>
                <p>Check back later or contribute materials to help others!</p>
            </div>
        `;
        return;
    }

    const getTitle = (resource) => (resource.title || '').toLowerCase();

    const notesResources = resources.filter(resource => {
        const title = getTitle(resource);
        return title.includes('note') || title.includes('notes') || title.includes('lecture');
    });

    const endSemResources = resources.filter(resource => {
        const title = getTitle(resource);
        return title.includes('end sem') || title.includes('end-sem') || title.includes('end semester') || title.includes('final');
    });

    const getMstResources = (mstNumber) => resources.filter(resource => {
        const title = getTitle(resource);
        const hasMstKeyword = title.includes('mst') || title.includes('mid sem') || title.includes('mid-sem');
        if (!hasMstKeyword) {
            return false;
        }

        const mstPattern = new RegExp(`(mst|mid\\s?sem|mid-sem)[\\s-]*${mstNumber}\\b`);
        return mstPattern.test(title);
    });

    const mst1Resources = getMstResources(1);
    const mst2Resources = getMstResources(2);
    const mst3Resources = getMstResources(3);
    const allMstResources = [...mst1Resources, ...mst2Resources, ...mst3Resources];

    resourcesGrid.innerHTML = `
        <div class="resource-card" data-category="notes">
            <div class="resource-icon">📄</div>
            <h3 class="resource-title">Notes</h3>
            <p class="resource-description">Comprehensive study notes and lecture materials</p>
            <button class="resource-btn" data-category="notes">View Notes →</button>
        </div>

        <div class="resource-card pyq-card" data-category="mst">
            <div class="resource-icon">📝</div>
            <h3 class="resource-title">MST Papers</h3>
            <p class="resource-description">Select MST 1, MST 2, or MST 3 papers</p>
            <div class="pyq-sections mst-sections">
                <button class="resource-btn pyq-btn" data-type="mst-1">MST 1</button>
                <button class="resource-btn pyq-btn" data-type="mst-2">MST 2</button>
                <button class="resource-btn pyq-btn" data-type="mst-3">MST 3</button>
            </div>
        </div>

        <div class="resource-card" data-category="end-sem">
            <div class="resource-icon">📚</div>
            <h3 class="resource-title">End Sem Papers</h3>
            <p class="resource-description">Previous year end semester papers</p>
            <button class="resource-btn" data-category="end-sem">View End Sem →</button>
        </div>
    `;

    const showCategoryModal = (category) => {
        if (category === 'notes') {
            showResourceModal(notesResources, 'Notes');
            return;
        }
        if (category === 'end-sem') {
            showResourceModal(endSemResources, 'End Semester Papers');
            return;
        }
        if (category === 'mst') {
            showResourceModal(allMstResources, 'MST Papers');
        }
    };

    resourcesGrid.querySelectorAll('.resource-card[data-category]').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.pyq-btn')) {
                return;
            }
            createRipple(card, e);
            showCategoryModal(card.getAttribute('data-category'));
        });
    });

    resourcesGrid.querySelectorAll('.resource-btn[data-category]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            createRipple(button, e);
            showCategoryModal(button.getAttribute('data-category'));
        });
    });

    resourcesGrid.querySelectorAll('.pyq-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            createRipple(btn, e);

            const type = btn.getAttribute('data-type');
            if (type === 'mst-1') {
                showResourceModal(mst1Resources, 'MST 1 Papers');
            } else if (type === 'mst-2') {
                showResourceModal(mst2Resources, 'MST 2 Papers');
            } else if (type === 'mst-3') {
                showResourceModal(mst3Resources, 'MST 3 Papers');
            }
        });
    });
}

// ========== SHOW RESOURCE MODAL ==========
function showResourceModal(resources, title) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.resource-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.className = 'resource-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeResourceModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="modal-close" onclick="closeResourceModal()">×</button>
            </div>
            <div class="modal-body">
                ${resources.length === 0 ? `
                    <div class="no-resources-modal">
                        No resources available in this category yet.
                    </div>
                ` : resources.map(resource => `
                    <div class="resource-item" onclick="openResource('${resource.fileURL}', '${resource.title}')">
                        <div class="resource-item-icon">📄</div>
                        <div class="resource-item-info">
                            <h4>${resource.title}</h4>
                            <p>Subject: ${resource.subject}</p>
                            <p>Uploaded: ${new Date(resource.uploadDate).toLocaleDateString()}</p>
                            ${resource.uploadedBy ? `<p>By: ${resource.uploadedBy}</p>` : ''}
                        </div>
                        <div class="resource-item-arrow">→</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add modal styles dynamically
    if (!document.querySelector('#modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .resource-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(5px);
            }
            .modal-content {
                position: relative;
                background: var(--card-bg);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                max-width: 600px;
                max-height: 80vh;
                width: 90%;
                overflow: hidden;
                animation: modalFadeIn 0.3s ease-out;
            }
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            .modal-header h2 {
                margin: 0;
                color: var(--text-primary);
            }
            .modal-close {
                background: none;
                border: none;
                color: var(--text-secondary);
                font-size: 2rem;
                cursor: pointer;
                padding: 0;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.3s ease;
            }
            .modal-close:hover {
                background: rgba(255, 255, 255, 0.1);
                color: var(--text-primary);
            }
            .modal-body {
                padding: 2rem;
                max-height: 60vh;
                overflow-y: auto;
            }
            .resource-item {
                display: flex;
                align-items: center;
                padding: 1rem;
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                margin-bottom: 1rem;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .resource-item:hover {
                border-color: var(--primary-green);
                background: rgba(0, 255, 136, 0.05);
            }
            .resource-item-icon {
                font-size: 2rem;
                margin-right: 1rem;
            }
            .resource-item-info {
                flex: 1;
            }
            .resource-item-info h4 {
                margin: 0 0 0.5rem 0;
                color: var(--text-primary);
            }
            .resource-item-info p {
                margin: 0.25rem 0;
                color: var(--text-secondary);
                font-size: 0.9rem;
            }
            .resource-item-arrow {
                font-size: 1.5rem;
                color: var(--primary-green);
                margin-left: 1rem;
            }
            .no-resources-modal {
                padding: 1.5rem;
                border: 1px dashed rgba(255, 255, 255, 0.2);
                border-radius: 12px;
                color: var(--text-secondary);
                text-align: center;
            }
            @keyframes modalFadeIn {
                from {
                    opacity: 0;
                    transform: scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        `;
        document.head.appendChild(modalStyles);
    }
}

// ========== CLOSE RESOURCE MODAL ==========
function closeResourceModal() {
    const modal = document.querySelector('.resource-modal');
    if (modal) {
        modal.remove();
    }
}

// ========== OPEN RESOURCE ==========
// ========== OPEN RESOURCE ==========
function openResource(fileURL, title) {
    // Cloudinary provides an absolute HTTPS URL, so we can use it directly
    window.open(fileURL, '_blank');
    console.log(`Opening resource: ${title}`);
}

// ========== SHOW ERROR MESSAGE ==========
function showErrorMessage(message) {
    const resourcesGrid = document.querySelector('.resources-grid');
    if (resourcesGrid) {
        resourcesGrid.innerHTML = `
            <div class="error-message">
                <h3>⚠️ Error</h3>
                <p>${message}</p>
                <button onclick="fetchResources()" class="retry-btn">Retry</button>
            </div>
        `;
    }
}

// ========== RIPPLE EFFECT ==========
function createRipple(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(0, 255, 136, 0.3);
        top: ${y}px;
        left: ${x}px;
        pointer-events: none;
        animation: rippleEffect 0.6s ease-out;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

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

// Observe resource cards
document.querySelectorAll('.resource-card, .resources-header').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    displaySelectedInfo();
    fetchResources();
});