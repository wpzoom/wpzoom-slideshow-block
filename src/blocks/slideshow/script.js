import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function initSlideshow(slideshow) {
    const {
        useNavigation,
        usePagination,
        useScrollbar,
        autoplay,
        loop,
        speed,
        spaceBetween,
        slidesPerView,
        effect,
        direction,
        freeMode,
        centeredSlides,
        cssMode,
        grid
    } = JSON.parse(slideshow.dataset.swiper);

    const swiperOptions = {
        autoplay,
        loop,
        speed,
        spaceBetween,
        slidesPerView,
        effect,
        direction,
        freeMode,
        centeredSlides,
        cssMode,
        grid,
    };

    // Add navigation if enabled
    if (useNavigation) {
        swiperOptions.navigation = {
            nextEl: `#${slideshow.id} .swiper-button-next`,
            prevEl: `#${slideshow.id} .swiper-button-prev`,
        };
    }

    // Add pagination if enabled
    if (usePagination) {
        swiperOptions.pagination = {
            el: `#${slideshow.id} .swiper-pagination`,
        };
    }

    // Add scrollbar if enabled
    if (useScrollbar) {
        swiperOptions.scrollbar = {
            el: `#${slideshow.id} .swiper-scrollbar`,
        };
    }

    // Initialize Swiper with the options
    const swiperInstance = new Swiper(`#${slideshow.id}`, swiperOptions);

    return swiperInstance;
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.slideshow-container').forEach((slideshow) => initSlideshow(slideshow));
});
