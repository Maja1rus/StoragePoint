export function blockFixed(className, scrollSize) {
    window.addEventListener('scroll', showBlock);
    function showBlock() {
        if (window.pageYOffset > scrollSize) {
            className.classList.add('fixed');
        } else {
            className.classList.remove('fixed');
        }
    }
}
