
// Style imported in HTML for better performance

import { loadHeader } from './src/components/header.js'
import { loadFooter } from './src/components/footer.js'

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();

    // Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});
