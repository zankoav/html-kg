import './show-more.scss';
import $ from "jquery";

const MAX_HEIGHT = 800;
let REAL_HEIGHT = $('.big-text__container').height();

if (REAL_HEIGHT > MAX_HEIGHT) {
    $('.big-text__container').css('max-height', '800px');
    $('.big-text')
        .find('.show-more')
        .addClass('show-more--big-text')
        .find('.show-more__title, .show-more__button')
        .click(() => {

            if ($('.show-more--opportunities').find('.show-more__dote').hasClass('show-more__dote--animating')) {
                return;
            }

            $('.big-text__container').animate({'max-height': ($('.big-text__container').height() + MAX_HEIGHT) + 'px'}, 1000, 'linear', function () {
                if($('.big-text__container').height() >= REAL_HEIGHT){
                    $('.big-text__container').addClass('big-text__container--hide');
                    $('.big-text')
                        .find('.show-more').fadeOut().removeClass('show-more--big-text');
                }
            });

        });

}