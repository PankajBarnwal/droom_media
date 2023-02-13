  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-0;
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
{/* <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script> */}
    $('.owl-carousel-cards').owlCarousel({
        // center: true,
        loop: true,
        margin: 30,
        autoplay: true,
        nav: true,
        responsiveClass: true, 
        navText:["<i class='fas fa-chevron-circle-left' style='font-size:36px'></i>","<span> <img  class='right-arrow' src='./images/next.png' alt=''></span>"],
        responsive:{
            0:{
                items: 2.5,
            },
            767:{
                items: 3.5,
            },
            1200:{
                items: 5,
            }
        }
    });
  
  })(window.jQuery);


