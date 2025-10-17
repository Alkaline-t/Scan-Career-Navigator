document.addEventListener('DOMContentLoaded', () => {
    const cta = document.querySelector('.hero-cta');
    if (!cta) return;

    // reveal with a short delay
    setTimeout(() => cta.classList.add('revealed'), 600);

    // click handling for navigation
    cta.addEventListener('click', (e) => {
        const btn = e.target.closest('.cta-btn');
        if (!btn) return;
        const href = btn.getAttribute('data-link');
        if (href) window.location.href = href;
    });

    // keyboard activation and focus management
    cta.querySelectorAll('.cta-btn').forEach(btn => {
        btn.setAttribute('tabindex', '0');
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
        btn.addEventListener('focus', () => btn.closest('.cta-item')?.classList.add('focused'));
        btn.addEventListener('blur', () => btn.closest('.cta-item')?.classList.remove('focused'));
        btn.addEventListener('mouseenter', () => btn.closest('.cta-item')?.classList.add('hover'));
        btn.addEventListener('mouseleave', () => btn.closest('.cta-item')?.classList.remove('hover'));
    });
});