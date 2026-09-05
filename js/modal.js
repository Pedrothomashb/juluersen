// Configuração de URLs das fotos por página
const photoUrls = {
    home: [
        'hydroGen.jpeg',
        'trofeuFtc.jpeg',
        'equipeFtc.jpeg'
    ],
    projeto: [
        'hydropower/hydro1.jpeg',
        'hydropower/hydro2.jpeg',
        'hydropower/hydro3.jpeg',
        'hydropower/hydroout.jpeg'
    ],
    projeto1: [
        'snake/snake1.jpeg',
        'snake/snake2.jpeg',
        'snake/snake3.jpeg'
    ],
    projeto2: [
        'feijao/feijao1.jpeg',
        'feijao/feijao2.jpeg',
        'feijao/feijao3.jpeg'
    ]
};

// Função para abrir modal com imagem
function openModal(index, page = 'home') {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    
    if (photoUrls[page] && photoUrls[page][index]) {
        // Detecta se está em pages/ (projeto.html) ou root (index.html)
        const isInPages = window.location.pathname.includes('pages/');
        const basePath = isInPages ? '../assets/' : './assets/';
        
        modalImage.src = basePath + photoUrls[page][index];
        modal.style.display = 'block';
    }
}

// Função para fechar modal
function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}

// Fechar modal ao clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById('photoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Fechar modal ao pressionar ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});