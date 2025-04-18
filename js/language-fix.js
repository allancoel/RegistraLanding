// Fix for language selector in mobile
document.addEventListener('DOMContentLoaded', function() {
    // Find all language links in dropdown menus
    const languageLinks = document.querySelectorAll('.language-switcher .dropdown-menu a');
    
    // Add direct click handlers to all language links
    languageLinks.forEach(function(link) {
        // Override with direct link behavior
        link.onclick = function(e) {
            // Get the href attribute
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                // Navigate directly to the page
                window.location.href = href;
            }
            return true; // Allow natural link behavior
        };
    });
    
    // Make the toggle button work
    const toggleButtons = document.querySelectorAll('.language-toggle');
    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Find the parent language switcher
            const parent = this.closest('.language-switcher');
            if (parent) {
                parent.classList.toggle('active');
            }
        });
    });
    
    // Close all language dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.language-switcher')) {
            document.querySelectorAll('.language-switcher.active').forEach(function(el) {
                el.classList.remove('active');
            });
        }
    });
}); 