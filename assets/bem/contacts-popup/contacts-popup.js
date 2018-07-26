import './contacts-popup.scss';
import $ from 'jquery';


$('.contacts-menu__button--phone').on('click', function () {

    if($(this).hasClass("contacts-menu__button_active")){
        $(this).removeClass('contacts-menu__button_active');
    }else{
        $(this).addClass('contacts-menu__button_active');
        $('.contacts-popup').toggleClass("js-contacts-popup_active").slideToggle();
    }

});

$(window).on('click', function (event) {
    
    if(!$(event.target).hasClass("contacts-menu__button_active")){
        let $contactPopUp = $('.js-contacts-popup_active');
        if ($contactPopUp) {
            $('.contacts-menu__button--phone').removeClass('contacts-menu__button_active');
            $contactPopUp.removeClass('js-contacts-popup_active').slideToggle();
        }
    }
});

