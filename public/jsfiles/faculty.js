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

// Fallback: parse from pathname like /branch/sem2 or /branch/2 when query params are not provided
if (!selectedBranch || !selectedSemester) {
    const parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length >= 2) {
        if (!selectedBranch) selectedBranch = parts[0];
        // Check for /branch/sem{number} format first
        if (!selectedSemester && parts[1].startsWith('sem')) {
            selectedSemester = parts[1].substring(3); // Extract number after 'sem'
        } else if (!selectedSemester && /^\d+$/.test(parts[1])) {
            // Fallback to /branch/number format
            selectedSemester = parts[1];
        }
    }
}

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

// ========== UPDATE SELECTED INFO ==========
function updateSelectedInfo() {
    const branchDisplay = document.getElementById('selected-branch');
    const semesterDisplay = document.getElementById('selected-semester');
    
    if (branchDisplay && selectedBranch) {
        branchDisplay.textContent = selectedBranch;
    }
    
    if (semesterDisplay && selectedSemester) {
        semesterDisplay.textContent = `Semester ${selectedSemester}`;
    }
}

// ========== SUBJECT CARD ANIMATIONS ==========
const subjectCards = document.querySelectorAll('.subject-card');

subjectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.zIndex = '1';
    });
    
    card.addEventListener('click', function(e) {
        const subject = this.getAttribute('data-subject');
        const code = this.getAttribute('data-code');
        
        // Add ripple effect
        createRipple(this, e);
        
        // Navigate to /branch/sem{semester}/subject route (clean URL)
        const branchSlug = selectedBranch ? selectedBranch.toUpperCase().replace(/\./g, '').replace(/\s+/g, '') : '';
        setTimeout(() => {
            window.location.href = `/${encodeURIComponent(branchSlug)}/sem${encodeURIComponent(selectedSemester)}/${encodeURIComponent(subject)}`;
        }, 300);
    });
});

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

// Observe all major sections and cards
document.querySelectorAll('.subject-card, .subjects-header').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    updateSelectedInfo();
});
