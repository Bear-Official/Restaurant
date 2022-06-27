let d = document,
    container = document.querySelector('.cart-wrapper'),
    itemBox = d.querySelectorAll('.item__buy')


function getCartData() {
    return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(o) {
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}

function productsQuantity() {
    cartData = getCartData()
    let basketCount = d.querySelectorAll('.header__cart--count')
    for (let i = 0; i < basketCount.length; i++) {
        basketCount[i].innerHTML = cartData.length
    }
}


function addToCart() {
    cartData = getCartData() || [],
        parentBox = this.parentNode.parentNode.parentNode.parentNode,
        itemId = parentBox.getAttribute('data-id'),
        itemTitle = parentBox.querySelector('.item__title').innerHTML,
        itemPrice = parentBox.querySelector('.item__price').innerHTML,
        itemDescription = parentBox.querySelector('.item__description').innerHTML,
        itemImageUrl = parentBox.querySelector('.kitchen').src;

    cartData.push([itemId, itemTitle, itemPrice, itemDescription, itemImageUrl, 1]);
    setCartData(cartData)
    productsQuantity()
}

function generateCartProduct() {
    cartData = getCartData()
    if (cartData !== null) {
        for (let i = 0; i < cartData.length; i++) {
            try {
                container.insertAdjacentHTML("afterbegin", `<div class="checkout__product" data-id="${cartData[i][0]}">
                <div class="checkout__inner">
                    <img src="${cartData[i][4]}" class="checkout__meat" alt="chechout-meat">
                    <div class="checkout__blocker">
                        <h2 class="checkout__sup__title">${cartData[i][1]}</h2>
                        <p class="checkout__description">${cartData[i][3]}</p>
                    </div>
                    <div class="checkout__centerr checkout--count" data-counter="">
                        <button type="submit" class="carousel--btn checkout--btn" data-action="minus"></button>
                        <div class="carousel__count checkout__count" data-counter="value=&quot;1&quot;">1</div>
                        <button type="submit" class="carousel--button checkout--button" data-action="plus"></button>
                    </div>
                    <div class="checkout-inner">
                        <div class="checkout__price">${cartData[i][2]}</div>
                        <button type="submit" class="carousel--button checkout--button checkout__button remove-item"></button>
                    </div>
                </div>
                `)
            } catch (error) {

            }
        }
    } else {
        $(document).ready(function () {
            var modalButton = $("[data-toggle=modal]");
            var closeModalButton = $(".modal__close");
            for (let i = 0; i < modalButton.length; i++) {
                modalButton[i].href = "#"

            }
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
    }
}

function removeProducts(productParent) {
    cartData = getCartData()
    for (let i = 0; i < cartData.length; i++) {
        if (productParent.dataset.id == cartData[i][0]) {
            cartData.pop()
        }
    }
    productParent.remove()
    setCartData(cartData)
    productsQuantity(localStorage.getItem("cart").length)
}

window.onload = () => { generateCartProduct(), productsQuantity() }

try {
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            removeProducts(e.target.closest('.checkout__product'))
        }
    })
    productsQuantity(localStorage.getItem("cart").length)
} catch (error) {

}


// Add Click Event on Every Basket button
for (var i = 0; i < itemBox.length; i++) {
    itemBox[i].addEventListener("click", addToCart)
}

