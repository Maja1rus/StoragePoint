export function filterOpen(filter) {
    const filterBtn = filter.querySelector('.filter__btn');
    const filterList = filter.querySelector('.filter__wrap');

    const filterButtons = filter.querySelectorAll('.filter__checkbox');
    filterButtons.forEach(button => {
        button.addEventListener('click', _e => {
            filterList.submit();
        })
    });

    filterBtn.addEventListener('click', filterOpenHeandler);
    function filterOpenHeandler() {
        filterList.classList.toggle('active');
        filterBtn.innerText === 'Фильтр'
            ? filterBtn.innerHTML = `Свернуть`
            : filterBtn.innerHTML = `<img src="../img/icons/icon-filter.svg" alt="Фильтр">
            Фильтр`;
    }
}