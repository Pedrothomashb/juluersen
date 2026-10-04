// Modal para ampliar fotos: abre a própria imagem clicada (galerias e cards da home).
(function () {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    if (!modal || !modalImage) return;

    function openModal(img) {
        modalImage.src = img.currentSrc || img.src;
        modalImage.alt = img.alt || 'Enlarged photo';
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
        modalImage.src = '';
    }

    document.addEventListener('click', function (event) {
        const card = event.target.closest('.photo-card, .gallery-item');
        if (card) {
            const img = card.querySelector('img');
            if (img) openModal(img);
            return;
        }
        if (event.target === modal || event.target.classList.contains('close')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closeModal();
    });
})();
