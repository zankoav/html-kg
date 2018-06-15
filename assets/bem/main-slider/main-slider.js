import './main-slider.scss';
import Swiper from 'swiper';

let swiper = new Swiper('.main-slider', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: false,
    }
});