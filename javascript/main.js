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

// var navigation = $(".navigation");
// var navigationTop = navigation.offset().top;
// $(window).scroll(function () {
//     var windowTop = $(this).scrollTop();
//     if (windowTop > navigationTop);
//     console.log(sroll);
// });

// var navigation = $(".reveal");
// window.addEventListener("scroll", reveal);
// function reveal() {
//     var reveal = document.querySelector(".reveal");
//     for (var i = 0; i < reveals.length; i++) {
//         var windowheight = window.innerHeight;
//         var revealtop = reveals[i].getBoundingClientRect().top;
//         var revealpoint = 150;

//         if (revealtop < windowheight - revealpoint) {
//             reveal[i].classList.add("active");
//         } else {
//             reveal[i].classList.remove("active");
//         }
//     }
// }

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
