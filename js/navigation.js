// Função para ir para home
function goToHome() {
    window.location.href = '../index.html';
}

// Setup dos links de navegação
document.addEventListener('DOMContentLoaded', function() {
    // Logo clicável para voltar ao home
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        // Remove o href e usa click listener
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            if (window.location.pathname.includes('pages/')) {
                window.location.href = '../index.html';
            } else {
                window.location.href = './index.html';
            }
        });
    }

    // Botão "Read More" para ir para home
    const readMoreBtn = document.querySelector('.read-more-btn');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (window.location.pathname.includes('pages/')) {
                window.location.href = '../index.html';
            } else {
                window.location.href = './index.html';
            }
        });
    }
});