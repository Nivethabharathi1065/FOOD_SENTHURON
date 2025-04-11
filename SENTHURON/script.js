// Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelectorAll('.toggle-btn');

toggleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});

// Smooth Scrolling (if sections are on the same page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll('.animate-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});
