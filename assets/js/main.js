// ====== MOBILE NAV TOGGLE ======
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.button-menu-container');
    const navMenu = document.querySelector('.navbar ul');

    if (menuIcon && navMenu) {
        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
});

// ====== LOTTIE BACKGROUND IN HEADER ======
function initHeaderLottie() {
    const header = document.querySelector('.header');

    if (!header) return; // Safety check

    const lottieContainer = document.createElement('div');
    lottieContainer.style.position = 'absolute';
    lottieContainer.style.top = '0';
    lottieContainer.style.left = '0';
    lottieContainer.style.width = '100%';
    lottieContainer.style.height = '100%';
    lottieContainer.style.zIndex = '-1';
    header.appendChild(lottieContainer);

    lottieContainer.innerHTML = `
        <lottie-player 
            src="assets/animations/Background.json" 
            background="transparent" 
            speed="1" 
            loop 
            autoplay>
        </lottie-player>
    `;
}
document.addEventListener('DOMContentLoaded', initHeaderLottie);

// ====== HERO SECTION BACKGROUND ANIMATION ======
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');

    if (!heroSection) return; // Safety check

    const heroLottieContainer = document.createElement('div');
    heroLottieContainer.style.position = 'absolute';
    heroLottieContainer.style.top = '0';
    heroLottieContainer.style.left = '0';
    heroLottieContainer.style.width = '100%';
    heroLottieContainer.style.height = '100%';
    heroLottieContainer.style.zIndex = '-2';
    heroLottieContainer.style.opacity = '0.3';

    heroLottieContainer.innerHTML = `
        <lottie-player 
            src="assets/animations/Background.json" 
            background="transparent" 
            speed="0.8" 
            loop 
            autoplay>
        </lottie-player>
    `;

    heroSection.appendChild(heroLottieContainer);

    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'radial-gradient(circle at top, rgba(0,245,255,0.15), transparent), radial-gradient(circle at bottom, rgba(255,75,255,0.15), transparent)';
    overlay.style.zIndex = '-1';

    heroSection.appendChild(overlay);
});

// ===== Scroll Reveal for Cards =====
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.card-service-dark');

    if (serviceCards.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        serviceCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }
});

// ===== Glow Effect on Mouse Move =====
document.addEventListener('mousemove', e => {
    document.querySelectorAll('.card-service-dark').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ====== SERVICES SECTION LOTTIE ======
document.addEventListener('DOMContentLoaded', () => {
    const servicesSection = document.querySelector('.services');

    if (!servicesSection) return;

    const lottieContainer = document.createElement('div');
    lottieContainer.style.position = 'absolute';
    lottieContainer.style.top = '0';
    lottieContainer.style.left = '0';
    lottieContainer.style.width = '100%';
    lottieContainer.style.height = '100%';
    lottieContainer.style.zIndex = '-1';
    lottieContainer.style.opacity = '0.25';

    lottieContainer.innerHTML = `
        <lottie-player 
            src="https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json" 
            background="transparent" 
            speed="1" 
            loop 
            autoplay>
        </lottie-player>
    `;

    servicesSection.appendChild(lottieContainer);
});

// ====== FEATURE SECTION BACKGROUND EFFECT ======
document.addEventListener('DOMContentLoaded', () => {
    const featureSection = document.querySelector('.feature');

    if (!featureSection) return;

    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.zIndex = '-1';
    overlay.style.background = 'radial-gradient(circle at top left, rgba(0,245,255,0.1), transparent), radial-gradient(circle at bottom right, rgba(255,75,255,0.1), transparent)';
    
    featureSection.appendChild(overlay);
});

// ====== STATS SECTION EXTRA GLOW ======
document.addEventListener('DOMContentLoaded', () => {
    const statCards = document.querySelectorAll('.stats-details');

    statCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 0 20px rgba(255,75,255,0.4)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 0 15px rgba(0, 245, 255, 0.3)';
        });
    });

    if (typeof PureCounter !== 'undefined') {
        new PureCounter();
    }
});

// ====== TRENDING TECH HOVER GLOW ======
document.addEventListener('DOMContentLoaded', () => {
    const techCards = document.querySelectorAll('.trending-technologies .card-service');

    techCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 0 25px rgba(255,75,255,0.4)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 0 20px rgba(0,245,255,0.2)';
        });
    });
});

// ====== Glow hover effect for case studies, testimonials, industries ======
document.addEventListener('DOMContentLoaded', () => {
    const hoverElements = document.querySelectorAll('.case-study, .testimonial-card, .industry-card');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.boxShadow = '0 0 20px rgba(255,75,255,0.3)';
        });
        el.addEventListener('mouseleave', () => {
            el.style.boxShadow = '0 0 20px rgba(0,245,255,0.15)';
        });
    });
});

// ====== Glow hover effect for pricing/blog ======
document.addEventListener('DOMContentLoaded', () => {
    const hoverElements = document.querySelectorAll('.pricing-card, .blog-card');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.boxShadow = '0 0 20px rgba(0,245,255,0.2)';
        });
        el.addEventListener('mouseleave', () => {
            el.style.boxShadow = '0 0 20px rgba(0,245,255,0.05)';
        });
    });
});

// ====== FAQ Animation ======
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-list details').forEach(detail => {
        detail.addEventListener('toggle', function () {
            if (this.open) {
                this.style.animation = 'faqOpen 0.3s ease forwards';
            } else {
                this.style.animation = 'faqClose 0.3s ease forwards';
            }
        });
    });

    const faqStyles = document.createElement("style");
    faqStyles.innerHTML = `
        @keyframes faqOpen {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes faqClose {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-5px); }
        }
    `;
    document.head.appendChild(faqStyles);
});

// ====== FEATURE SECTION FLOATING GLOW ======
document.addEventListener('DOMContentLoaded', () => {
    const featureSectionGlow = document.querySelector('.feature-section');

    if (!featureSectionGlow) return;

    const glow = document.createElement('div');
    glow.style.position = 'absolute';
    glow.style.top = '0';
    glow.style.left = '0';
    glow.style.width = '100%';
    glow.style.height = '100%';
    glow.style.background = 'radial-gradient(circle at center, rgba(0,240,255,0.05), transparent 70%)';
    glow.style.zIndex = '0';
    glow.style.animation = 'pulseGlow 6s infinite ease-in-out';
    featureSectionGlow.appendChild(glow);

    const glowStyle = document.createElement("style");
    glowStyle.innerHTML = `
        @keyframes pulseGlow {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
        }
    `;
    document.head.appendChild(glowStyle);
});

// ====== COUNTERS ANIMATION ======
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.purecounter');
    const options = { threshold: 0.6 };

    const startCounter = (entry) => {
        const el = entry.target;
        const start = parseInt(el.getAttribute('data-purecounter-start')) || 0;
        const end = parseInt(el.getAttribute('data-purecounter-end')) || 0;
        let current = start;
        const duration = 2000;
        const stepTime = Math.max(1, Math.abs(Math.floor(duration / (end - start || 1))));

        const timer = setInterval(() => {
            current += 1;
            el.textContent = current;
            if (current >= end) clearInterval(timer);
        }, stepTime);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) startCounter(entry);
        });
    }, options);

    counters.forEach(counter => observer.observe(counter));
});
