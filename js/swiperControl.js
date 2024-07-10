var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 1.5,

        },
    },
    loop: true,
    navigation: {
        nextEl: ".thing02-1 .swiper-button-next",
        prevEl: ".thing02-1 .swiper-button-prev"
    },
    pagination: {
        el: ".thing02-1 .swiper-pagination",
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1.25,
    spaceBetween: 50,
    centeredSlides: true,
    speed: 1000,
    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 1.25,
            spaceBetween: 50,
        },
    },
    loop: true,
    navigation: {
        nextEl: ".thing07-2 .swiper-button-next",
        prevEl: ".thing07-2 .swiper-button-prev"
    },
    pagination: {
        el: ".thing07-2 .swiper-pagination",
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
});
var swiper3 = new Swiper(".mySwiper3", {
    speed: 1000,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
});
var swiper4 = new Swiper(".mySwiper4", {
    speed: 1000,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
});
var swiper5 = new Swiper(".mySwiper5", {
    speed: 1000,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
});
var swiper6 = new Swiper(".mySwiper6", {
    slidesPerView: 1.25,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 1.25,

        },
    },
    loop: true,
    navigation: {
        nextEl: ".thing17-2 .swiper-button-next",
        prevEl: ".thing17-2 .swiper-button-prev"
    },
    pagination: {
        el: ".thing17-2 .swiper-pagination",
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
});
var swiper7 = new Swiper(".mySwiper7", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
   
    loop: true,
    navigation: {
        nextEl: ".thing21-1 .swiper-button-next",
        prevEl: ".thing21-1 .swiper-button-prev"
    },
    pagination: {
        el: ".thing21-1 .swiper-pagination",
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
});
var swiper8 = new Swiper(".mySwiper8", {
    speed: 1000,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
});
// 跑馬燈
var swiper9 = new Swiper(".mySwiper9", {
    // slidesPerView: 1.6,
    freeMode: true,
    speed: 10000,
    loop: true,
    // autoplay: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    }
});