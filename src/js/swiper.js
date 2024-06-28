document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1.75,
    loop: true,
    centeredSlides: true,
    spaceBetween: 8,
    grabCursor: true,
    breakpoints: {
      320: { slidesPerView: 2 },
      330: { slidesPerView: 2.1 },
      340: { slidesPerView: 2.15 },
      350: { slidesPerView: 2.2 },
      360: { slidesPerView: 2.25 },
      370: { slidesPerView: 2.3 },
      380: { slidesPerView: 2.35 },
      390: { slidesPerView: 2.45 },
      400: { slidesPerView: 2.5 },
      410: { slidesPerView: 2.6 },
      420: { slidesPerView: 2.65 },
      430: { slidesPerView: 2.7 },
      440: { slidesPerView: 2.75 },
      450: { slidesPerView: 2.8 },
      460: { slidesPerView: 2.85 },
      470: { slidesPerView: 2.9 },
      480: { slidesPerView: 2.95 },
      490: { slidesPerView: 3.02 },
      500: { slidesPerView: 3.05 },
      1440: {
        slidesPerView: 5.07,
        spaceBetween: 32,
      },
    },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });
});
