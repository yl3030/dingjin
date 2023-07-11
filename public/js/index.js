var swiperBanner = new Swiper(".banner_swiper", {
    slidesPerView: 1,
    pagination: {
        el: ".banner_swiper_pagination",
        clickable: true,
    },        
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
})

var swiperMember = new Swiper(".member_swiper", {
    slidesPerView: 1.2,
    spaceBetween: 30,
    navigation: {
        nextEl: ".member_arrow_next",
        prevEl: ".member_arrow_prev",
    },
    speed: 1000,
    breakpoints: {
        450: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3.5,
            spaceBetween: 40,
        },
        1400: {
            slidesPerView: 4.5,
            spaceBetween: 40,
        }
    }
})