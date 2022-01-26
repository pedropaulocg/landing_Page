var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".btnPrev",
        prevEl: ".btnNext",
      },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 40,
            freeMode: false,
          },
        320: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        375: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        425: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
    }
  });