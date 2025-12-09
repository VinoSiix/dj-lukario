// Custom Cursor
const cursor = document.querySelector('.cursor');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// Mouse move event
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animation loop for smooth cursor movement
function animateCursor() {
    // Cursor follows mouse directly with much higher responsiveness
    cursorX += (mouseX - cursorX) * 0.9;
    cursorY += (mouseY - cursorY) * 0.9;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Hover effects for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .track-card, .gallery-item, .event-card, .social-link, input, textarea');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Click effect
document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
});

// Hide cursor when it leaves the window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
});

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// Navigation Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animations (Fade In Effect)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Animated Counter for Stats
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
};

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Track Card Play Button Interaction
document.querySelectorAll('.track-card').forEach(card => {
    const playOverlay = card.querySelector('.play-overlay');
    const playIcon = playOverlay.querySelector('i');
    
    playOverlay.addEventListener('click', () => {
        // Toggle play icon
        if (playIcon.classList.contains('fa-play')) {
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
            // Add pulse animation to the card
            card.style.animation = 'pulse 1s infinite';
        } else {
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
            card.style.animation = '';
        }
    });
});

// Gallery Lightbox Effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${img.src}" alt="${img.alt}">
                <button class="lightbox-close">&times;</button>
            </div>
        `;
        
        // Add lightbox styles
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const lightboxContent = lightbox.querySelector('.lightbox-content');
        lightboxContent.style.cssText = `
            position: relative;
            width: 90vw;
            height: 90vh;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        const lightboxImg = lightbox.querySelector('img');
        lightboxImg.style.cssText = `
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 10px;
        `;
        
        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.style.cssText = `
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(lightbox);
        
        // Fade in
        setTimeout(() => {
            lightbox.style.opacity = '1';
        }, 10);
        
        // Close functionality
        const closeLightbox = () => {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(lightbox);
            }, 300);
        };
        
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });
    });
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const eventType = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Thank you for your message! We'll get back to you soon.</p>
        `;
        successMessage.style.cssText = `
            background: linear-gradient(135deg, #ff006e, #00f5ff);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            margin-top: 20px;
            animation: fadeInUp 0.5s ease;
        `;
        
        // Reset form and show success message
        contactForm.reset();
        contactForm.appendChild(successMessage);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.style.opacity = '0';
            setTimeout(() => {
                if (contactForm.contains(successMessage)) {
                    contactForm.removeChild(successMessage);
                }
            }, 500);
        }, 5000);
    });
}

// Event Button Click Handler
document.querySelectorAll('.btn-event').forEach(btn => {
    btn.addEventListener('click', () => {
        // Create modal for ticket information
        const modal = document.createElement('div');
        modal.className = 'ticket-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>Get Your Tickets!</h3>
                <p>Tickets for this event are available now. Click below to proceed to the ticket platform.</p>
                <div class="modal-buttons">
                    <button class="btn-primary modal-cta">BUY TICKETS</button>
                    <button class="btn-secondary modal-close">CLOSE</button>
                </div>
            </div>
        `;
        
        // Add modal styles
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.cssText = `
            background: linear-gradient(135deg, #1a0033, #0a0a0a);
            padding: 40px;
            border-radius: 15px;
            border: 2px solid #ff006e;
            text-align: center;
            max-width: 400px;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        `;
        
        modal.querySelector('h3').style.cssText = `
            font-family: 'Orbitron', monospace;
            font-size: 1.5rem;
            margin-bottom: 20px;
            color: #00f5ff;
        `;
        
        modal.querySelector('p').style.cssText = `
            margin-bottom: 30px;
            color: #b0b0b0;
        `;
        
        const modalButtons = modal.querySelector('.modal-buttons');
        modalButtons.style.cssText = `
            display: flex;
            gap: 15px;
            justify-content: center;
        `;
        
        document.body.appendChild(modal);
        
        // Animate in
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }, 10);
        
        // Close functionality
        const closeModal = () => {
            modal.style.opacity = '0';
            modalContent.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        };
        
        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.querySelector('.modal-cta').addEventListener('click', () => {
            // Simulate redirect to ticket platform
            alert('Redirecting to ticket platform...');
            closeModal();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    });
});

// Hero Button Interactions
document.querySelector('.btn-primary').addEventListener('click', () => {
    // Scroll to music section
    document.querySelector('#music').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.btn-secondary').addEventListener('click', () => {
    // Scroll to contact section
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - scrolled / 600;
    }
});

// Add typing effect to hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let index = 0;
    
    const typeWriter = () => {
        if (index < text.length) {
            heroSubtitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing after loading screen disappears
    setTimeout(typeWriter, 2000);
}

// Add hover sound effect simulation (visual feedback)
document.querySelectorAll('.btn-primary, .btn-secondary, .nav-link, .social-link').forEach(element => {
    element.addEventListener('mouseenter', () => {
        const currentTransform = window.getComputedStyle(element).transform;
        if (currentTransform === 'none') {
            element.style.transform = 'scale(1.05)';
        } else {
            element.style.transform = currentTransform + ' scale(1.05)';
        }
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = '';
    });
});

// Dynamic year in footer
const footerYear = document.querySelector('.footer p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or lightboxes
        const lightbox = document.querySelector('.lightbox');
        const modal = document.querySelector('.ticket-modal');
        
        if (lightbox) {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(lightbox)) {
                    document.body.removeChild(lightbox);
                }
            }, 300);
        }
        
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                }
            }, 300);
        }
    }
});

// Performance optimization: Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        // Scroll-based animations here
        const scrolled = window.pageYOffset;
        
        // Add parallax effect to hero section
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - scrolled / 600;
        }
        
        // Add subtle animations to floating particles
        const particles = document.querySelector('.particles');
        if (particles) {
            particles.style.transform = `translateY(${scrolled * 0.2}px) rotate(${scrolled * 0.1}deg)`;
        }
        
        // Add sound wave animation
        const soundWave = document.querySelector('.sound-wave');
        if (soundWave) {
            soundWave.style.transform = `translateY(${-scrolled * 0.3}px)`;
        }
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.animation = 'fadeIn 0.5s ease';
    });
});

// Console Easter egg
console.log('%c🎵 DJ LUKARIO PORTFOLIO 🎵', 'font-size: 20px; color: #ff006e; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
console.log('%cWelcome to the electronic music experience!', 'font-size: 14px; color: #00f5ff;');
