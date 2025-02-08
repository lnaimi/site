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
    // Supprimer l'ancien code du menu hamburger
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const header = document.querySelector('header');

    function toggleMenu() {
        navMenu.classList.toggle('show');
        hamburger.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleMenu);

    // Fermer le menu quand on clique sur un lien
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            hamburger.classList.remove('active');
        });
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });

    // Marquer le lien actif
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
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

    // Gestion des boutons d'expertise
    const buttons = document.querySelectorAll('.expertise-toggle');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const expertiseSection = this.nextElementSibling;
            
            if (expertiseSection.style.display === 'none' || expertiseSection.style.display === '') {
                expertiseSection.style.display = 'block';
                this.innerHTML = 'Masquer l\'expertise <i class="fas fa-chevron-up"></i>';
            } else {
                expertiseSection.style.display = 'none';
                this.innerHTML = 'Voir l\'expertise <i class="fas fa-chevron-down"></i>';
            }
        });
    });
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
