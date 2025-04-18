// Solução simplificada para o seletor de idiomas
document.addEventListener('DOMContentLoaded', function() {
    // Remover todos os event listeners anteriores que possam estar interferindo
    const clearEventListeners = function(element) {
        const newElement = element.cloneNode(true);
        element.parentNode.replaceChild(newElement, element);
        return newElement;
    };
    
    // 1. Simplificar o toggler do menu de idiomas
    document.querySelectorAll('.language-toggle').forEach(function(toggle) {
        const newToggle = clearEventListeners(toggle);
        newToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Encontrar o dropdown mais próximo
            const parent = this.closest('.language-switcher');
            const dropdown = parent.querySelector('.dropdown-menu');
            
            // Mostrar ou esconder o dropdown
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                // Fechar todos os outros dropdowns primeiro
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.display = 'none';
                });
                dropdown.style.display = 'block';
            }
        });
    });
    
    // 2. Fazer com que os links de idioma funcionem diretamente
    document.querySelectorAll('.dropdown-menu a').forEach(function(link) {
        const newLink = clearEventListeners(link);
        newLink.addEventListener('click', function(e) {
            // Navegar diretamente para o URL
            window.location.href = this.getAttribute('href');
        });
    });
    
    // 3. Fechar o dropdown quando clicar fora dele
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.language-switcher')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
    
    // 4. Adicionar marcação visível para os links
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.style.cursor = 'pointer';
    });
    
    console.log('Script de correção de idioma carregado!');
}); 