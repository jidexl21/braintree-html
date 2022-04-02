(function () {
  'use strict'

    var owl = $('.owl-carousel');
    owl.owlCarousel({
      margin: 10,
      nav: false,
      loop: true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:false,
      responsive: {
        0: { items: 1 },
        600: {   items: 3 },
        1000: {  items: 5 }
      }
    
  })
})()
