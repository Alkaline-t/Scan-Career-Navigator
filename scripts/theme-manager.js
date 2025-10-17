// Theme Manager
// Force dark theme only
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark-theme');
    // keep a minimal API in case other scripts reference window.themeManager
    window.themeManager = {
        isDark: true,
        setTheme: () => {},
        toggleTheme: () => {}
    };
});