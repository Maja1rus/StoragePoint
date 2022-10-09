export function productsOpen(className) {
    const productsHeader = className.querySelector('.products__header');
    const productsClose = className.querySelector('.products__close');
    const productsBody = className.querySelector('.products__body');

    productsHeader.addEventListener('click', productsOpenHandler);

    function productsOpenHandler() {
        productsBody.classList.toggle('active');
        productsClose.classList.toggle('active');
    }
}