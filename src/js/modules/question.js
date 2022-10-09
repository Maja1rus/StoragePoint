export function questionFn(className) {
    const questionHeaders = className.querySelectorAll('.question__header');
    questionHeaders.forEach(selectHeader => {
        selectHeader.addEventListener('click', (e) => {
            const questionItem = e.target.closest('.question__item');
            questionItem.classList.toggle('active');
        })
    });

}