// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add revealing classes to sections
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = [
        '.hero-content', '.hero-visual',
        '.feature-card', '.price-card',
        '.testimonial-card', '.cta-content'
    ];

    revealElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('hide-reveal');
            observer.observe(el);
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Sticky Navbar Transition
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Add CSS for reveal animations dynamically or it should be in index.css
    const style = document.createElement('style');
    style.textContent = `
        .hide-reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});
