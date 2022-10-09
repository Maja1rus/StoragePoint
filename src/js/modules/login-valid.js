import {debounce} from './debounce.js';
import { submitForm } from './submit-form.js';

export function loginValid(login) {
    const loginInputs = login.querySelectorAll('.login__input');
    const loginBtnRequest = login.querySelector('.btn__request');
    const loginBtnSend = login.querySelector('.btn__send');
    const loginForm = login.querySelector('.login__form');

    //отключение кнопки
    function btnDisabled(btn) {
        btn.setAttribute('disabled', true);
    }
    btnDisabled(loginBtnRequest);
    btnDisabled(loginBtnSend);

    function btnActive(btn) {
        btn.removeAttribute('disabled');
    }

    let checkName, checkPhone;
    let checkCode;

    function inputCheck(item) {
        let rule = item.dataset.input;
        let value = item.value;
        switch (rule) {
            case 'name':
                checkName = /^[а-яА-ЯёЁa-zA-Z]{2,30}$/.test(value);
                break;
            case 'phone':
                checkPhone = value.length >= 17 ? true : false
                console.log(value.length);
                break;
            case 'code':
                checkCode = value.length >= 3 ? true : false
                break;
        }
        if (checkName === true && checkPhone === true) {
            btnActive(loginBtnRequest);
            checkCode === true
                ? btnActive(loginBtnSend)
                : btnDisabled(loginBtnSend);
        } else {
            btnDisabled(loginBtnRequest);
        }
    }
    const inputCheckHandler = debounce(inputCheck, 200);

    for (let input of [...loginInputs]) {
        input.addEventListener('keyup', () => {
            inputCheckHandler(input);
        });
    }

    submitForm(loginForm, loginBtnSend);
}
