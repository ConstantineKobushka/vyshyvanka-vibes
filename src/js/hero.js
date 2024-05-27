const swiper = new Swiper('.hero-swiper', {
  loop: true,
  mousewheel: false,
  grabCursor: true,
  effect: 'cube',
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
});
