export function copy(copyStr) {
    copyStr = copyStr !== copyStr.innerText ? copyStr.innerText : copyStr;
    //копирование текста в буфер обмена
    navigator.clipboard
        .writeText(copyStr)
        .then(() => {})
        .catch(err => {
            console.log('Something went wrong', err);
        });

}