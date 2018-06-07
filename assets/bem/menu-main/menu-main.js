import './../currency/currency';
import './menu-main.scss';
import $ from 'jquery';

$('.menu-main__button').click(function () {
    $('.menu-main__glass').fadeIn(600);
    $('.menu-main__wrapper').addClass('menu-main__wrapper--mobile').animate({left: "0"}, 600);
});

$('.menu-main__button-close, .menu-main__glass').click(function () {
    $('.menu-main__glass').fadeOut(600);
    $('.menu-main__wrapper').animate({left: "-100%"}, 600, function () {
        $(this).removeClass('menu-main__wrapper--mobile');
    })
});