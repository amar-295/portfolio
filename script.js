document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Console "Hack" Effect
    console.log("%c SYSTEM_BOOT_SEQUENCE_INITIATED...", "color: #47f425; font-family: monospace; font-size: 14px;");
    console.log("%c LOADING_ASSETS: [██████████] 100%", "color: #7f0df2; font-family: monospace; font-size: 12px;");
    console.log("%c WELCOME TO AMARNATH SHARMA PORTFOLIO V2.0", "color: white; background: black; padding: 5px; font-family: monospace;");

    // 2. Add Glitch Hover Sound Effect (Optional - Logic only)
    const glitchElements = document.querySelectorAll('.glitch-text, .nav-link, button');
    
    glitchElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            // Randomly skew elements slightly on hover for extra juice
            if(Math.random() > 0.7) {
                el.style.transform = `skewX(${Math.random() * 2 - 1}deg)`;
                setTimeout(() => {
                    el.style.transform = 'skewX(0deg)';
                }, 100);
            }
        });
    });

    // 3. Smooth Scroll offset fix (for fixed header)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

// add at end of DOMContentLoaded
document.querySelectorAll('.floating-card-shadow').forEach(card => {
  card.style.transition = 'transform .18s ease, box-shadow .18s ease';
  card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-6px) translateX(-2px)');
  card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) translateX(0)');
});
