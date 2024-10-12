import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.slideshow-container', {
    // Optional parameters
    direction: 'horizontal',
    cssMode: true,
    loop: true,
    speed: 1000,
    spacecBetween: 100,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

console.log(swiper);