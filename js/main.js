document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            // Toggle between menu and close icon
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
    }
    
    // Close menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
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
    
    // Language dropdown functionality
    const languageSwitcher = document.querySelector('.language-switcher');
    const currentLang = document.querySelector('.current-lang');
    
    if (currentLang) {
        currentLang.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            languageSwitcher.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            // Only close if the click is outside the language switcher
            if (!languageSwitcher.contains(e.target) && languageSwitcher.classList.contains('active')) {
                languageSwitcher.classList.remove('active');
            }
        });
        
        // Prevent dropdown from closing when clicking inside it
        const dropdown = document.querySelector('.dropdown-menu');
        if (dropdown) {
            dropdown.addEventListener('click', function(e) {
                // Only prevent propagation for language selection, not for the links
                if (!e.target.closest('a')) {
                    e.stopPropagation();
                }
            });
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Fix for fixed positioning on mobile
    function updateMobileLayout() {
        if (window.innerWidth <= 768) {
            // Fix positioning for mobile
            document.querySelectorAll('section').forEach(section => {
                section.style.position = 'relative';
                section.style.zIndex = '1';
            });
        }
    }
    
    // Run on load and resize
    window.addEventListener('resize', updateMobileLayout);
    updateMobileLayout();
    
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