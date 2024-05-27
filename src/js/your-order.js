const swiper = new Swiper('.order-swiper', {
  loop: true,
  mousewheel: true,
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
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
