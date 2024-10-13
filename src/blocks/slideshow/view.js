import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.slideshow-container').forEach(function (slideshow) {
        const slideshowOptions = JSON.parse(slideshow.dataset.swiper);

        console.log(slideshow.id);

        const swiper = new Swiper(`#${slideshow.id}`, {
            ...slideshowOptions, // Spread the options from the data attribute
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });
});
