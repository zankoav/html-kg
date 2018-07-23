import './map-zoom.scss';
import $ from 'jquery';

$(".map-zoom__image").on("click", startZooming);


let isMove = false;
let $link;
let positionX;
let deltaX,
    leftLink;

let parentOffsetLeft, parentOffsetWidth;

$(window).on("mousemove", mouseOrTouchMove);
$(window).on("touchmove", mouseOrTouchMove);


function mouseOrTouchMove(event) {

    if (event.type !== "touchmove") {
        event.preventDefault();
        positionX = event.clientX - deltaX;
    } else {
        positionX = event.originalEvent.changedTouches[0].clientX - deltaX;
    }

    if (isMove) {
        parentOffsetLeft = $($link.parent()).offset().left;
        parentOffsetWidth = $($link.parent()).width();
        let imageWidth = $link.width();

        $link.offset({
            left: positionX >= parentOffsetLeft ? parentOffsetLeft :
                (
                    (positionX + imageWidth) <= (parentOffsetLeft + parentOffsetWidth)
                        ? (parentOffsetLeft + parentOffsetWidth - imageWidth)
                        : positionX
                )
        });
    }
}


function startZooming(e) {
    $link = $(this);

    //if the time now minus the time stored on the link, or 0 if there is not one, is less than 800, it's valid
    if (Date.now() - ($link.data('touchtime') || 0) < 800) {
        $link.animate({
            "width": 1600
        }, 400, function () {

            $link.on('mousedown', mouseOrTouchDown);
            $link.on('touchstart', mouseOrTouchDown);

            $(window).on('mouseup', mouseOrTouchUp);
            $(window).on('touchend', mouseOrTouchUp);


            $link.off('click');
            $(window).on("click", function (event) {
                if (!($(event.target).hasClass("map-zoom__image") || $(event.target).hasClass("map-zoom"))) {

                    $link.animate({
                        "width": "100%",
                        "left": 0,
                        "top": 0
                    }, 400, function () {
                        $(window)
                            .off('click')
                            .off('mouseup')
                            .off('touchend');
                        $(this)
                            .off('mousedown')
                            .off('touchstart')
                            .on("click", startZooming);
                    });
                }
            });
        });
    } else {
        //time did not exist, or it exceeded the 800 threshold, set a new one
        $link.data('touchtime', Date.now());
        //prevent the click
        e.preventDefault();
    }
}

function mouseOrTouchDown(event) {
    isMove = true;
    leftLink = $link.offset().left;
    if (event.type !== "mousedown") {
        deltaX = event.originalEvent.changedTouches[0].clientX - leftLink;
    } else {
        deltaX = event.clientX - leftLink;
    }
}

function mouseOrTouchUp() {
    isMove = false;
}

