import './main-slider.scss';
import Swiper from 'swiper';

let swiper = new Swiper('.main-slider', {

    navigation: {
        nextEl: '.main-slider__button-next',
        prevEl: '.main-slider__button-prev',
    },
    pagination: {
        el: '.main-slider__pagination',
        clickable: false,
    }
});