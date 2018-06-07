import './currency.scss';
import $ from 'jquery';

$('.currency__item--selected').click(function () {
    $(this).parents('.currency').find('.currency__list').fadeToggle(300);
});

$('.currency__item--list').click(function () {
    let $inner = $(this).html();
    let $parent = $(this).parents('.currency');
    $parent.find('.currency__item--selected').click().html($inner);
    let currency = $(this).data('currency');
    $parent.find(':selected').removeAttr('selected');
    let $newSelected = $parent.find(`option[name="${currency}"]`);
    let quality = $newSelected.attr('value');
    $newSelected.attr("selected", "selected");
    changeCurrency(currency, quality);
});

function changeCurrency(currency, quality){
    console.log(currency + ", " + quality);
}


