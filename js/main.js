(function ($) {

    "use strict";
    // data - background
  
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  
    })


    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    $('.popup-img').magnificPopup({
        type: 'image'
    });

      $('.popup-video').magnificPopup({
        type: 'iframe'
    });

    $('.testimonial-active').slick({

        slidesToShow: 1,
    
        slidesToScroll: 1,
        autoplay:true,
        arrows: false,
    
        fade: true,
    
        asNavFor: '.testimonial-img',
    
      });
    
      $('.testimonial-img').slick({
    
        slidesToShow: 3,
    
        slidesToScroll: 1,
    
        asNavFor: '.testimonial-active',
    
        dots: false,
    
        centerMode: true,
    
        focusOnSelect: true,
    
        centerPadding: '0px',
    
        arrows: false,
    
        responsive: [{
    
          breakpoint: 1024,
    
          settings: {
    
            slidesToShow: 3,
    
            slidesToScroll: 1,
    
            infinite: true,
    
            dots: false,
    
          }
    
        },
    
        {
    
          breakpoint: 992,
    
          settings: {
    
            slidesToShow: 3,
    
            slidesToScroll: 2
    
          }
    
        },
    
        {
    
          breakpoint: 767,
    
          settings: {
    
            slidesToShow: 1,
    
            slidesToScroll: 1
    
          }
    
        },
    
        {
    
          breakpoint: 480,
    
          settings: {
    
            slidesToShow: 1,
    
            slidesToScroll: 1
    
          }
    
        }
    
        ]
    
      });
    
    
    




      $('.brand-active').slick({
       
    dots: false,

    arrows: false,

    infinite: true,
    autoplay:true,
    speed: 300,

    slidesToShow: 4,

    slidesToScroll: 1,

    responsive: [{

        breakpoint: 1024,

        settings: {

          slidesToShow: 4,

          slidesToScroll: 1,

          infinite: true,

          dots: false,

        }

      },

      {

        breakpoint: 992,

        settings: {

          slidesToShow: 2,

          slidesToScroll: 2

        }

      },

      {

        breakpoint: 767,

        settings: {

          slidesToShow: 2,

          slidesToScroll: 2

        }

      },

      {

        breakpoint: 500,

        settings: {

          slidesToShow: 1,

          slidesToScroll: 1

        }

      }

    ]

        })
    
      
        $('#mobile-menu-active').meanmenu({
            meanScreenWidth:991,
            meanMenuContainer:'.mobible-menu',
        }); 
  
  
  })(jQuery);