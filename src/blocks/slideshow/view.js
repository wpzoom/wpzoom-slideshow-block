import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.slideshow-container').forEach(function (slideshow) {
        const { useNavigation, usePagination, ...swiperOptions } = JSON.parse(slideshow.dataset.swiper);

        if (useNavigation) {
            swiperOptions.navigation = {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            };
        }

        if (usePagination) {
            swiperOptions.pagination = {
                el: '.swiper-pagination',
            };
        }


        const swiper = new Swiper(`#${slideshow.id}`, {
            ...swiperOptions, // Spread the options from the data attribute
        });
    });
});
