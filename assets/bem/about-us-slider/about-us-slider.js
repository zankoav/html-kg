import './about-us-slider.scss';
import Swiper from 'swiper';

let slider;
initSwiper();


function initSwiper() {

    slider = new Swiper('.about-us-slider', {
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 1,
        effect: 'coverflow',
        grabCursor: true,
        coverflowEffect: {
            rotate: 60,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
        },
        navigation: {
            nextEl: '.about-us-slider__button-next',
            prevEl: '.about-us-slider__button-prev',
        },
    });
    slider.on('resize', function () {
        this.update();
    })
}

