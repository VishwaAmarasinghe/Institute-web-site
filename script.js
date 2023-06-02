var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
      slidesPerGroupSkip: 2,
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  spaceBetween: 30,
 
  loop:true,
});
