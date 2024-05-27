document.addEventListener('DOMContentLoaded', function () {

    const burgerIcon = document.getElementById('open-menu');
    const menu = document.getElementById('menu-backdrop');
    const closeButton = document.getElementById('close-menu');
    const backdrop = document.getElementById('menu-backdrop');
    let isClickable = true; 

    function openMenu() {
        if (!isClickable) return; 
        isClickable = false; 
        setTimeout(() => {
            isClickable = true; 
        }, 500); // 

        burgerIcon.classList.add('is-open');
        menu.classList.add('is-open');
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
    }

    function closeMenuOnClick(event) {
        closeMenu();
    }

    burgerIcon.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);

    const menuLinks = document.querySelectorAll('.menu-nav-link');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', closeMenuOnClick);
        link.addEventListener('touchstart', closeMenuOnClick);
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && event.target !== burgerIcon) {
            closeMenu();
        }
    });

});
