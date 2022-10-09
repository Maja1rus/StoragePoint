import { copy } from "./copy.js";

export function shere(link) {
    const popup = document.querySelector('.popup');
    const popupLink = popup.querySelector('.popup__link');
    const btnCopy = popup.querySelector('.btn__copy');

    popupLink.innerHTML = `
        <a href="${link}" class="popup__link">${link}</a>
    `;

    btnCopy.addEventListener('click', () => {
        copy(popupLink);
    })

}