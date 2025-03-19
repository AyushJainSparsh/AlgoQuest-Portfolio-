// ===== SMOOTH SCROLLING FOR NAVIGATION =====
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== PROFILE PICTURE CLICK ANIMATION =====
const profileImg = document.querySelector('.profile-photo img');
profileImg.addEventListener('click', () => {
    if (profileImg.style.borderRadius === '10px') {
        profileImg.style.borderRadius = '50%';
        profileImg.style.width = '150px';
        profileImg.style.height = '150px';
    } else {
        profileImg.style.borderRadius = '10px';
        profileImg.style.width = '250px';
        profileImg.style.height = '300px';
    }
});

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert(`Thanks, ${name}! I'll get back to you soon.`);
        contactForm.reset(); // Clear form after submission
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
