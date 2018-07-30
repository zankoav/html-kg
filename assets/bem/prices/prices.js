import './prices.scss';
import $ from "jquery";

$('.prices__orderby').on('change', function() {

    let columnNumber = this.value;
    let $container = $(this).parent().parent();
    $container.find(".prices__value").removeClass("prices__value_active");

    $container.find(`.prices__value:${columnNumber == 1 ? 'even': 'odd'}`).fadeIn(function () {
       $(this).addClass("prices__value_active").removeAttr('style');
    });

});