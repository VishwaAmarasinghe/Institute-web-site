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
//purecounter
new PureCounter();

new PureCounter({

  selector: '.purecounter',


  start: 0,
  duration: 4,
  delay: 10,
  once: true,
  repeat: false,
  decimals: 0,
  legacy: true,
  filesizing: false,
  currency: false,
  separator: false,
});

var swiper = new Swiper(".studentSwiper", {
  spaceBetween: 30,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true,
});

var swiper = new Swiper(".courseSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  loop:true,
});

$(function(){
  $("#nav-placeholder").load("assets/placeholders/nav.html");
});
$(function(){
  $("#footer-placeholder").load("assets/placeholders/footer.html");
});