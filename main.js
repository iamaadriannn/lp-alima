var swiper = new Swiper(".mySwiper", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 3,
   initialSlide: 1,
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
   },
   pagination: {
      el: ".swiper-pagination",
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});
