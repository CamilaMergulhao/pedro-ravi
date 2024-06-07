export default function slideReviews() {
    const slideReviews = document.getElementById('reviews-box');
    const btnPrev = document.getElementById('btn-reviews-prev');
    const btnNext = document.getElementById('btn-reviews-next');
    let currentIndex = 0;

    function updateSlidePosition() {
        const slideWidth = slideReviews.children[0].offsetWidth + 80; // Width of slide + margin
        const containerWidth = document.getElementById('reviews-wrapper').offsetWidth;
        const maxScrollPosition = (slideReviews.children.length * slideWidth) - containerWidth;

        const newTransform = Math.min(currentIndex * slideWidth, maxScrollPosition);
        slideReviews.style.transform = `translateX(-${newTransform}px)`;
    }

    function movePrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    }

    function moveNext() {
        if (currentIndex < slideReviews.children.length - 1) {
            currentIndex++;
            updateSlidePosition();
        }
    }

    btnPrev.addEventListener('click', movePrev);
    btnNext.addEventListener('click', moveNext);

    // Ensure the first item is correctly positioned
    updateSlidePosition();
}
