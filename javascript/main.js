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

// First livrary
var btnContainer = document.getElementById("livrary");
var btns = btnContainer.getElementsByClassName("button");
var btns = btnContainer.getElementsByClassName("button");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Second livrary
var btnContainer = document.getElementById("livrary-two");

var btns = btnContainer.getElementsByClassName("btn");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("activ");
        current[0].className = current[0].className.replace(" activ", "");
        this.className += " activ";
    });
}

// Three livrary

var btnContainer = document.getElementById("when");

var btns = btnContainer.getElementsByClassName("buttonn");
var btns = btnContainer.getElementsByClassName("buttonn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("activee");
        current[0].className = current[0].className.replace(" activee", "");
        this.className += " activee";
    });
}

$(document).ready(function () {
    $(".minus").click(function () {
        var $input = $(this).parent().find("input");
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $(".plus").click(function () {
        var $input = $(this).parent().find("input");
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
