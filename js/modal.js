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
        'hydropower/hydropessoal.jpeg'
    ],
    projeto1: [
        'snake/snake1.jpeg',
        'snake/snake2.jpeg',
        'snake/snake3.jpeg',
        'snake/snake4.jpeg'
    ],
    projeto2: [
        'feijao/feijao1.jpeg',
        'feijao/feijao2.jpeg',
        'feijao/feijao3.jpeg'
    ],
    sports1: [
        'sports/tennis1.jpeg',
        'sports/tennis2.jpeg',
        'sports/tennis3.jpeg',
        'sports/tennis4.jpeg',
        'sports/tennis5.jpeg'
    ],
    sports2: [
        'dance/ballet1.jpeg',
        'dance/ballet2.jpeg',
        'dance/ballet3.jpeg',
        'dance/jazz1.jpeg',
        'dance/jazz2.jpeg'
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