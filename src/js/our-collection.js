new Swiper('.swiper-collection', {
  spaceBetween: 20,
  slidesPerView: 3,
  slidesPerGroup: 1,
  watchOverflow: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  loop: true,
  speed: 1000,
  mousewheel: false,
});
