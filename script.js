  // Animation des barres de compétences
  const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.dataset.width;
                entry.target.style.width = `${width}%`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
};

// Gestion du scroll pour le bouton "Retour en haut"
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.remove('opacity-0', 'invisible');
        backToTop.classList.add('opacity-100', 'visible');
    } else {
        backToTop.classList.remove('opacity-100', 'visible');
        backToTop.classList.add('opacity-0', 'invisible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Menu mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Fermer le menu mobile au clic sur un lien
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Effet de particules
const createParticles = () => {
    const particles = document.getElementById('particles');
    const count = 30;
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full';
        
        // Couleur au hasard (violet ou cyan)
        const color = Math.random() > 0.5 ? 'bg-neonPurple' : 'bg-neonCyan';
        particle.classList.add(color);
        
        // Taille au hasard
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Position au hasard
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Animation au hasard
        particle.style.animation = `float ${Math.random() * 10 + 5}s infinite ease-in-out`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        particles.appendChild(particle);
    }
};


    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        console.log("🧠 Formulaire en cours de soumission...");
        console.log("Nom :", form.name.value);
        console.log("Email :", form.email.value);
        console.log("Sujet :", form.subject.value);
        console.log("Message :", form.message.value);
        console.log("Consentement accepté :", form.consent.checked);

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                console.log("✅ Message envoyé !");
                // ✅ ici tu rediriges après succès
                window.location.href = "merci.html";
            } else {
                console.error("❌ Erreur lors de l'envoi :", response.statusText);
                alert("Une erreur est survenue lors de l'envoi du message.");
            }
        } catch (error) {
            console.error("⚠️ Exception :", error);
            alert("Erreur réseau. Merci de réessayer plus tard.");
        }
    });

document.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
    createParticles();
    
    // Smooth scroll pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});