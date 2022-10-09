import { menu } from "./modules/menu.js";
import { questionFn } from "./modules/question.js";
import { slider } from "./modules/slider.js";
import { YandexMaps } from './modules/map.js';
import { calculatorCounter, radioButtonsHandler } from "./modules/calculator-count.js";
import { formSlide } from "./modules/form-slide.js";
import { optionFn } from "./modules/admin-option.js";
import { filterOpen } from "./modules/filter-open.js";
import { loginValid } from "./modules/login-valid.js";
import { phoneMask } from "./modules/phone-mask.js";
import { submitForm } from "./modules/submit-form.js";
import { productsOpen } from "./modules/products-open.js";
import { blockFixed } from "./modules/fixed.js";
import { loginPhone } from "./modules/login-phone.js";


// header menu
const header = document.querySelector('.header');
try {
    if (header) {
        menu(header);
        blockFixed(header, 500);
    }
} catch (error) {
    console.log(error);
}

// slider
try {
    const sliders = document.querySelector('.slider')
    if (sliders) {
        slider();
    }
} catch (error) {
    console.log(error);
}

// question-select
try {
    const question = document.querySelector('.question__list')
    if (question) {
        questionFn(question);    
    }
} catch (error) {
    console.log(error);
}

// map
try {
    const mapContainer = document.querySelector('.map');
    if (mapContainer) {
        const obj = {
            containerId: 'map', // контейнер, куда загружается карта
            coords: '', // список адресов, которые выводим на карты
            // url: URL, // адрес апи
            center: [59.85048930385515, 30.28954147510326], // центр карты
            zoom: 14, // величина зума
            find: false, // возможность открытия бабла по клику вне карты
            coordsMarker: [59.849043535013784, 30.282540761901842]
        };
        const mapInit = new YandexMaps(obj);
    }
} catch (error) {
    console.log(error);
}

// calculator
try {
    const calculatorCloud = document.querySelector('.calculator__cloud');
    const calculatorMultiple = document.querySelectorAll('.calculator__multiple');
    if (calculatorCloud) {
        calculatorCounter(calculatorCloud);
    }
    if (calculatorMultiple.length > 0) {
        console.log(calculatorMultiple);
        calculatorMultiple.forEach(calculatorMulti => {
            console.log(calculatorMulti);
            calculatorCounter(calculatorMulti);
        })
    }
    const radioButtons = document.querySelectorAll('.calculator__radio');
    if (radioButtons.length > 0) {
        radioButtonsHandler(radioButtons);
    }
} catch (error) {
    console.log(error);
}

// modal-calculator
try {
    const products = document.querySelector('.products')
    if (products) {
        productsOpen(products);
    }
} catch (error) {
    console.log(error);
}

// form login 
try {
    const login = document.querySelector('.login');
    if (login) {
        phoneMask(login);
        loginValid(login);
        formSlide(login);
        loginPhone(login)
    }
} catch (error) {
    console.log(error);
}

// отправка данных с формы аренды
try {
    const rent = document.querySelector('.rent__form');
    if (rent) {
        const rentBtn = rent.querySelector('.rent__btn');
        submitForm(rent, rentBtn)
    }
} catch (error) {
    console.log(error);
}


//admin-tbody 
try {
    const adminTbody = document.querySelector('.admin__tbody');
    if (adminTbody) {
        optionFn(adminTbody);
    }
} catch (error) {
    console.log(error);
}

// filter admin-pamel
try {
    const filter = document.querySelector('.filter');
    if (filter) {
        filterOpen(filter);
        blockFixed(filter, 220);
    }
} catch (error) {
    console.log(error);
}

// edit-form
try {
    const editForm = document.querySelector('.edit__form');
    if (editForm) {
        const editBtn = editForm.querySelector('.btn__submit'); 
        submitForm(editForm, editBtn);
    }
} catch (error) {
    console.log(error);
}
