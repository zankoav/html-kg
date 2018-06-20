import './opportunities.scss';
import './../opportunity/opportunity';
import $ from 'jquery';
import Swiper from 'swiper';

let opportunities;

if ($(window).width() < 768) {
    initSwiper();
}

function initSwiper() {

    $('.opportunities').removeClass('opportunities--js');
    opportunities = new Swiper('.opportunities', {
        spaceBetween: 30,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
        }
    });
}

$(window).on('resize', function () {
    if ($(this).width() < 768) {
        if (!opportunities) {
            initSwiper();
        } else {
            $('.opportunities').removeClass('opportunities--js');
            opportunities.update();
        }
    } else if(opportunities){
        $('.opportunities').addClass('opportunities--js');
        opportunities.destroy(false, true);
    }
});


