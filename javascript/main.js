const firstSlider = new Swiper(".first-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
});

// Second slider
const coldSnacks = new Swiper(".cold-snacks", {
    // Optional parameters
    mousewheel: {
        sensitivity: 1,
    },
    // Auto play slider
    // autoplay: {
    //     delay: 3000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    // },

    direction: "horizontal",
    loop: false,
    spaceBetween: 16,
    slidesPerView: 4.2,
    slidesPerGroup: 4.2,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40,
        },

        1200: {
            slidesPerView: 4.2,
            spaceBetween: 40,
        },
    },
});
