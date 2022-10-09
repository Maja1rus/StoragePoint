const loader = document.querySelector('.clock-loader');

function show_loader() { if(loader) loader.classList.remove('hidden'); }
function hide_loader() { if(loader) loader.classList.add('hidden'); }

export async function umi_macro(module, method, args, params = null, loader = true) {
    if(loader) show_loader();
    let rq = await request(`/udata/${module}/${method}/${args.join('/')}.json`, "GET", params);
    if(loader) hide_loader();

    if (rq.hasOwnProperty("result")) {
        return rq["result"];
    } else {
        if (rq["trace"] !== undefined || rq["udata"] !== undefined) {
            // alert('Ошибка! Информация об ошибке выведена в консоль');
            console.log(rq);
        } else {
            return rq;
        }
    }
}

export function request(url, method = 'GET', params = null, json = true) {
    if (params != null && !(params instanceof FormData)) params = formDataFromObject(params);
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();

        if (params != null && method == 'GET') {
            url += '?' + new URLSearchParams(params).toString();
            console.log(url);
        }
        xhr.open(method, url);
        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                var result = xhr.response;
                if (json) result = JSON.parse(result);
                resolve(result);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function() {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        if (params != null && method == "POST") {
            xhr.send(params);
        } else {
            xhr.send();
        }
    });
}

function formDataFromObject(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
}
