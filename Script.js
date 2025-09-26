const slideContainer = document.querySelector('.gallery-slide');
const images = document.querySelectorAll('.gallery-slide img');
let index = 0;

function showNextImage() {
  index++;
  if(index >= images.length) index = 0;
  const width = images[0].clientWidth;
  slideContainer.style.transform = `translateX(${-width * index}px)`;
}

// Auto slide every 3 seconds
setInterval(showNextImage, 3000);

// Optional: window resize adjustment
window.addEventListener('resize', () => {
  const width = images[0].clientWidth;
  slideContainer.style.transform = `translateX(${-width * index}px)`;
}); 