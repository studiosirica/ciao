document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll('section');

    function revealSections() {
        let scrollPosition = window.scrollY + window.innerHeight;
        sections.forEach(section => {
            if (scrollPosition > section.offsetTop + section.offsetHeight / 4) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealSections);
    revealSections(); // Reveal sections on initial load
});
