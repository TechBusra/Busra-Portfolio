(function () {
    function smoothScrollTo(targetId) {
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    function handleNavClick(e) {
        e.preventDefault();
        const targetSectionId = this.getAttribute('href');
        smoothScrollTo(targetSectionId);
    }

    function showSection(sectionToShow) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.style.display = 'none');
        sectionToShow.style.display = 'block';
    }

    document.addEventListener('DOMContentLoaded', function () {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.section');

        navLinks.forEach(link => link.addEventListener('click', handleNavClick));

        const menuToggle = document.getElementById('menu-toggle');
        const navLinksContainer = document.getElementById('nav-links');

        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('hidden');
        });


        showSection(document.getElementById('home'));
    });
})();
