import './modal-contacts.scss';
import $ from 'jquery';

$('.contacts-menu__button--phone').click(function (event) {
    event.preventDefault();
    $('body').on({'mousewheel': stopScroll});
    $('.modal-contacts').css("display", "flex").hide().fadeIn();
});

$('.modal-contacts__button,.modal-contacts__dark-glass').click(function () {
    event.preventDefault();
    $('.modal-contacts').fadeOut();
    $('body').off({'mousewheel': stopScroll});
});

function stopScroll(e) {
    if (e.target.id === 'el') return;
    e.preventDefault();
    e.stopPropagation();
}
