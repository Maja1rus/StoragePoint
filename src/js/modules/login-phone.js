import {
    debounce
} from "./debounce.js";

export function loginPhone(className) {
    const inputPhone = className.querySelector('.input-phone');
    const textPhone = className.querySelector('.login__phone');


    const inputCheckHandler = debounce(blockPhoneHandler, 200);

    inputPhone.addEventListener('keyup', () => {
        inputCheckHandler();
    });

    function blockPhoneHandler() {
        textPhone.innerText = inputPhone.value
    }
}