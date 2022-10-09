const URL = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';

export class YandexMaps {
    constructor({
        container,
        containerId,
        coords,
        url,
        center,
        zoom,
        find,
        coordsMarker
    }) {
        this.containerId = containerId || null; // контейнер, в который будет грузиться карта
        this.container =
            container || document.querySelector(`#${this.containerId}`);
        this.coords = coords; // массив объектов с координатами и данными
        this.url = URL; // адрес апи, по
        this.center = center;
        this.zoom = zoom || 9;
        this.newObserver = null;
        this.ymapsApiScript = null;
        this.myMap = null;
        this.placemarks = [];
        this.find = find || false;
        this.coordsMarker = coordsMarker || false;
        // this.marksClickHandler = this.marksClickHandler.bind(this);
        this.intObserver(this.container);
    }

    intObserver(target) {
        // проверяем, что контейнер находится в экране
        this.newObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.appendScript(this.url); // прикрепляем в контейнер скрипт апи яндекса
                    observer.unobserve(entry.target);
                }
            });
        });
        this.newObserver.observe(target);
    }

    appendScript(url) {
        // скрипт прикрепления апи яндекса внутрь контейнера
        if (this.ymapsApiScript) return;
        this.ymapsApiScript = document.createElement('script');
        this.ymapsApiScript.src = url;
        this.container.append(this.ymapsApiScript);
        this.ymapsApiScript.onload = () => this.mapInit(this.coords);
    }

    mapInit(geoPoints) {
        if (geoPoints.length === 1) this.center = geoPoints[0].coords;
        const init = () => {
            this.myMap = new ymaps.Map(this.containerId, {
                center: this.center,
                zoom: this.zoom
            });

            let placemark = new ymaps.Placemark(
                this.coordsMarker,
                {},
                {
                    iconLayout: 'default#image',
                    iconImageHref: '../img/icons/map-marker.svg',
                    iconImageSize: [80, 80],
                    iconImageOffseet: [0, 0]
                }
            );
            this.myMap.geoObjects.add(placemark);
        };
        ymaps.ready(init);
    }

    getPointData(item) {
        // разметка балуна точки
        return {
            balloonContentBody: ``,
            clusterCaption: 'метка <strong>' + item.id + '</strong>'
        };
    }
}
