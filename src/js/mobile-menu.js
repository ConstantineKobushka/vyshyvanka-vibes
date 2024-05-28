document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.getElementById('open-menu');
  const menu = document.getElementById('menu-backdrop');
  const closeButton = document.getElementById('close-menu');
  const backdrop = document.getElementById('menu-backdrop');
  const mobilMenu = document.getElementById('mobil-menu');
  let isClickable = true;

  function stopPropagation(e) {
    e.stopPropagation();
  }

  function openMenu() {
    if (!isClickable) return;
    isClickable = false;
    setTimeout(() => {
      isClickable = true;
    }, 500);

    burgerIcon.classList.add('is-open');
    menu.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    if (!isClickable) return;
    isClickable = false;
    setTimeout(() => {
      isClickable = true;
    }, 500);

    burgerIcon.classList.remove('is-open');
    menu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }

  burgerIcon.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);
  mobilMenu.addEventListener('click', stopPropagation);

  const menuLinks = document.querySelectorAll(
    '.menu-nav-link, .header__menu-link'
  );
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      closeMenu();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && event.target !== burgerIcon) {
      closeMenu();
    }
  });
});
