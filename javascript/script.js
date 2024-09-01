const slider = document.getElementById("slider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("cursor-grabbing");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("cursor-grabbing");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("cursor-grabbing");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("touchend", () => {
  isDown = false;
});

slider.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});
function startAutoSlide() {
  const slideWidth =
    slider.children[0].offsetWidth +
    parseInt(getComputedStyle(slider.children[0]).marginRight);
  autoSlideInterval = setInterval(() => {
    slider.scrollLeft += slideWidth;

    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
      slider.scrollLeft = 0;
    }
  }, 3000); // Slides every 3 seconds
}

startAutoSlide();
