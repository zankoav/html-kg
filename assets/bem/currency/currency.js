import './currency.scss';
import $ from 'jquery';

$('.currency__item--selected').click(function () {
    $(this).parents('.currency').find('.currency__list').fadeToggle(300);
});

$('.currency__item--list').click(function () {
    let $inner = $(this).html();
    let $parents = $('.currency');
    $parents.find('.currency__item--selected').html($inner);
    $(this).parents('.currency').find('.currency__item--selected').click();

    let currency = $(this).data('currency');
    let $parent = $(this).parents('.currency');
    let quality = $parent.find(`option[name="${currency}"]`).attr('value');
    $parents.find(':selected').removeAttr('selected');
    $parents.find(`option[name="${currency}"]`).attr("selected", "selected");

    changeCurrency(currency, quality);
});

function changeCurrency(currency, quality) {
    console.log(currency + ", " + quality);
}


