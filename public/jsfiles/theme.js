// Theme Management System
class ThemeManager {
    constructor() {
        this.currentTheme = this.loadTheme();
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupToggleListener();
    }

    loadTheme() {
        // Check localStorage first, then system preference
        const saved = localStorage.getItem('theme');
        if (saved) {
            return saved;
        }
        // Default to dark theme
        return 'dark';
    }

    saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    applyTheme(theme) {
        const html = document.documentElement;
        
        if (theme === 'light') {
            html.setAttribute('data-theme', 'light');
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        } else {
            html.setAttribute('data-theme', 'dark');
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        }
        
        this.currentTheme = theme;
        this.updateToggleState();
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        this.saveTheme(newTheme);
    }

    setupToggleListener() {
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    updateToggleState() {
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            if (this.currentTheme === 'light') {
                toggle.classList.add('active');
                toggle.setAttribute('aria-label', 'Switch to dark theme');
            } else {
                toggle.classList.remove('active');
                toggle.setAttribute('aria-label', 'Switch to light theme');
            }
        }
    }
}

// Initialize theme manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ThemeManager();
    });
} else {
    new ThemeManager();
}
