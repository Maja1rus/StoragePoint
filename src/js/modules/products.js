import { calculatorPrice } from "./calculator-price.js";
// формируем шаблон для создания строки
const createTemplate = (eltName, id, num, price) => {
    const numb = num !== '' ? `${num}` : '';
    return ` <span class="products__item" data-id="${id}" data-price="${price}">${eltName} <span class="products__num">${numb}</span></span>`;
};



export function calculatorSelect(productElt, elt) {

    if (!productElt || !elt) return;
    const productsOption = productElt.querySelector('.products__option'); // получаем контейнер 

    const productItems = productsOption.querySelectorAll('.products__item'); // проверяем есть ли уже элементы в блоке

    const eltName = elt.querySelector('.checkbox__title') ?
        elt.querySelector('.checkbox__title').innerText :
        elt.querySelector('.calculator__title').innerText; // получаем название блока. У нас оно может быть в одном из двух вариантов
    const eltId = elt.dataset.id; // получаем айди 
    const eltPrice = elt.dataset.price; // получаем сумму
    const numElt = elt.querySelector('[type="number"]'); // это блок с кол-вом или без
    let quantity = '';
    if (numElt) quantity = parseInt(numElt.value); // получаем кол-во в инпуте
    if (productItems.length > 0) {

        const checkedProduct = [...productItems].find(item => item.dataset.id === eltId);
        if (!numElt || quantity === 0) { //
            if (checkedProduct) {
                checkedProduct.remove();
                calculatorPrice()
                return;
            } else if (quantity !== 0) {
                const newElt = createTemplate(eltName, eltId, quantity, eltPrice);
                productsOption.insertAdjacentHTML('beforeend', newElt);
                calculatorPrice()
            }
        }

        if (checkedProduct && numElt && quantity > 0) {
            checkedProduct.querySelector('.products__num').innerText = quantity;
            calculatorPrice()
            return;
        }

        if (!checkedProduct && numElt && quantity > 0) {
            const newElt = createTemplate(eltName, eltId, quantity, eltPrice);
            productsOption.insertAdjacentHTML('beforeend', newElt);
            calculatorPrice()
        }

    } else {
        if (quantity === 0) return;
        const newElt = createTemplate(eltName, eltId, quantity, eltPrice);
        productsOption.insertAdjacentHTML('beforeend', newElt);
        calculatorPrice()
    }
}