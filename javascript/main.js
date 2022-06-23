//  Slick slider
$(document).ready(function () {
    $(".swiper-wrapper").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        variableWidth: true,
        adaptiveHeight: true,
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

const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");

btnMinus.addEventListener("click", function () {
    console.log("minus Click");

    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    }
});

btnPlus.addEventListener("click", function () {
    console.log("plus Click");
    counter.innerText = ++counter.innerText;
});

window.addEventListener("click", function (event) {
    if (event.target.dataset.action === "plus") {
        console.log("plus");

        const checkoutCount = event.target.closest(".checkout--count");

        console.log("counterWrap");

        const counter = checkoutCount.querySelector("[data-counter]");
        console.log("counter");

        counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === "minus") {
        console.log("minus");

        const checkoutCount = event.target.closest(".checkout--count");

        console.log("counterWrap");

        const counter = checkoutCount.querySelector("[data-counter]");
        console.log("counter");

        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }
});

// Remove products from cart
$(".checkout__inner").on("click", ".remove-item", function () {
    $(this).closest(".checkout__inner").remove(); // remove the closest li item row
});

const innerWrapper = document.querySelector(".cart-wrapper");


// We add products in basket
window.addEventListener("click", function (event) {
    if (event.target.hasAttribute("data-cart")) {
        const card = event.target.closest(".card");

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector(".kitchen").getAttribute("src"),
            title: card.querySelector(".cold__snacks__header").innerText,
            itemsInBox: card.querySelector("[data-items-in-box]").innerText,
            weight: card.querySelector(".cold__snacks__gram").innerText,
            price: card.querySelector(".cold__snacks--price").innerText,
            // counter: card.querySelector("[data-counter]").innerText,
        };

        console.log(productInfo);

        // Собранные данные подставим в шаблон для товара в корзине
        const cartItemHTML = `<div class="food__link card" data-id="{productInfo.id}">
                                            <a href="Other Pages/cart3.html">
                                                <div class="swiper-slide">
                                                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                                            </a>
                                            <div class="cold__snacks__count" data-counter>
                                                <input class="cold__snacks__input" type="text" value="1" />
                                            </div>
                                            <div class="cold__snacks__block">
                                                <div class="cold__snacks__block--second">
                                                    <div class="cold__snacks--space">
                                                        <h2 class="cold__snacks__header">${productInfo.title}</h2>
                                                        <span class="cold__snacks__gram">${productInfo.weight}</span>
                                                    </div>
                                                    <p class="cold__snacks__sub cold__snacks--sub" data-items-in-box>
                                                        Фаршированный гречневой кашей, <br>
                                                        курагой, апельсином и зеленым яблоком
                                                    </p>
                                                    <div>
                                                    </div>
                                             <div class="cold__snacks--space cold__snacks--spacee">
                                            <button type="submit" class="cold__snacks--btn" data-action="plus"></button>
                                            <span class="cold__snacks--price" data-counter>220 ₽</span>
                                            <button type="submit" class="cold__snacks--btnn"
                                                data-action="minus"></button>
                                             </div>     
                                                    </div>
                                                </div>
                                            </div>
                                        </div> `;

        // Отобразим товар в корзине
        innerWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
    }
});

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
