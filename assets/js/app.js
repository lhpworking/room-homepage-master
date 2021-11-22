const slides = document.querySelectorAll(".main__slider-slide");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const headerItem = document.querySelectorAll(".header__container-menu-item");
const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const meneMobileBlock = document.querySelector(
  ".menu-mobile .header__container-menu"
);

let currentSlide = 0;

function prevSlide() {
  document
    .querySelector(".main__slider-slide.active")
    .classList.remove("active");
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slides[currentSlide].classList.add("active");
}
function nextSlide() {
  document
    .querySelector(".main__slider-slide.active")
    .classList.remove("active");
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  slides[currentSlide].classList.add("active");
}

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

for (let index = 0; index < headerItem.length; index++) {
  headerItem[index].addEventListener("click", () => {
    document
      .querySelector(".header__container-menu-item.active")
      .classList.remove("active");
    headerItem[index].classList.add("active");
  });
}

btnOpen.addEventListener("click", () => {
  meneMobileBlock.classList.add("active");
});
btnClose.addEventListener("click", () => {
  meneMobileBlock.classList.remove("active");
});
