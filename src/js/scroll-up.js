const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up-svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();
console.log(pathLength);

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

const getTop = () => window.scrollY || document.documentElement.scrollTop;

// updateDashoffset
const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  console.log(height);
  const dashoffset = pathLength - (getTop() * pathLength) / height;
  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// onScroll
window.addEventListener('scroll', () => {
  updateDashoffset();
  if (getTop() > offset) {
    scrollUp.classList.add('scroll-up-active');
  } else {
    scrollUp.classList.remove('scroll-up-active');
  }
});

// click
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
