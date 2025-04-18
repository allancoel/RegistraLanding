document.addEventListener('DOMContentLoaded', function() {
    // Initialize language switcher
    initLanguageSwitcher();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Fix for mobile layout issues
    function fixMobileLayout() {
        if (window.innerWidth <= 768) {
            // Ensure nav links are hidden by default on mobile
            if (!navLinks.classList.contains('active')) {
                navLinks.style.display = 'none';
            }
            
            // Fix position issues
            document.querySelectorAll('section').forEach(section => {
                section.style.position = 'relative';
                section.style.zIndex = '1';
            });
        } else {
            // On desktop, ensure nav links are visible
            navLinks.style.display = 'flex';
        }
    }

    // Initialize mobile layout fixes
    fixMobileLayout();
    
    // Run mobile layout fix on window resize
    window.addEventListener('resize', fixMobileLayout);
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature, .step, .testimonial, .problem-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    
    // Add animation class for CSS transitions
    const style = document.createElement('style');
    style.textContent = `
        .feature, .step, .testimonial, .problem-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .animated {
            opacity: 1;
            transform: translateY(0);
        }
        
        body.menu-open {
            overflow: hidden;
        }
        
        /* Fix for mobile navigation appearance */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background-color: var(--primary-color);
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 998;
                padding: 50px 0;
            }
            
            .nav-links.active {
                display: flex !important;
            }
            
            .menu-toggle {
                z-index: 999;
            }
            
            /* Fix for language switcher */
            .language-switcher {
                position: relative;
                margin: 20px 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Run on load and scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on initial load
    
    // Add current year to copyright
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Language switcher functionality
function initLanguageSwitcher() {
    const languageSwitcher = document.querySelector('.language-switcher');
    const toggleButton = document.querySelector('.language-toggle');
    
    if (toggleButton && languageSwitcher) {
        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            languageSwitcher.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!languageSwitcher.contains(e.target)) {
                languageSwitcher.classList.remove('active');
            }
        });
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (menuToggle && navLinks) {
        // Make sure links are hidden by default on mobile
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
        
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            // Toggle menu icon
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    body.classList.remove('menu-open');
                    
                    // Reset icon
                    const icon = menuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
        
        // Update on resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
                
                // Reset icon
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's the language toggle or doesn't point to an element
            if (href === '#' || this.closest('.language-switcher')) {
                return;
            }
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
} 