new Swiper('.swiper', {
  slidesPerView: 'auto',
  loop: true,
  centeredSlides: true,
  spaceBetween: 8,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 5,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});
