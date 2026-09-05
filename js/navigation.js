// Navegação compartilhada entre a página inicial e as páginas de projetos.
document.addEventListener('DOMContentLoaded', function () {
    const isInPages = window.location.pathname.includes('/pages/');
    const homePath = isInPages ? '../index.html' : './index.html';

    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function (e) {
            // Mantém o comportamento existente do logo.
            if (logo.getAttribute('href')) return;
            e.preventDefault();
            window.location.href = homePath;
        });
    }

    const readMoreBtn = document.querySelector('.read-more-btn');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = homePath;
        });
    }
});
