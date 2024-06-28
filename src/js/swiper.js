document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1.75,
    loop: true,
    centeredSlides: true,
    spaceBetween: 8,
    grabCursor: true,
    breakpoints: {
      320: { slidesPerView: 1.9 },
      330: { slidesPerView: 1.95 },
      340: { slidesPerView: 2 },
      350: { slidesPerView: 2.05 },
      360: { slidesPerView: 2.1 },
      370: { slidesPerView: 2.2 },
      380: { slidesPerView: 2.25 },
      390: { slidesPerView: 2.3 },
      400: { slidesPerView: 2.4 },
      410: { slidesPerView: 2.45 },
      420: { slidesPerView: 2.5 },
      430: { slidesPerView: 2.55 },
      440: { slidesPerView: 2.6 },
      450: { slidesPerView: 2.68 },
      460: { slidesPerView: 2.75 },
      470: { slidesPerView: 2.8 },
      480: { slidesPerView: 2.85 },
      490: { slidesPerView: 2.95 },
      500: { slidesPerView: 3 },
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
