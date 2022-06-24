//  Slick slider
$(document).ready(function () {
    $(".swiper-wrapper").slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        arrows: true,
        variableWidth: true,
        adaptiveHeight: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                },
            },
        ],
    });
});

// data-toggle="modal" Modal windows
// $(document).ready(function () {
//     var modalButton = $("[data-toggle=modal]");
//     var closeModalButton = $(".modal__close");
//     modalButton.on("click", openModal);
//     closeModalButton.on("click", closeModal);

//     function openModal() {
//         var modalOverlay = $(".modal__overlay");
//         var modalContent = $(".modal__content");
//         modalOverlay.addClass("modal__overlay--visible");
//         modalContent.addClass("modal__content--visible");
//     }

//     function closeModal(event) {
//         event.preventDefault();
//         var modalOverlay = $(".modal__overlay");
//         var modalContent = $(".modal__content");
//         modalOverlay.removeClass("modal__overlay--visible");
//         modalContent.removeClass("modal__content--visible");
//     }
// });

// Option

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

// Basket

let basketCounter = 0;

localStorage.setItem("basketCounter", basketCounter);

// Animation

let navigation = document.getElementsByClassName("navigation")[0];
let cart = document.getElementsByClassName("header--cart")[0];

window.onscroll = function () {
    if (
        document.body.scrollTop > 550 ||
        document.documentElement.scrollTop > 550
    ) {
        navigation.style = "position: sticky;";
        cart.className = "header__cart header--cart activ";
    } else {
        navigation.style = "";
        cart.className = " header__cart header--cart";
    }
};

{
    /* <div class="cold__snacks__count">
<span class="cold__snacks--count">2</span>
</div>
<div class="cold__snacks__block">
<div class="cold__snacks__block--second">
    <div class="cold__snacks--space">
        <h2 class="cold__snacks__header">Гусь</h2>
        <span class="cold__snacks__gram">Вес: 225 г</span>
    </div>
    <p class="cold__snacks__sub cold__snacks--sub" data-items-in-box>
        Фаршированный яблоками
    </p>

    <div class="cold__snacks--space cold__snacks--spacee">
        <button type="submit" class="cold__snacks--btn" data-action="plus"></button>
        <span class="cold__snacks--price" data-counter>220 ₽</span>
        <button type="submit" class="cold__snacks--btnn"
            data-action="minus"></button>
    </div>
</div>
</div> */
}
