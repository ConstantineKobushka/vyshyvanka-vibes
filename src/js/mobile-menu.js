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

