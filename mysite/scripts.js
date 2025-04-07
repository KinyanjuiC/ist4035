// Loading Animation
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 1000);
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
}

// Toggle theme
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Smooth page transitions
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.hash || this.target === '_blank') return;
            
            e.preventDefault();
            const destination = document.querySelector(this.hash);
            
            // Add loading animation
            document.body.classList.add('page-transition');
            
            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        });
    });
});