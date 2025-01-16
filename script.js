const menuIcon = document.querySelector('#menu-icon');
const navlinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navlinks.classList.toggle('active');
}

// Initialize EmailJS
(function() {
    emailjs.init("urjO9jFPJ9mH0EYM2"); // Replace with your EmailJS public key
})();

// Form handling
const contactForm = document.getElementById('contact-form');
const sendBtn = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Change button text while sending
    sendBtn.textContent = 'Sending...';
    
    const templateParams = {
        from_name: this.name.value,
        from_email: this.email.value,
        message: this.message.value,
        to_email: 'phuthanhtran26.work@gmail.com'
    };

    emailjs.send('service_416lfh1', 'template_5u7gx5m', templateParams)
        .then(function() {
            sendBtn.textContent = 'Send Message';
            alert('Message sent successfully!');
            contactForm.reset();
        }, function(error) {
            sendBtn.textContent = 'Send Message';
            alert('Failed to send message. Please try again.');
        });
});