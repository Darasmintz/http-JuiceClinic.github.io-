document.addEventListener('DOMContentLoaded', function() {
    // Redirects for HOME, ABOUT, CONTACT, and SERVICE
    const homeLink = document.querySelector('a[href="home.html"]');
    const aboutLink = document.querySelector('a[href="about.html"]');
    const contactLink = document.querySelector('a[href="contact.html"]');
    const serviceLink = document.querySelector('a[href="service.html"]');
    
    if (homeLink) {
        homeLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'home.html'; // Redirect to home.html
        });
    }
    
    if (aboutLink) {
        aboutLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'about.html'; // Redirect to about.html
        });
    }
    
    if (contactLink) {
        contactLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'contact.html'; // Redirect to contact.html
        });
    }
    
    if (serviceLink) {
        serviceLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'service.html'; // Redirect to service.html
        });
    }
    
    // Login redirect
    const loginButton = document.querySelector('.btnn a');
    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'membership.html'; // Redirect to membership.html after login
        });
    }
    
    // Register redirect
    const registerButton = document.querySelector('.link a');
    if (registerButton) {
        registerButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'login.html'; // Redirect to login.html after register
        });
    }
    
    // About Me Section under SERVICE
    const aboutMeSection = document.getElementById('about-me');
    if (aboutMeSection) {
        aboutMeSection.innerHTML = `
            <h2>About Me</h2>
            <p>My name is Olorode Oluwafunmilayo. I was born on June 14, 2008, in Nigeria.</p>
            <p>I am passionate about promoting health and wellness through my Juice Clinic project.</p>
            <p><strong>Contact Information:</strong><br>
            Email: <a href="mailto:funmilayoolorode456@gmail.com">funmilayoolorode456@gmail.com</a><br>
            Phone: +234 808 852 0105 or +234 702 518 9076</p>
        `;
    }
});
