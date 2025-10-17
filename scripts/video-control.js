// Background animations controller
document.addEventListener('DOMContentLoaded', function() {
    const animatedBg = document.querySelector('.animated-background');
    if (!animatedBg) return;

    // Add any additional animation controls here
    function updateAnimations() {
        requestAnimationFrame(updateAnimations);
    }

    // Start animation loop
    updateAnimations();
});