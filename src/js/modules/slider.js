import Swiper, {Navigation} from "swiper";

export function slider() {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        modules: [Navigation],
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        grabCursor: true,
        breakpoints: {
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
} 
