document.addEventListener('DOMContentLoaded', function() {
    const threeDotTrigger = document.querySelector('.three-dot-trigger');
    const threeDotMenu = document.querySelector('.three-dot-menu');

    // Toggle menu when clicking the three-dot button
    threeDotTrigger.addEventListener('click', function(e) {
        e.stopPropagation();
        threeDotMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!threeDotMenu.contains(e.target)) {
            threeDotMenu.classList.remove('active');
        }
    });
});