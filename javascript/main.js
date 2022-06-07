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
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    direction: "horizontal",
    loop: false,
    spaceBetween: 16,
    slidesPerView: 4.2,
    slidesPerGroup: 4.2,
});   


