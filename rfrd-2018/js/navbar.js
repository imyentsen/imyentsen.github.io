(function($) {
  "use strict"; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });



  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos -0.1 && $("#mainNav").offset().top > 800) {
      document.getElementById("mainNav").style.opacity = "1";
    } else if ($("#mainNav").offset().top > 800) {
      document.getElementById("mainNav").style.opacity = ".4";
    }
    prevScrollpos = currentScrollPos;
  }

  // Change Nav 
  //var navbarCollapse = function() {
  //  if ($("#mainNav").offset().top > 800) {
  //    $("#mainNav").addClass("navbar-shrink");
  //  } else {
  //    $("#mainNav").removeClass("navbar-shrink");
  //  }
  //};
  // Collapse now if page is not at top
  //navbarCollapse();
  // Collapse the navbar when page is scrolled
  //$(window).scroll(navbarCollapse);

  // Scroll-then-fixed Nav-Rfrd
  //var navRfrdCollapse = function() {
  //  if ($("#mainNav").offset().top > 200) {
  //    $("#nav-rfrd").addClass("nav-rfrd-fixed");
  //  } else {
  //    $("#nav-rfrd").removeClass("nav-rfrd-fixed");
  //  }
  //};
  // Collapse now if page is not at top
  //navRfrdCollapse();
  // Collapse the navbar when page is scrolled
  //$(window).scroll(navRfrdCollapse);


})(jQuery); // End of use strict
