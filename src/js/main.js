;(function($){
  "use strict";

  /*-------------------------------------------------------------------------------
  Navbar
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
  function navbarFixed(){
    if ( $('.header_area').length ){
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll){
          $(".header_area").addClass("navbar_fixed");
        } else {
          $(".header_area").removeClass("navbar_fixed");
        }
      });
    };
  };
  navbarFixed();


  /*--------- WOW js-----------*/
  function wowAnimation(){
    new WOW({
      offset: -50,
      mobile: true
    }).init()
  }
  wowAnimation()

  var $animation_elements = $('.scroll_animation');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }


  if($(window).width() > 576){
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
  }


  function tab_hover(){
    var tab = $(".price_tab");
    if($(window).width() > 450){
      if($(tab).length>0 ){
        tab.append('<li class="hover_bg"></li>');
        if($('.price_tab li a').hasClass('active_hover')){
          var pLeft = $('.price_tab li a.active_hover').position().left,
          pWidth = $('.price_tab li a.active_hover').css('width');
          $('.hover_bg').css({
            left : pLeft,
            width: pWidth
          })
        }
        $('.price_tab li a').on('click', function() {
          $('.price_tab li a').removeClass('active_hover');
          $(this).addClass('active_hover');
          var pLeft = $('.price_tab li a.active_hover').position().left,
          pWidth = $('.price_tab li a.active_hover').css('width');
          $('.hover_bg').css({
            left : pLeft,
            width: pWidth
          })
        })
      }
    }

  }
  tab_hover();

  // MAILCHIMP
  if ($(".mailchimp").length > 0)
  {
    $(".mailchimp").ajaxChimp({
      callback: mailchimpCallback,
      url: "http://droitlab.us15.list-manage.com/subscribe/post?u=0fa954b1e090d4269d21abef5&id=a80b5aedb0" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
    });
  }
  $(".memail").on("focus", function ()
  {
    $(".mchimp-errmessage").fadeOut();
    $(".mchimp-sucmessage").fadeOut();
  });
  $(".memail").on("keydown", function ()
  {
    $(".mchimp-errmessage").fadeOut();
    $(".mchimp-sucmessage").fadeOut();
  });
  $(".memail").on("click", function ()
  {
    $(".memail").val("");
  });
  function mailchimpCallback(resp)
  {
    if (resp.result === "success") {
      $(".mchimp-errmessage").html(resp.msg).fadeIn(1000);
      $(".mchimp-sucmessage").fadeOut(500);
    } else if (resp.result === "error") {
      $(".mchimp-errmessage").html(resp.msg).fadeIn(1000);
    }
  }

  /*------------- preloader js --------------*/


  function loader(){
    $(window).on('load', function() {
      $('#ctn-preloader').addClass('loaded');
      // Una vez haya terminado el preloader aparezca el scroll

      if ($('#ctn-preloader').hasClass('loaded')) {
        // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
        $('#preloader').delay(900).queue(function () {
          $(this).remove();
        });
      }
    });
  }
  loader();

})(jQuery)
