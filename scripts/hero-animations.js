// Floating card animations with parallax effect
const floatingCards = document.querySelectorAll('.float-card');
const heroSection = document.querySelector('.hero-section');

function updateParallax(e) {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    floatingCards.forEach(card => {
        const depth = parseFloat(card.getAttribute('data-float')) * 20;
        const moveX = mouseX * depth;
        const moveY = mouseY * depth;
        card.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}

if (heroSection) {
    heroSection.addEventListener('mousemove', updateParallax);
}

// Counter animation
const counters = document.querySelectorAll('.counter');

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // Animation duration in milliseconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    function updateCount() {
        current += step;
        if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCount);
        } else {
            counter.textContent = target;
        }
    }

    updateCount();
}

// Intersection Observer for counter animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));

// Modal video functionality
const demoButton = document.querySelector('[data-modal="demo-video"]');
const modal = document.createElement('div');
modal.className = 'video-modal';
modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
        <button class="modal-close">
            <i class="ph ph-x"></i>
        </button>
        <div class="video-container">
            <iframe src="about:blank" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
`;

document.body.appendChild(modal);

demoButton?.addEventListener('click', () => {
    modal.classList.add('active');
    const iframe = modal.querySelector('iframe');
    iframe.src = 'https://www.youtube.com/embed/your-video-id?autoplay=1';
});

modal.querySelector('.modal-close')?.addEventListener('click', () => {
    modal.classList.remove('active');
    const iframe = modal.querySelector('iframe');
    iframe.src = 'about:blank';
});

modal.querySelector('.modal-overlay')?.addEventListener('click', () => {
    modal.classList.remove('active');
    const iframe = modal.querySelector('iframe');
    iframe.src = 'about:blank';
});