document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 8,
    grabCursor: true,
    breakpoints: {
      380: {
        slidesPerView: 2.99,
        centeredSlides: true,
      },
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
});
