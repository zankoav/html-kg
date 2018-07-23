import './our-house.scss';
import $ from "jquery";

$(".our-house__button-booking").click(function (event) {
    event.preventDefault();
    $(this).toggleClass("our-house__button-booking_active");

    $(this).siblings(".our-house__calendar").slideToggle();
});

