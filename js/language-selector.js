// Script to manage language switching
document.addEventListener('DOMContentLoaded', function() {
    // Mobile dropdown functionality
    const langToggle = document.querySelector('.lang-toggle');
    const mobileLangSelector = document.querySelector('.mobile-lang-selector');
    
    if (langToggle) {
        langToggle.addEventListener('click', function(event) {
            event.preventDefault();
            mobileLangSelector.classList.toggle('active');
            langToggle.classList.toggle('active');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileLangSelector && !mobileLangSelector.contains(event.target) && 
            !event.target.classList.contains('lang-toggle')) {
            mobileLangSelector.classList.remove('active');
            if (langToggle) langToggle.classList.remove('active');
        }
    });

    // Language switching functionality
    const languageButtons = document.querySelectorAll('.lang-button, .mobile-lang-button');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const lang = this.getAttribute('data-lang');
            if (lang) {
                // Redirect to appropriate page
                switch(lang) {
                    case 'en':
                        window.location.href = '/en.html';
                        break;
                    case 'pt':
                        window.location.href = '/index.html';
                        break;
                    case 'fr':
                        window.location.href = '/fr.html';
                        break;
                    case 'es':
                        window.location.href = '/es.html';
                        break;
                    case 'it':
                        window.location.href = '/it.html';
                        break;
                    case 'zh':
                        window.location.href = '/zh.html';
                        break;
                }
            }
        });
    });
    
    // Initialize language indicator
    function initializeLanguage() {
        const currentPath = window.location.pathname;
        let currentLang = 'en'; // Default to English
        
        if (currentPath.includes('fr.html')) {
            currentLang = 'fr';
        } else if (currentPath.includes('es.html')) {
            currentLang = 'es';
        } else if (currentPath.includes('it.html')) {
            currentLang = 'it';
        } else if (currentPath.includes('zh.html')) {
            currentLang = 'zh';
        } else if (currentPath.includes('index.html') || currentPath.endsWith('/')) {
            currentLang = 'pt';
        }
        
        // Highlight the current language button
        document.querySelectorAll(`[data-lang="${currentLang}"]`).forEach(button => {
            button.classList.add('active');
        });
        
        // Update the current language display in mobile
        const currentLangSpan = document.querySelector('.current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = currentLang.toUpperCase();
        }
    }
    
    initializeLanguage();
}); 