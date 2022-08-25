let d = document,
    container = document.querySelector(".cart-wrapper"),
    itemBox = d.querySelectorAll(".item__buy"),
    cart = d.querySelectorAll(".header__cart"),
    sum = 0

function getCartData() {
    return JSON.parse(localStorage.getItem("cart"));
}

function setCartData(o) {
    localStorage.setItem("cart", JSON.stringify(o));
}

function addToCart() {
    cartData = getCartData() || {},
        parentBox = this.parentNode.parentNode.parentNode.parentNode,
        itemId = parentBox.getAttribute("data-id"),
        itemTitle = parentBox.querySelector(".item__title").innerHTML,
        itemPrice = parentBox.querySelector(".item__price").innerHTML,
        itemDescription = parentBox.querySelector(".item__description").innerHTML,
        itemImageUrl = parentBox.querySelector(".kitchen").src;

    if (cartData.hasOwnProperty(itemId)) {
        cartData[itemId][0] += 1;
    } else {
        cartData[itemId] = [1, itemTitle, itemPrice, itemDescription, itemImageUrl];
    }

    setCartData(cartData);
    productsQuantity();
}

function generateCartProduct() {
    cartData = getCartData();
    try {
        for (var items in cartData) {
            container.insertAdjacentHTML(
                "afterbegin",
                `<div class="checkout__product" data-id="${cartData[items]}">
                    <div class="product__inner">
                        <div class="product__info">
                            <img class="product__img" src="${cartData[items][4]}" alt="chechout-meat">
                            <div class="product__info-block">
                                <h2 class="product__title">${cartData[items][1]}</h2>
                                <p class="product__description">${cartData[items][3]}</p>
                            </div>
                        </div>
                        <div class="product__block" data-counter="">
                            <button class="product__button--minus" type="submit" data-action="minus"></button>
                            <div class="product__count" data-counter="value=&quot;1&quot;">${cartData[items][0]}</div>
                            <button class="product__button--plus" type="submit" data-action="plus"></button>
                        </div>
                
                        <div class="product__block">
                            <div class="product__price">${cartData[items][2]}</div>
                            <button class="product__button--remove" type="submit"></button>
                        </div>
                    </div>
                </div>
                    `
            );
        }
    } catch (error) {

    }

}


function productsQuantity() {
    sum = 0
    cartData = getCartData();
    for (var items in cartData) {
        sum += cartData[items][0];
    }
    let basketCount = d.querySelectorAll(".cart__count");
    try {
        for (let i = 0; i < basketCount.length; i++) {
            basketCount[i].innerHTML = sum
        }
    } catch (error) { }
}


function removeProducts(productParent) {
    cartData = getCartData();
    for (var items in cartData) {
        if (productParent.dataset.id == cartData[items]) {
            delete cartData[items];
        }
    }
    productParent.remove();
    setCartData(cartData);
    productsQuantity(localStorage.getItem("cart").length);
}

function cartModal() {
    cartData = getCartData(),
        modalButton = $("[data-toggle=modal]"),
        closeModalButton = $(".modal__close"),
        modalOverlay = $(".modal__overlay"),
        modalContent = $(".modal__content");

    if (Object.keys(cartData).length !== 0) {
        for (let i = 0; i < modalButton.length; i++) {
            modalButton.off("click", openModal);
            modalButton[i].href = "checkout.html";
        }
    } else {
        for (let i = 0; i < modalButton.length; i++) {
            modalButton[i].href = "javascript: void(0)";
        }
        modalButton.on("click", openModal);
        closeModalButton.on("click", closeModal);

        function openModal() {
            modalOverlay.addClass("modal__overlay--visible");
            modalContent.addClass("modal__content--visible");
        }

        function closeModal() {
            modalOverlay.removeClass("modal__overlay--visible");
            modalContent.removeClass("modal__content--visible");
        }
    }
}

try {
    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("product__button--remove")) {
            removeProducts(e.target.closest(".checkout__product"));
        }
    });
    productsQuantity(localStorage.getItem("cart").length);
} catch (error) { }

for (var i = 0; i < itemBox.length; i++) {
    itemBox[i].addEventListener("click", addToCart);
}

for (var i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", cartModal);
}

window.onload = () => {
    generateCartProduct(), productsQuantity(), cartModal();
};
