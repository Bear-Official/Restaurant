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

$(document).ready(function () {
    var modalButton = $("[data-toggle=modal]");
    var closeModalButton = $(".modal__close");
    modalButton.on("click", openModal);
    closeModalButton.on("click", closeModal);

    function openModal() {
        var modalOverlay = $(".modal__overlay");
        var modalContent = $(".modal__content");
        modalOverlay.addClass("modal__overlay--visible");
        modalContent.addClass("modal__content--visible");
    }

    function closeModal(event) { 
        event.preventDefault(); 
        var modalOverlay = $(".modal__overlay");
        var modalContent = $(".modal__content");
        modalOverlay.removeClass("modal__overlay--visible");
        modalContent.removeClass("modal__content--visible");
    }
});
