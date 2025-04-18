// Script para gerenciar a troca de idiomas
document.addEventListener('DOMContentLoaded', function() {
    // Função para detectar o idioma do navegador
    function getBrowserLanguage() {
        const lang = navigator.language || navigator.userLanguage;
        return lang.substring(0, 2).toLowerCase();
    }
    
    // Função para definir o idioma baseado na URL ou navegador
    function setInitialLanguage() {
        // Verificar se há parâmetro de idioma na URL
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        
        // Verificar se já existe uma preferência salva
        const savedLang = localStorage.getItem('preferredLanguage');
        
        // Prioridade: 1. Parâmetro URL, 2. Preferência salva, 3. Inglês (padrão)
        // Não usar mais o idioma do navegador como prioridade
        let currentLang = langParam || savedLang || 'en';
        
        // Verificar se o idioma é suportado, senão usar inglês
        if (!['en', 'fr', 'pt', 'es', 'it', 'zh'].includes(currentLang)) {
            currentLang = 'en';
        }
        
        // Salvar a preferência
        localStorage.setItem('preferredLanguage', currentLang);
        
        // Redirecionar para a página correta se necessário
        redirectToLanguage(currentLang);
    }
    
    // Função para redirecionar para a página do idioma selecionado
    function redirectToLanguage(lang) {
        // Obter o caminho atual
        const currentPath = window.location.pathname;
        const fileName = currentPath.split('/').pop();
        
        // Verificar se já está na página correta
        if (fileName === `${lang}.html` || (fileName === 'index.html' && lang === 'pt')) {
            return;
        }
        
        // Definir o caminho para a página do idioma selecionado
        let targetFile = lang === 'pt' ? 'index.html' : `${lang}.html`;
        
        // Verificar se estamos na página inicial
        if (fileName === '' || fileName === 'index.html' || currentPath.endsWith('/')) {
            if (lang !== 'pt') {
                window.location.href = targetFile;
            }
        } else {
            // Construir o novo caminho mantendo a estrutura de diretórios
            const newPath = currentPath.replace(/[^/]*$/, targetFile);
            window.location.href = newPath;
        }
    }
    
    // Mobile dropdown functionality
    const langToggle = document.querySelector('.lang-toggle');
    const mobileLangSelector = document.querySelector('.mobile-lang-selector');
    
    if (langToggle) {
        langToggle.addEventListener('click', function() {
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
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang) {
                // Save to localStorage
                localStorage.setItem('preferredLanguage', lang);
                
                // Redirect to appropriate page
                if (lang === 'pt') {
                    window.location.href = '/index.html';
                } else {
                    window.location.href = `/${lang}.html`;
                }
            }
        });
    });
    
    // Initialize language indicator
    function initializeLanguage() {
        const currentPage = window.location.pathname;
        let currentLang = 'en'; // Default to English
        
        if (currentPage.includes('fr.html')) {
            currentLang = 'fr';
        } else if (currentPage.includes('es.html')) {
            currentLang = 'es';
        } else if (currentPage.includes('it.html')) {
            currentLang = 'it';
        } else if (currentPage.includes('zh.html')) {
            currentLang = 'zh';
        } else if (currentPage.includes('index.html') || currentPage.endsWith('/')) {
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
    
    // Check if we need to redirect based on saved preference
    const currentPage = window.location.pathname;
    const savedLanguage = localStorage.getItem('preferredLanguage');
    
    // If we're on the homepage and the saved preference is not Portuguese,
    // or we're on a language page different from the saved preference, redirect
    if (savedLanguage && savedLanguage !== 'pt' && 
        (currentPage.endsWith('/') || currentPage.includes('index.html'))) {
        window.location.href = `/${savedLanguage}.html`;
    }
    
    initializeLanguage();
    
    console.log('Script de seleção de idioma carregado!');
}); 