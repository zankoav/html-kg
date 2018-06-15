import './reviews.scss';
import './../review/review';
import Swiper from 'swiper';

let swiper = new Swiper('.reviews__swiper', {
    navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev',
    },
    spaceBetween: 20,
    slidesPerView: 4,
    breakpoints: {
        // when window width is <= 767px
        767: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is <= 1023px
        1023: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is <= 1279px
        1279: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});