document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 8,
    grabCursor: true,
    breakpoints: {
      340: {
        slidesPerView: 2.05,
        centeredSlides: true,
      },
      360: {
        slidesPerView: 2.2,
        centeredSlides: true,
      },
      380: {
        slidesPerView: 2.3,
        centeredSlides: true,
      },
      400: {
        slidesPerView: 2.4,
        centeredSlides: true,
      },
      420: {
        slidesPerView: 2.5,
        centeredSlides: true,
      },
      440: {
        slidesPerView: 2.6,
        centeredSlides: true,
      },
      460: {
        slidesPerView: 2.7,
        centeredSlides: true,
      },
      480: {
        slidesPerView: 2.8,
        centeredSlides: true,
      },
      490: {
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
