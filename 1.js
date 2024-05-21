const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slideIndex = 0;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    slideIndex = Math.min(slideIndex + 1, slides.children.length - 1);
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = Math.max(slideIndex - 1, 0);
    showSlide(slideIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
