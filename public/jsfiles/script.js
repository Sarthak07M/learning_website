// ========== STATE MANAGEMENT ==========
let selectedBranch = null;
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

// ========== SMOOTH SCROLL FOR NAVIGATION ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== ACTIVE NAVIGATION LINK ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
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

// ========== BRANCH CARD INTERACTIONS ==========
const branchCards = document.querySelectorAll('.branch-card');

branchCards.forEach(card => {
    card.addEventListener('click', function(e) {
        const branch = this.getAttribute('data-branch');
        selectedBranch = branch;
        
        // Add ripple effect
        createRipple(this, e);
        
        // Update selected branch display
        updateSelectedInfo();
        
        // Scroll to semester section
        setTimeout(() => {
            document.querySelector('#semesters')?.scrollIntoView({
                behavior: 'smooth'
            });
        }, 300);
        
        // Store selected branch
        sessionStorage.setItem('selectedBranch', branch);
    });
});

// ========== SEMESTER CARD INTERACTIONS ==========
const semesterCards = document.querySelectorAll('.semester-card');

semesterCards.forEach(card => {
    card.addEventListener('click', function(e) {
        const semester = this.getAttribute('data-semester');
        selectedSemester = semester;
        
        // Add ripple effect
        createRipple(this, e);
        
        // Update selected semester display
        updateSelectedInfo();
        
        // Scroll to subjects section
        setTimeout(() => {
            document.querySelector('#subjects')?.scrollIntoView({
                behavior: 'smooth'
            });
        }, 300);
        
        // Store selected semester
        sessionStorage.setItem('selectedSemester', semester);
        
        // Here you can add logic to filter subjects based on branch and semester
        console.log(`Selected: ${selectedBranch} - Semester ${semester}`);
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

// ========== SUBJECT CARD ANIMATIONS ==========
const subjectCards = document.querySelectorAll('.subject-card');

subjectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.zIndex = '1';
    });
    
    card.addEventListener('click', () => {
        const subjectCode = card.querySelector('.subject-code')?.textContent;
        // Add click effect
        card.style.transform = 'translateY(-10px) scale(0.98)';
        setTimeout(() => {
            card.style.transform = 'translateY(-10px) scale(1)';
        }, 100);
        
        console.log(`Clicked on subject: ${subjectCode}`);
        // Here you can navigate to subject details page
    });
});

// ========== PARALLAX EFFECT FOR HERO ORB ==========
const orb = document.querySelector('.orb');
const orbContainer = document.querySelector('.orb-container');

if (orbContainer && orb) {
    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPercent = (clientX / innerWidth - 0.5) * 20;
        const yPercent = (clientY / innerHeight - 0.5) * 20;
        
        orb.style.transform = `translate(${xPercent}px, ${yPercent}px) scale(1)`;
    });
}

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
document.querySelectorAll('.branch-card, .semester-card, .subject-card, .teaser-content, .arena-header, .semester-header, .subjects-header').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

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

// ========== CURSOR TRAIL EFFECT ==========
const cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, rgba(0, 255, 136, 0.6), transparent);
        border-radius: 50%;
        pointer-events: none;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        z-index: 9999;
        animation: trailFade 0.5s ease-out forwards;
    `;
    
    document.body.appendChild(trail);
    cursorTrail.push(trail);
    
    if (cursorTrail.length > trailLength) {
        const oldTrail = cursorTrail.shift();
        oldTrail.remove();
    }
    
    setTimeout(() => trail.remove(), 500);
});

const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(trailStyle);

// ========== BUTTON HOVER EFFECTS ==========
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-contribute');

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--x', `${x}px`);
        this.style.setProperty('--y', `${y}px`);
    });
});

// ========== SCROLL PROGRESS INDICATOR ==========
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-green), var(--primary-cyan));
    z-index: 10000;
    transition: width 0.1s ease;
    box-shadow: 0 0 10px var(--glow-green);
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.width = `${scrollPercentage}%`;
});

// ========== PERFORMANCE OPTIMIZATION ==========
// Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========== KEYBOARD NAVIGATION ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        window.scrollBy({ top: 100, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
        window.scrollBy({ top: -100, behavior: 'smooth' });
    }
});

// ========== EASTER EGG - KONAMI CODE ==========
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 5s linear infinite';
    
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);
    
    setTimeout(() => {
        document.body.style.animation = '';
        rainbowStyle.remove();
    }, 5000);
}

// ========== LOADING ANIMATION ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========== REDUCE MOTION FOR ACCESSIBILITY ==========
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// ========== AUTO-HIDE CURSOR ON INACTIVITY ==========
let cursorTimeout;
document.addEventListener('mousemove', () => {
    document.body.style.cursor = 'default';
    clearTimeout(cursorTimeout);
    cursorTimeout = setTimeout(() => {
        document.body.style.cursor = 'none';
    }, 3000);
});

// ========== CONSOLE MESSAGE ==========
console.log('%c🚀 IET Resources', 'font-size: 24px; font-weight: bold; color: #00ff88;');
console.log('%cBuilt with ❤️ for students', 'font-size: 14px; color: #00d4ff;');
console.log('%cTip: Try the Konami Code! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA', 'font-size: 12px; color: #888;');

// ========== SERVICE WORKER (Optional PWA) ==========
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

// ========== ANALYTICS PLACEHOLDER ==========
function trackEvent(category, action, label) {
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
    // Add your analytics code here (Google Analytics, etc.)
}

// Track button clicks
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('Button', 'Click', btn.textContent);
    });
});

// ========== INITIALIZE ALL FEATURES ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎉 IET Resources initialized successfully!');
    
    // Restore previous selections from session storage
    const savedBranch = sessionStorage.getItem('selectedBranch');
    const savedSemester = sessionStorage.getItem('selectedSemester');
    
    if (savedBranch) {
        selectedBranch = savedBranch;
    }
    
    if (savedSemester) {
        selectedSemester = savedSemester;
    }
    
    updateSelectedInfo();
    
    // Add any initialization code here
    initializeTooltips();
    initializeModals();
});

function initializeTooltips() {
    // Placeholder for tooltip functionality
}

function initializeModals() {
    // Placeholder for modal functionality
}

// ========== SMOOTH TRANSITIONS BETWEEN SECTIONS ==========
const sectionsForTransition = document.querySelectorAll('section');
const transitionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1)';
            entry.target.style.opacity = '1';
        }
    });
}, {
    threshold: 0.2
});

sectionsForTransition.forEach(section => {
    section.style.transform = 'scale(0.95)';
    section.style.opacity = '0';
    section.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    transitionObserver.observe(section);
});
