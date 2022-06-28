var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    speed: 1000,
    touchRatio: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
