// Ajustar o alinhamento das imagens de passos
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar classes para facilitar a estilização
    document.querySelectorAll('.step').forEach(function(step, index) {
        step.classList.add('step-' + (index + 1));
        
        // Encontrar a imagem dentro de cada step
        const img = step.querySelector('img');
        if (img) {
            img.classList.add('step-image');
            
            // Garantir que a imagem está carregada antes de ajustar o tamanho
            if (img.complete) {
                setImageStyle(img);
            } else {
                img.onload = function() {
                    setImageStyle(img);
                };
            }
        }
    });
    
    // Função para aplicar estilos consistentes às imagens
    function setImageStyle(img) {
        // Ajustar o estilo da imagem
        img.style.display = 'block';
        img.style.margin = '20px auto';
        img.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        img.style.objectFit = 'cover';
        img.style.height = '200px';
        img.style.width = '100%';
        img.style.borderRadius = '10px';
    }
    
    // Verificar o layout em qualquer redimensionamento
    window.addEventListener('resize', function() {
        document.querySelectorAll('.step-image').forEach(function(img) {
            setImageStyle(img);
        });
    });
    
    console.log('Script de correção de steps carregado!');
}); 