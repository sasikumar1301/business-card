const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

// Initially show only the Home section
sections[0].classList.remove('hidden');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);

        // Hide all sections
        sections.forEach(s => s.classList.add('hidden'));

        // Show the clicked section
        section.classList.remove('hidden');
    });
});