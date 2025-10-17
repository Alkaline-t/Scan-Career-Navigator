document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations for career tiles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });

    // Add hover animations for career tiles
    document.querySelectorAll('.career-tile').forEach(tile => {
        tile.addEventListener('mouseenter', () => {
            tile.querySelector('.tile-icon').style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        tile.addEventListener('mouseleave', () => {
            tile.querySelector('.tile-icon').style.transform = 'scale(1) rotate(0deg)';
        });
    });
});