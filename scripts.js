document.addEventListener('DOMContentLoaded', function() {
    // Gestione delle sezioni visibili
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
    revealSections(); // Rivelazione sezioni al caricamento iniziale

    // Gestione del menu a tendina
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');

    if (menuButton && nav) {
        menuButton.addEventListener('click', function() {
            nav.classList.toggle('active');
        });

        // Chiudi il menu se cliccato fuori
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
                nav.classList.remove('active');
            }
        });
    }
});
