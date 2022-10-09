import { sendData } from "./send-data.js";

export const sendForm = form => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const formList = JSON.stringify(data);

    sendData('https://jsonplaceholder.typicode.com/posts', formList)
        .then(() => {
            form.reset();
        })
        .catch(err => {
            console.log(err);
        });
};
