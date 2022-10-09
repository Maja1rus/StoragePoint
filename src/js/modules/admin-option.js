import { copy } from "./copy.js";
import { deleteFn } from "./delete.js";
import { popupOpen } from "./popup.js";
import { redirect } from "./redirect.js";
import { shere } from "./shere.js";

export function optionFn(adminTbody) {
    const adminTrs = adminTbody.querySelectorAll('tr');
    adminTrs.forEach(adminTr => {
        const options = adminTr.querySelectorAll('.admin-option')
        options.forEach(option => {
            const optionBtn = option.querySelector('.btn-table');
            const optionList = option.querySelector('.admin-option__wrap');

            optionBtn.addEventListener('click', optionShowHandler);

            function optionShowHandler() {
                //отрисовка опций
                optionList.innerHTML = optionListHTL;
                optionList.classList.add('active')

                // поделиться ссылкой
                const optionShere = option.querySelector('.shere-js')
                if (optionShere) {
                    optionShere.addEventListener('click', () => {
                        shere(adminTr.dataset.linkShere);
                        popupOpen();
                    });
                }

                // редактировтаь данные
                const optionRedirect = optionList.querySelector('.redirect-js');
                if (optionRedirect) {
                    optionRedirect.addEventListener('click', () => {
                        redirect(adminTr.dataset.link);
                        optionRemoveHandler();
                    });
                }

                // копировать поле
                const optionCopy = optionList.querySelector('.copy-js');
                if (optionCopy) {
                    optionCopy.addEventListener('click', () => {
                        copy(copyElement(adminTr));
                        optionRemoveHandler();
                    })
                }

                // удаление опций
                const optionDelete = optionList.querySelector('.delete-js')
                if (optionDelete) {
                    optionDelete.addEventListener('click', () => {
                        deleteFn(adminTr);
                        optionRemoveHandler();
                    })
                }

                document.addEventListener('click', e => {
                    // при клике в любом месте окна браузера
                    const target = e.target; // находим элемент, на котором был клик
                    if (!target.closest('.admin-option__wrap') && !target.closest('.btn-table')) {
                        optionRemoveHandler();
                        
                    }
                });
            };

            // скрывем опции            
            function optionRemoveHandler() {
                optionList.innerHTML = ``;
                optionList.classList.remove('active');
                document.removeEventListener('click', optionRemoveHandler);
            }

            // убираем поледний столбик с опциями, чтобы не копировать их
            function copyElement(str) {
                str = adminTr.children;
                const strArr = [];
                for (let i = 0; i < str.length - 1; ++i) {
                    strArr.push(str[i].innerText);
                }
                return strArr;
            }

            // Список доступных опций
            const optionListHTL = `
                <li>
                    <button class="btn admin-option__btn popup__open shere-js">
                        <img src="/templates/demomarket/img/icon-admin-option/share.svg" alt="Поделиться ссылкой">Поделиться ссылкой</button>
                </li>
                <li>
                    <button class="btn admin-option__btn redirect-js">
                        <img src="/templates/demomarket/img/icon-admin-option/edit.svg" alt="Редактировать">
                            Редактировать
                    </button>
                </li>
                <li>
                    <button class="btn admin-option__btn copy-js">
                        <img src="/templates/demomarket/img/icon-admin-option/copy.svg" alt="Копировать">
                        Копировать
                    </button>
                </li>
                <li>
                    <button class="btn admin-option__btn delete-js">
                        <img src="/templates/demomarket/img/icon-admin-option/delete.svg" alt="Удалить">
                        Удалить
                    </button>
                </li>
            `;
        })
    })
}