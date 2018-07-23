import './accordion-mixed.scss';
import './../house-booking/house-booking';
import {initMediaSwiper} from './../house-media-library/house-media-library';
import $ from "jquery";
import Swiper from "swiper";


$("[data-mixed-tab]").click(function () {

    let idTab = $(this).data("mixed-tab");

    if ($(window).width() >= 768) {
        if($(this).hasClass('accordion-mixed__tab--active')){
            return;
        }
        $("[data-mixed-tab]").removeClass('accordion-mixed__tab--active');
        $(`[data-mixed-tab=${idTab}]`).addClass('accordion-mixed__tab--active');
        $("[data-mixed-conent]").removeClass('accordion-mixed__content--active');
        $(`[data-mixed-conent=${idTab}]`).addClass('accordion-mixed__content--active');
    } else {



        if($(this).hasClass('accordion-mixed__tab--active')){
            $(this).removeClass('accordion-mixed__tab--active');
            $(".accordion-mixed__content--active").slideUp(function () {
                $(this).removeClass("accordion-mixed__content--active").removeAttr('style');
            });
        }else{

            $("[data-mixed-tab]").removeClass('accordion-mixed__tab--active');
            $(`[data-mixed-tab=${idTab}]`).addClass('accordion-mixed__tab--active');

            $(".accordion-mixed__content--active").slideUp(function () {
                $(this).removeClass("accordion-mixed__content--active").removeAttr('style');
            });

            $(`[data-mixed-conent=${idTab}]`).slideDown(function () {
                if(idTab === 2){
                    initMediaSwiper();
                }
                $(this).addClass("accordion-mixed__content--active").removeAttr('style');
            });
        }

    }
});

