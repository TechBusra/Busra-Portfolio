// custom.js

// Smooth scrolling for anchor links
document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const homeLink = document.getElementById('home-link');
        const aboutLink = document.getElementById('about-link');
        const portfolioLink = document.getElementById('portfolio-link');
        const contactLink = document.getElementById('contact-link');

        const homeSection = document.getElementById('home');
        const aboutSection = document.getElementById('about');
        const portfolioSection = document.getElementById('portfolio');
        const contactSection = document.getElementById('contact');

        // Function to show a section and hide others
        function showSection(sectionToShow) {
            const sections = [homeSection, aboutSection, portfolioSection, contactSection];
            sections.forEach(section => section.style.display = 'none');
            sectionToShow.style.display = 'block';
        }

        // Add event listeners to navigation links
        homeLink.addEventListener('click', () => showSection(homeSection));
        aboutLink.addEventListener('click', () => showSection(aboutSection));
        portfolioLink.addEventListener('click', () => showSection(portfolioSection));
        contactLink.addEventListener('click', () => showSection(contactSection));

        // Show the Home section by default
        showSection(homeSection);
  



