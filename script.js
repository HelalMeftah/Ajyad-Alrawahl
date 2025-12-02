// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Language Toggle (Placeholder)
function toggleLanguage() {
    alert('سيتم إضافة النسخة الإنجليزية قريباً');
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById('navLinks').classList.remove('active');
        }
    });
});

// Scroll Animation
const observerOptions = {
    threshold
}
document.getElementById("whatsapp-button").addEventListener("click", function() {
    // هنا يمكنك إضافة أي تأثيرات أو تسجيلات إذا أردت
});