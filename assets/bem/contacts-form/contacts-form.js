import './contacts-form.scss';
import $ from 'jquery';


let currentValue = '';

$('.contacts-form__input--phone').on('input', function () {

    let value = $(this).val();

    if (currentValue.length < value.length) {
        if (value.length === 3 || value.length === 6) {
            $(this).val(value + ' ');
        }

        if ((value.length === 4 && !value.endsWith(' ')) || (value.length === 7 && !value.endsWith(' '))) {
            let lastLetter = value.substr(-1);
            let oldValue = value.slice(0, -1);

            $(this).val(oldValue + ' ' + lastLetter);
        }
    } else if (value.endsWith(' ')) {
        $(this).val(value.slice(0, -1));
    }

    currentValue = $(this).val();

});

$(".contacts-form__forma").on("submit", function (event) {
    event.preventDefault();

    let data = $(this).serializeArray();
    let postData = {};

    for (let d of data) {

        if((d.name === 'name' || d.name === 'email' ) && d.value.length === 0){
            return;
        }

        postData[d.name] = d.value;
    }

    $(this).find('button').fadeOut(400, function () {
      $(this).replaceWith( "<span class='contacts-form__message-after'>Ваша форма отправлена</span>" );
        $('.contacts-form__message-after').fadeIn(400);
    });

    // TODO : send postData by Ajax
    console.log(postData);

});