document.addEventListener('DOMContentLoaded', function() {
    // Gestione delle sezioni visibili
    let sections = document.querySelectorAll('section');

    function revealSections() {
        let scrollPosition = window.scrollY + window.innerHeight;
        sections.forEach(section => {
            if (scrollPosition > section.offsetTop + section.offsetHeight / 4) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible'); // Rimuovi 'visible' quando la sezione non è visibile
            }
        });
    }

    window.addEventListener('scroll', revealSections);
    revealSections(); // Rivelazione sezioni al caricamento iniziale

    // Gestione del menu a tendina
    const menuButton = document.querySelector('.menu-toggle'); // Assicurati che questo selettore sia corretto
    const nav = document.querySelector('nav');

    if (menuButton && nav) {
        menuButton.addEventListener('click', function() {
            nav.classList.toggle('show'); // Usa 'show' se è quello usato nel CSS
        });

        // Chiudi il menu se cliccato fuori
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
                nav.classList.remove('show'); // Usa 'show' se è quello usato nel CSS
            }
        });
    }
});
