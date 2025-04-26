let currentSlide = 1;

function toggleSlides() {
  const slide1 = document.getElementById("slide1");
  const slide2 = document.getElementById("slide2");

  if (currentSlide === 1) {
    slide1.style.display = "none";
    slide2.style.display = "block";
    currentSlide = 2;
  } else {
    slide1.style.display = "block";
    slide2.style.display = "none";
    currentSlide = 1;
  }
}

setInterval(toggleSlides, 3000);