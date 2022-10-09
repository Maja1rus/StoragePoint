import { stringToNumber } from "./stringToNumber.js";
import { periodPrice } from "./period-price.js";

export function calculatorPrice() {
    const productBody = document.querySelector('.products__body');
    let productItems = productBody.querySelectorAll('.products__item')
    const arrPrice = [];

    productItems.forEach(productItem => {
        let count = stringToNumber(productItem.querySelector('.products__num').textContent);
        count = count !== 0 ? count : 1;
        let price = productItem.dataset.price * count;
        arrPrice.push(price)
    })
    const priceAll = arrPrice.reduce((a, b) => a + b, 0);
    periodPrice(priceAll)
}