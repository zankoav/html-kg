import './show-more.scss';
import $ from "jquery";




$('.show-more--opportunities').find('.show-more__title, .show-more__button').click(() => {


    if($('.show-more--opportunities').find('.show-more__dote').hasClass('show-more__dote--animating')){
        return;
    }

    startAnimation();

    //TODO: send ajax request to add new opporunities
    console.log('add opportunities');

    setTimeout(stopAnimation,3000);

    function startAnimation() {
        $('.show-more--opportunities').find('.show-more__dote').addClass('show-more__dote--animating');
        $('.show-more--opportunities').find('.show-more__title').fadeOut(function () {
            $(this).html('Загрузка').fadeIn();
        });
    }

    function stopAnimation() {
        $('.show-more--opportunities').find('.show-more__dote').removeClass('show-more__dote--animating');
        $('.show-more--opportunities').find('.show-more__title').fadeOut(function () {
            $(this).html('Показать еще').fadeIn();
        });
    }

});