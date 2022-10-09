export function menu(header) {
    const nav = header.querySelector('.header__nav');
    const btnNav = header.querySelector('.btn__nav');
    const btnIcon = header.querySelector('.btn__icon');
    const logo = header.querySelector('.header__logo img');
    const body = document.querySelector('body');


    btnNav.addEventListener('click', () => {
        // scroll
        const documentWidth = parseInt(document.documentElement.clientWidth);
        const windowWidth = parseInt(window.innerWidth);
        const scrollbarWidth = windowWidth - documentWidth;

        nav.classList.toggle('header__nav--active');
        btnIcon.classList.toggle('btn__icon--active');
        body.classList.toggle('modal-open');
        if (nav.classList.contains('header__nav--active')) {
            body.style.marginRight = `${scrollbarWidth}px`;
            logo.src = 'img/icons/logo-white.svg';
            window.addEventListener('keydown', escapeHandler);
        } else {
            logo.src = 'img/icons/logo.svg';
            body.style.removeProperty('margin-right');
        }
    });

    function escapeHandler(e) {
        // закрытие окна по кнопке escape
        if (e.key === 'Escape') {
            nav.classList.remove('header__nav--active');
            btnIcon.classList.remove('btn__icon--active');
            body.classList.remove('modal-open');
            body.style.removeProperty('margin-right');
            logo.src = 'img/icons/logo.svg';
        }
    }
}