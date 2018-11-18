(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

$(document).scroll(function () {
    //Show element after user scrolls 800px
    var y = $(this).scrollTop();
  $(".conceptShow1").each(function () {
    let y = $(document).scrollTop();
    let t = $(this).parent().offset().top;
    if (y > t-550) {
        $(this).fadeIn();
    } else {
        $(this).fadeOut();
    }
  });
});


$(document).scroll(function () {
    //Show element after user scrolls 800px
    var y = $(this).scrollTop();
  $(".conceptShow2").each(function () {
    let y = $(document).scrollTop();
    let t = $(this).parent().offset().top;
    if (y > t-350) {
        $(this).fadeIn();
    } else {
        $(this).fadeOut();
    }
  });
});


$(document).scroll(function () {
    //Show element after user scrolls 800px
    var y = $(this).scrollTop();
  $(".conceptShow3").each(function () {
    let y = $(document).scrollTop();
    let t = $(this).parent().offset().top;
    if (y > t-0) {
        $(this).fadeIn();
    } else {
        $(this).fadeOut();
    }
  });
});
// Collapse now if page is not at top
showconceptbg1();
// Collapse the navbar when page is scrolled
$(window).scroll(showconceptbg1);
