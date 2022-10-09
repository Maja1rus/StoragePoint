import { stringToNumber } from "./stringToNumber.js";

export function periodPrice(price) {
    const calculator = document.querySelector('.calculator');
    const priceSummary = calculator.querySelector('.calculator-price__summary span');
    const priceActual = calculator.querySelector('.calculator-price__actual');
    const priceOld = calculator.querySelector('.calculator-price__old');
    const priceMonth = calculator.querySelector('.calculator-price__month');

    const months = calculator.querySelectorAll('.calculator-price__item')

    months.forEach(month => {
        const monthCheck = month.querySelector('.calculator__radio--real');
        if (monthCheck.checked === true) {
           monthCheckHandler(stringToNumber(month.dataset.time), stringToNumber(month.dataset.sale))
        }
        month.addEventListener('change', () => {
           monthCheckHandler(stringToNumber(month.dataset.time), stringToNumber(month.dataset.sale))
       })
    })

    function monthCheckHandler(numberMonths, sale) {
        priceActualHandler(sale, numberMonths);
        priceOldHandler(numberMonths);
        nameMountsHandler(numberMonths);
    }

    // выводим сумму за месяц
    priceSummary.innerText = price

    // выводим сумму со скидками
    function priceActualHandler(sale, countMounts) {
        let sum = price * countMounts;
        let result = sale * (sum / 100);

        priceActual.innerText = sum - result;
    }

    // выводим сумму без скидки
    function priceOldHandler(countMounts) {
        let sum = price * countMounts
        priceOld.innerText = `${sum}`;
    }

    // выводим выбранное кол-во месяцев
    function nameMountsHandler(countMounts) {
        if (countMounts === 1) {
            priceMonth.innerText = `${countMounts} месяц`
        } else if ([2, 3, 4].includes(countMounts)) {
            priceMonth.innerText = `${countMounts} месяца`
        } else {
            priceMonth.innerText = `${countMounts} месяцев`
        }
    }
}