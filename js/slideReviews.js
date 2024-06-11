export default function slideReviews() {
    const slideReviews = document.getElementById('reviews-box');
    const btnPrev = document.getElementById('btn-reviews-prev');
    const btnNext = document.getElementById('btn-reviews-next');
    let indiceAtual = 0;
    let touchStartX = 0;
    let touchMoveX = 0;

    // Definindo uma sensibilidade menor para o toque
    const sensibilidadeToque = 100;

    function atualizarPosicaoSlide() {
        const larguraSlide = slideReviews.children[0].offsetWidth + 80; // Largura do slide + margem
        const larguraContainer = document.getElementById('reviews-wrapper').offsetWidth;
        const posicaoMaximaScroll = (slideReviews.children.length * larguraSlide) - larguraContainer;

        const novoTransform = Math.min(indiceAtual * larguraSlide, posicaoMaximaScroll);
        slideReviews.style.transform = `translateX(-${novoTransform}px)`;
    }

    function moverAnterior() {
        if (indiceAtual > 0) {
            indiceAtual--;
            atualizarPosicaoSlide();
        }
    }

    function moverProximo() {
        if (indiceAtual < slideReviews.children.length - 1) {
            indiceAtual++;
            atualizarPosicaoSlide();
        }
    }

    btnPrev.addEventListener('click', moverAnterior);
    btnNext.addEventListener('click', moverProximo);

    // Inicializa a posição do slide
    atualizarPosicaoSlide();

    // Suporte a toque (swipe)
    slideReviews.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
    });

    slideReviews.addEventListener('touchmove', function(e) {
        touchMoveX = e.touches[0].clientX;
        const diffX = touchStartX - touchMoveX;
        if (Math.abs(diffX) > sensibilidadeToque) { // Utilizando a sensibilidade definida
            if (diffX > 0) {
                moverProximo();
            } else {
                moverAnterior();
            }
            touchStartX = touchMoveX;
        }
    });
}


