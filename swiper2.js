var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 1,
    centeredSlides: true,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".btnPrev2",
        prevEl: ".btnNext2",
      },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
            freeMode: false,
          },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        375: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        425: {
           slidesPerView: 2,
           spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 10,
        }
    }
  });