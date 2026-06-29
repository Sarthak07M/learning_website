// ========== GET URL PARAMETERS ==========
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// ========== STATE MANAGEMENT ==========
let selectedBranch = getUrlParameter('branch');

// Fallback: if branch not supplied as query param, try to parse from pathname (/branch/sem)
if (!selectedBranch) {
    const parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length >= 2 && parts[1].toLowerCase() === 'sem') {
        selectedBranch = parts[0];
    }
}
let selectedSemester = null;

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

// ========== DISPLAY SELECTED BRANCH ==========
function displaySelectedBranch() {
    const branchDisplay = document.getElementById('selected-branch');
    if (branchDisplay && selectedBranch) {
        branchDisplay.textContent = selectedBranch;
    }
}

// ========== SEMESTER CARD INTERACTIONS ==========
const semesterCards = document.querySelectorAll('.semester-card');

semesterCards.forEach(card => {
    card.addEventListener('click', function(e) {
        const semester = this.getAttribute('data-semester');
        selectedSemester = semester;
        
        // Add ripple effect
        createRipple(this, e);
        
        // Navigate to branch/sem{semester} route (clean URL format)
        const branchSlug = selectedBranch ? selectedBranch.toUpperCase().replace(/\./g, '').replace(/\s+/g, '') : '';
        setTimeout(() => {
            window.location.href = `/${encodeURIComponent(branchSlug)}/sem${encodeURIComponent(semester)}`;
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
        background: rgba(0, 212, 255, 0.3);
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

// Observe semester cards
document.querySelectorAll('.semester-card, .semester-header').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    displaySelectedBranch();
});
