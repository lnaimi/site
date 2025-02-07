// Toggle navigation menu on mobile
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Animation for service cards when they are visible on the screen
const serviceCards = document.querySelectorAll('.card');

const revealCards = () => {
    serviceCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardPosition < windowHeight - 50) {
            card.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

document.addEventListener('DOMContentLoaded', function() {
    // Supprimons les anciennes déclarations
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav-menu');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            // Ajout/suppression de la classe active pour le menu et le bouton
            nav.classList.toggle('active');
            this.classList.toggle('active');
            
            // Empêcher le défilement du body quand le menu est ouvert
            document.body.classList.toggle('menu-open');
        });

        // Fermer le menu quand on clique sur un lien
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', function(e) {
            if (nav.classList.contains('active') && 
                !nav.contains(e.target) && 
                !hamburger.contains(e.target)) {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        // Empêcher la fermeture lors du clic à l'intérieur du menu
        nav.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Marquer le lien actif
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Gestion du scroll
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });

    // Animation des cartes d'expertise
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Animation du texte de la section héro
    const heroText = document.querySelector('.hero-content h1');
    const heroP = document.querySelector('.hero-content p');
    
    heroText.style.opacity = '0';
    heroP.style.opacity = '0';
    
    setTimeout(() => {
        heroText.style.transition = 'opacity 1s ease-out';
        heroText.style.opacity = '1';
    }, 500);
    
    setTimeout(() => {
        heroP.style.transition = 'opacity 1s ease-out';
        heroP.style.opacity = '1';
    }, 1000);
});

// Validation du formulaire de contact
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupération des valeurs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validation simple
    if (!name || !email || !subject || !message) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse email valide');
        return;
    }

    // Ici, vous pouvez ajouter le code pour envoyer le formulaire
    alert('Message envoyé avec succès !');
    this.reset();
});
