document.addEventListener('DOMContentLoaded', () => {
    // Theme configuration
    const THEME_DARK = 'dark';
    const THEME_LIGHT = 'light';
    const DEFAULT_THEME = THEME_DARK; // Set dark as default

    // Get DOM elements
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;

    // Icons for theme states
    const ICONS = {
        [THEME_DARK]: '🌙',
        [THEME_LIGHT]: '🌞'
    };

    // Function to apply theme
    function applyTheme(themeName) {
        // Set data-theme attribute which controls CSS variables
        root.setAttribute('data-theme', themeName);
        document.body.classList.remove(THEME_DARK, THEME_LIGHT);
        document.body.classList.add(themeName);
        
        // Update button icon with animation
        themeToggle.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            themeToggle.textContent = ICONS[themeName];
            themeToggle.style.transform = 'rotate(0)';
        }, 150);
        
        // Store theme preference
        localStorage.setItem('theme', themeName);
        
        // Dispatch theme change event
        window.dispatchEvent(new CustomEvent('themechange', { 
            detail: { theme: themeName } 
        }));
    }

    // Initialize theme
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || DEFAULT_THEME;
        applyTheme(savedTheme);
        themeToggle.textContent = ICONS[savedTheme];
    }

    // Toggle theme on button click with smooth animation
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme');
            const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
            applyTheme(newTheme);
        });
    }

    // Initialize theme when DOM is ready
    initTheme();
});