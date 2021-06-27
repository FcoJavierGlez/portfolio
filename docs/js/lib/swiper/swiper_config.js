const SWIPER_CONF = {//#carousel
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 2,
    coverflowEffect: {
      rotate: 75,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
    },
}