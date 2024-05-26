
document.addEventListener('DOMContentLoaded', function () {

    const burgerIcon = document.getElementById('open-menu');
    const menu = document.getElementById('menu-backdrop');
    const closeButton = document.getElementById('close-menu');
    const body = document.body;
    let initialScrollPosition = 0; 
    let isClickable = true; 

    function openMenu() {
        if (!isClickable) return; 
        isClickable = false; 
        setTimeout(() => {
            isClickable = true; 
        }, 500); // 

        burgerIcon.classList.add('is-open');
        menu.classList.add('is-open');

        initialScrollPosition = window.pageYOffset;

        body.style.position = 'fixed';
        body.style.top = `-${initialScrollPosition}px`;
        body.style.left = 0; 
        body.style.right = 0; 
    }

    function closeMenu() {
        if (!isClickable) return; 
        isClickable = false; 
        setTimeout(() => {
            isClickable = true; 
        }, 500); 

        document.documentElement.style.scrollBehavior = 'auto';

        burgerIcon.classList.remove('is-open');
        menu.classList.remove('is-open');

        body.style.position = '';
        body.style.top = '';
        body.style.left = ''; 
        body.style.right = ''; 
        window.scrollTo(0, initialScrollPosition); 


        setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
        }, 500); // 
    }

    function closeMenuOnClick(event) {
        if (!event.target.classList.contains('menu-nav-link')) {
            closeMenu();
        }
        else {
            closeMenu();
        }
    }

    burgerIcon.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);


    

    const menuLinks = document.querySelectorAll('.menu-nav-link');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', closeMenuOnClick);
        link.addEventListener('touchstart', closeMenuOnClick);
    });

    // Добавлен обработчик клика за пределами menu-backdrop для закрытия меню
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && event.target !== burgerIcon) {
            closeMenu();
        }
    });

});


(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const anchors = mobileMenu.querySelectorAll('a[href*="#"]');
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
    
    if(anchors.length === 0) return;
    
    if(!isMenuOpen) {
      anchors.forEach(anchor => {
        anchor.addEventListener("click", toggleMenu)
      })
      return;
    }
    
    anchors.forEach(anchor => {
        anchor.removeEventListener("click", toggleMenu)
      })
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Вказати брейкпоінт після якого повинна зачинятися
  window.matchMedia('(min-width: 375px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

