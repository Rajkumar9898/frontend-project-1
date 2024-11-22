
// Navigation toggle script
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('nav-open');
});

//slider toggle
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
        slide.style.opacity = i === currentSlide ? '1' : '0';
    });
}

// This is the function for Next Slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// This is the function for previous Slide
function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(nextSlide, 4000);
});

