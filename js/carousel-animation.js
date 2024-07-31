let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    slides.forEach((slide, index) => {
        slide.style.display = (index + 1 === slideIndex) ? 'block' : 'none';
    });

    dots.forEach((dot, index) => {
        dot.className = dot.className.replace(' active', '');
        if (index + 1 === slideIndex) {
            dot.className += ' active';
        }
    });
}