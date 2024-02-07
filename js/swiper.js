// function who swipe elements 
function swiperCard(){

  // Object swiper of the library swiper.js
  let swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 10,
    grabCursor: true,
  
    // Responsive breakpoints
    breakpoints: {
      // When window width is <= 576px
      576: {
        slidesPerView: 1
      },
      // When window width is <= 768px
      768: {
        slidesPerView: 1
      },
      // When window width is <= 992px
      992: {
        slidesPerView: 3,
      }
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}


// export the function swiperCard
export {swiperCard};
