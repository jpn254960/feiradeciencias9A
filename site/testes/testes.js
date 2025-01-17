let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.carousel-images');
  const totalSlides = slides.children.length;
  
  if (index >= totalSlides) currentIndex = 0;
  if (index < 0) currentIndex = totalSlides - 1;
  
  slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}
