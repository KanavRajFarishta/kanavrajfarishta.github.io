document.addEventListener('DOMContentLoaded', () => {
    // Animate sections on load
    document.querySelectorAll('.intro').forEach(section => {
        section.classList.add('fade-up');
    });

    // Smooth Scroll (Optional)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href'))
                        .scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
