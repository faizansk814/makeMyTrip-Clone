const swiper = new Swiper('.cart_slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:5,
    spaceBetween:30,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });