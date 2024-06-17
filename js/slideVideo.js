export default function slideVideo() {
    const slideVideos = document.getElementById('video-classes-list'); // Alterei para getElementById pois o id é único
    const btnPrevVideo = document.getElementById('btn-videos-prev'); // Alterei para getElementById
    const btnNextVideo = document.getElementById('btn-videos-next'); // Alterei para getElementById
    let indiceAtualVideo = 0;
    let touchStartXVideo = 0;
    let touchMoveXVideo = 0;

    // Definindo uma sensibilidade menor para o toque (você pode ajustar conforme necessário)
    const sensibilidadeToqueVideo = 100;

    function atualizarPosicaoSlideVideo() {
        const larguraSlideVideo = slideVideos.children[0].offsetWidth + 30; // Largura do slide + margem
        const larguraContainerVideo = document.querySelector('.video-classes-wrapper').offsetWidth; // Alterei para querySelector
        const posicaoMaximaScrollVideo = (slideVideos.children.length * larguraSlideVideo) - larguraContainerVideo;

        const novoTransformVideo = Math.min(indiceAtualVideo * larguraSlideVideo, posicaoMaximaScrollVideo);
        slideVideos.style.transform = `translateX(-${novoTransformVideo}px)`;
    }

    function moverAnteriorVideo() {
        if (indiceAtualVideo > 0) {
            indiceAtualVideo--;
            atualizarPosicaoSlideVideo();
        }
    }

    function moverProximoVideo() {
        if (indiceAtualVideo < slideVideos.children.length - 1) {
            indiceAtualVideo++;
            atualizarPosicaoSlideVideo();
        }
    }

    btnPrevVideo.addEventListener('click', moverAnteriorVideo);
    btnNextVideo.addEventListener('click', moverProximoVideo);

    // Inicializa a posição do slide
    atualizarPosicaoSlideVideo();

    // Suporte a toque (swipe)
    slideVideos.addEventListener('touchstart', function(e) {
        touchStartXVideo = e.touches[0].clientX;
    });

    slideVideos.addEventListener('touchmove', function(e) {
        touchMoveXVideo = e.touches[0].clientX;
        const diffXVideo = touchStartXVideo - touchMoveXVideo;
        if (Math.abs(diffXVideo) > sensibilidadeToqueVideo) { // Utilizando a sensibilidade definida
            if (diffXVideo > 0) {
                moverProximoVideo();
            } else {
                moverAnteriorVideo();
            }
            touchStartXVideo = touchMoveXVideo;
        }
    });
}
