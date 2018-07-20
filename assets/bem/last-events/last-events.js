import './last-events.scss';
import './../last-event/last-event';
import Swiper from 'swiper';

let swiper = new Swiper('.last-events__swiper', {
    navigation: {
        nextEl: '.last-events__button-next',
        prevEl: '.last-events__button-prev',
    },
    autoplay: {
        delay: 4000,
    },
    spaceBetween: 10,
    slidesPerView: 3,
    breakpoints: {
        // when window width is <= 767px
        767: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is <= 1023px
        1023: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is <= 1279px
        1279: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    }
});