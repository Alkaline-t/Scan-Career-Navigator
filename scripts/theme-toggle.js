const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Define color variables for light and dark modes
const themes = {
    light: {
        '--bg-color': '#f9f9f9',
        '--card-bg': '#ffffff',
        '--text-color': '#1a1a1a',
        '--header-bg': '#ffffff',
        '--header-text': '#1a1a1a',
        '--link-color': '#1d4ed8'
    },
    dark: {
        '--bg-color': '#121212',
        '--card-bg': '#1e1e1e',
        '--text-color': '#f5f5f5',
        '--header-bg': '#1b1b1b',
        '--header-text': '#f5f5f5',
        '--link-color': '#60a5fa'
    }
};

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', savedTheme);
applyTheme(savedTheme);

// Apply colors to the page
function applyTheme(themeName) {
    const theme = themes[themeName];

    // Update CSS variables
    for (const key in theme) {
        root.style.setProperty(key, theme[key]);
    }

    // Update all sections, cards, text
    document.querySelectorAll('section, .card, .feature-card, .career-card').forEach(el => {
        el.style.backgroundColor = theme['--card-bg'];
        el.style.color = theme['--text-color'];
    });

    document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span,a').forEach(el => {
        el.style.color = theme['--text-color'];
    });

    // Update header/navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.backgroundColor = theme['--header-bg'];
        navbar.style.color = theme['--header-text'];
    }

    // Update links inside navbar
    document.querySelectorAll('.nav-link, .dropdown-item, .mobile-nav-item, .mobile-dropdown-item').forEach(el => {
        el.style.color = theme['--header-text'];
    });

    // Update body background
    document.body.style.backgroundColor = theme['--bg-color'];

    // Toggle sun/moon icons
    const sun = themeToggle.querySelector('.sun-icon');
    const moon = themeToggle.querySelector('.moon-icon');
    sun.style.display = themeName === 'dark' ? 'none' : 'inline-block';
    moon.style.display = themeName === 'dark' ? 'inline-block' : 'none';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
}); 