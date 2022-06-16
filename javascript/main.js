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

var btnContainer = document.getElementsByClassName("livrary");

for (let j = 0; j < btnContainer.length; j++) {
    var btns = btnContainer[j].getElementsByClassName("button");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[j].className = current[j].className.replace(" active", "");
            this.className += " active";
        });
    }
}

let body = document.getElementsByTagName("body")[0];
let menuButton = document.getElementsByTagName("label")[0];

menuButton.addEventListener("click", myFunction);

function myFunction() {
    $("body").css(
        "overflow",
        $("body").css("overflow") == "hidden" ? "auto" : "hidden"
    );
}
