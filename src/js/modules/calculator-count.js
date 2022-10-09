import { calculatorSelect } from "./products.js";

const PRODUCTS_ELT = document.querySelector('.products');

export function calculatorCounter(className) {

    let calculatorCounts;
    let cloudSection;
    let cloudOptionAll;

    const cloud = className.classList.contains('calculator__cloud')
    const multiple = className.classList.contains('calculator__multiple')

    if (cloud) {
        calculatorCounts = className.querySelectorAll('.count-js');
        cloudSection = className.querySelector('.section__cloud');
        cloudOptionAll = className.querySelectorAll('.checkbox-js');
    } else if (multiple) {
        calculatorCounts = className.querySelectorAll('.count-js');
        cloudSection = className.querySelector('.section__multiple');
        cloudOptionAll = className.querySelectorAll('.checkbox-js');
    }


    calculatorCounts.forEach(calculatorCount => {
        const count = calculatorCount.querySelector('.input__count');
        const plus = calculatorCount.querySelector('.btn__plus');
        const minus = calculatorCount.querySelector('.btn__minus');
        const label = calculatorCount.closest('label'); //выносим родительский элемент,тк он у нас для данного раздела не меняется. 
        // я заменила parentElement на closest label тк очумелые ручки могут внезапно внести еще один блок между

        function incrementHandler() {
            let val = parseInt(count.value) + 1;
            checkMaxAndMin(val);
        }

        function decrementHandler() {
            let val = parseInt(count.value) - 1;
            checkMaxAndMin(val);
        }

        function countInput() {
            let val = parseInt(count.value);
            checkMaxAndMin(val);
        }

        function checkMaxAndMin(val) {
            if (val >= 10) {
                count.value = 10;
                plus.disabled = true;
                checkHandler('on', label);
            } else if (val <= 0) {
                count.value = 0;
                minus.disabled = true;
                checkHandler('off', label);
            } else {
                count.value = val;
                plus.disabled = false;
                minus.disabled = false;
                checkHandler('on', label);
            }
            calculatorSelect(PRODUCTS_ELT, label);
            cloudCheck();
        }

        // вызов функций для элементов calculator__count
        minus.addEventListener('click', decrementHandler);
        plus.addEventListener('click', incrementHandler);
        count.addEventListener('input', countInput);
    });


    // Включение/отключение checkbox для input number
    function checkHandler(evt, label) {
        const check = label.querySelector('input');
        check.checked = evt === 'on' ? true : false;
    };


    cloudOptionAll.forEach(cloudOption => {
        const label = cloudOption.closest('label');
        const inputCount = label.querySelector('.input__count');
        const minus = label.querySelector('.btn__minus');
        const plus = label.querySelector('.btn__plus');
        const val = inputCount.value;

        calculatorSelect(PRODUCTS_ELT, inputCount.closest('label'));
        if (val > 0) cloudOption.checked = true;
        cloudCheck();

        cloudOption.addEventListener('change', () => {
            if (cloudOption.checked === true) {
                inputCount.value = parseInt(inputCount.value) + 1;
                minus.disabled = false;
            } else if (cloudOption.checked === false) {
                inputCount.value = 0;
                minus.disabled = true;
                plus.disabled = false;
            }
            calculatorSelect(PRODUCTS_ELT, label);
            cloudCheck();
        });
    });

    cloudSection.addEventListener('click', e => {
        e.preventDefault();
    });


    function cloudCheck() {
        const optionTrue = [...cloudOptionAll].filter(item => item.checked === true);
        return cloudSection.checked = optionTrue.length > 0 ? true : false;
    }
}

export function radioButtonsHandler(elts) {
    elts.forEach(item => {
        if (item.querySelector('input').checked === true) {
            calculatorSelect(PRODUCTS_ELT, item);
        }
        item.querySelector('input').addEventListener('change', (evt) => {
            calculatorSelect(PRODUCTS_ELT, item);
        })

    })

}