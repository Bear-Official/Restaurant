$(document).ready(function () {
    $(".slider-wrapper").slick({
        arrows: false,
        infinite: true,
    });

    $(".swiper-wrapper").slick({
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 4,
        slidesToScroll: 2,
        swipeToSlide: true,
        arrows: false,
        variableWidth: true,
        adaptiveHeight: true,
    });
});
