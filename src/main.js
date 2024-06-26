(() => {
  const mobileMenu = document.querySelector('[data-modal]');
  const openMenuBtn = document.querySelector('.open_menu');
  const closeMenuBtn = document.querySelector('.close_menu');
  const navLinks = document.querySelectorAll('.nav_link');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (isMenuOpen) {
      document.body.classList.remove('no-scroll');
    } else {
      document.body.classList.add('no-scroll');
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (!mobileMenu.classList.contains('is-open')) {
        mobileMenu.classList.add('is-open');
        document.body.classList.remove('no-scroll');
        openMenuBtn.setAttribute('aria-expanded', false);
      }
    });
  });
})();
