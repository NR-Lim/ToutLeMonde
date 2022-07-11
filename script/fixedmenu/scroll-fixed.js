$(function() {

    $(document).ready(function() {
  
      var scrollOffset = $('.fixedmenu').offset();
  
      $(window).scroll(function() {
        if ($(document).scrollTop() > scrollOffset.top) {
          $('.fixedmenu').addClass('scroll');
        }
        else {
          $('.fixedmenu').removeClass('scroll');
        }
      });
    });
  });
  