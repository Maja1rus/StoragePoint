import { umi_macro, request } from './umiMacro.js';

export function formSlide(login) {
    // Получаем переменные

    const btnNexts = login.querySelectorAll('.btn__request');
    
    /* Индекс слайда по умолчанию */
    let slideIndex = 1;
    showSlides(slideIndex);

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide() {
        showSlides((slideIndex += 1));
    }

    /* Основная функция сладера */
    function showSlides(n) {
        let slides = login.querySelectorAll('.login__wrap');
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        
        slides[slideIndex - 1].style.display = 'grid';
    }

    btnNexts.forEach(btnNext => {
        btnNext.addEventListener('click', async e => {
            e.preventDefault();
            await try_login();

            plusSlide();
        });
    });

    let confirmButton = document.querySelector('.btn__send');
    if(confirmButton) {
        confirmButton.addEventListener('click', async e => {
            e.preventDefault();

            let code = document.querySelector('.confirm-code').value;
            let result = await umi_macro('users', 'confirmCode', [code]);

            console.log(result);
            if(result == 1) {
                location.href = '/emarket/personal';
            }
        });
    }

    let resendButton = document.querySelector('.login__reopen');
    if(resendButton) {
        resendButton.addEventListener('click', async e => {
            e.preventDefault();

            let result = await umi_macro('users', 'repeatCode', []);
            console.log(`Shh... code is ${result}`);
        });
    }

    async function try_login() {
        let name = document.querySelector('.login-name').value;
        let phone = document.querySelector('.login-phone').value;
        let result = await umi_macro('users', 'customLogin', [name, phone]);

        console.log(`Shh... code is ${result}`);
    }
}
