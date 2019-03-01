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
            offset: 100,          
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
    
    
    
    /*===========Start Service Slider js ===========*/
    function serviceSlider(){
        var service_slider = $(".service_carousel");
        if( service_slider.length ){
            service_slider.owlCarousel({
                loop:true,
                margin:15,
                items: 4,
                autoplay: true,
                smartSpeed: 2000,
                responsiveClass:true,
                nav: true,
                dots: false,
                stagePadding: 100,
                navText: [,'<i class="ti-arrow-left"></i>'],
                responsive:{
                    0:{
                        items:1, 
                        stagePadding: 0,
                    },
                    578:{
                        items:2, 
                        stagePadding: 0,
                    },
                    992:{
                        items:3,
                        stagePadding: 0,
                    }, 
                    1200:{
                        items:3,   
                    }
                },
            })
        }
    }
    serviceSlider();
    /*===========End Service Slider js ===========*/
    
    /*===========Start about_img_slider js ===========*/
    function aboutSlider(){
        var reviews_slider2 = $(".about_img_slider");
        if( reviews_slider2.length ){
            reviews_slider2.owlCarousel({
                loop:true,
                margin:0,
                items: 1,
                nav:false,
                autoplay: false,
                smartSpeed: 2000,
                responsiveClass:true,
            })
        }
    }
    aboutSlider();
    /*=========== End about_img_slider js ===========*/
    
    
    /*===========Start feedback_slider js ===========*/
    function feedbackSlider(){
        var feedback_slider = $(".feedback_slider");
        if( feedback_slider.length ){
            feedback_slider.owlCarousel({
                loop:true,
                margin:20,
                items: 3,
                nav:false,
                center: true,
                autoplay: false,
                smartSpeed: 2000,
                stagePadding: 0,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    776:{
                        items:2, 
                    },
                    1199:{
                        items:3,   
                    }
                },
            })
        }
    }
    feedbackSlider();
    /*=========== End feedback_slider js ===========*/
    
    /*===========Start Service Slider js ===========*/
    function testimonialSlider(){
        var testimonialSlider = $(".testimonial_slider");
        if( testimonialSlider.length ){
            testimonialSlider.owlCarousel({
                loop:true,
                margin:10,
                items: 1,
                autoplay: true,
                smartSpeed: 2500,
                autoplaySpeed: false,
                responsiveClass:true,
                nav: true,
                dot: true,
                stagePadding: 0,
                navText: ['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>'],
                navContainer: '.agency_testimonial_info'
            })
        }
    }
    testimonialSlider();
    /*===========End Service Slider js ===========*/
    
    /*===========Start app_testimonial_slider js ===========*/
    function app_testimonialSlider(){
        var app_testimonialSlider = $(".app_testimonial_slider");
        if( app_testimonialSlider.length ){
            app_testimonialSlider.owlCarousel({
                loop:true,
                margin:10,
                items: 1,
                autoplay: true,
                smartSpeed: 2000,
                autoplaySpeed: true,
                responsiveClass:true,
                nav: true,
                dot: true,
                navText: ['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>'],
                navContainer: '.nav_container'
            })
        }
    }
    app_testimonialSlider();
    /*===========End app_testimonial_slider js ===========*/
    
    
    /*===========Start app_testimonial_slider js ===========*/
    function appScreenshot(){
        var app_screenshotSlider = $(".app_screenshot_slider");
        if( app_screenshotSlider.length ){
            app_screenshotSlider.owlCarousel({
                loop:true,
                margin:10,
                items: 5,
                autoplay: false,
                smartSpeed: 2000,
                responsiveClass:true,
                nav: true,
                dots: false,
                navText: ['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>'],
                navContainer: '.app_screenshot_slider',
                responsiveClass:true,
                responsive:{
                    0:{
                        items: 1
                    },
                    650:{
                        items:2, 
                    },
                    776:{
                        items:4, 
                    },
                    1199:{
                        items:5,   
                    },
                },
            })
        }
    }
    appScreenshot();
    /*===========End app_testimonial_slider js ===========*/
    
    /*===========Start app_testimonial_slider js ===========*/
    function prslider(){
        var p_Slider = $(".pr_slider");
        if( p_Slider.length ){
            p_Slider.owlCarousel({
                loop:true,
                margin:10,
                items: 1,
                autoplay: true,
                smartSpeed: 1000,
                responsiveClass:true,
                nav: true,
                dots: false,
                navText: ['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
                navContainer: '.pr_slider'
            })
        }
    }
    prslider();
    /*===========End app_testimonial_slider js ===========*/
    
    
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
    
    if($('.selectpickers').length > 0){
        $('.selectpickers').niceSelect();
    }
    
    
    function pr_slider(){
        var pr_image = $('.pr_image')
        if(pr_image.length){
            pr_image.owlCarousel({
                loop: true,
                items: 1,
                autoplay: true,
                dots: false,
                thumbs: true,
                thumbImage: true,
            });
        }
    }
    pr_slider()
    
    $('.ar_top').on('click', function () {
        var getID = $(this).next().attr('id');
        var result = document.getElementById(getID);
        var qty = result.value;
        $('.proceed_to_checkout .update-cart').removeAttr('disabled');
        if( !isNaN( qty ) ) {
            result.value++;
        }else{
            return false;
        }
    });

    $('.ar_down').on('click', function () {
        var getID = $(this).prev().attr('id');
        var result = document.getElementById(getID);
        var qty = result.value;
        $('.proceed_to_checkout .update-cart').removeAttr('disabled');
        if( !isNaN( qty ) && qty > 0 ) {
            result.value--;
        }else {
            return false;
        }
    });
    
    
    /*===========Portfolio isotope js===========*/
    function portfolioMasonry(){
        var portfolio = $("#work-portfolio");
        if( portfolio.length ){
            portfolio.imagesLoaded( function() {
              // images have loaded
                // Activate isotope in container
                portfolio.isotope({
                    itemSelector: ".portfolio_item",
                    layoutMode: 'masonry',
                    filter:"*",
                    animationOptions :{
                        duration:1000
                    },
                    hiddenStyle: {
                        opacity: 0,
                        transform: 'scale(.4)rotate(60deg)',
                    },
                    visibleStyle: {
                        opacity: 1,
                        transform: 'scale(1)rotate(0deg)',
                    },
                    stagger: 0,
                    transitionDuration: '0.9s',
                    masonry: {
                       
                    }
                });

                // Add isotope click function
                $("#portfolio_filter div").on('click',function(){
                    $("#portfolio_filter div").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    portfolio.isotope({
                        filter: selector,
                        animationOptions: {
                          animationDuration: 750,
                          easing: 'linear',
                          queue: false
                      }
                    })
                    return false;
                })
            })
        }
    }
    portfolioMasonry();
    
    
    /*===========Portfolio isotope js===========*/
    function blogMasonry(){
        var blog = $("#blog_masonry")
        if( blog.length ){
            blog.imagesLoaded( function() {
                blog.isotope({
                    layoutMode: 'masonry',
                });
            })
        }
    }
    blogMasonry();

    
    /*--------------- End popup-js--------*/
    function popupGallery(){
        if ($(".img_popup,.image-link").length) {
            $(".img_popup,.image-link").each(function(){
                $(".img_popup,.image-link").magnificPopup({
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    removalDelay: 300,
                    mainClass:  'mfp-with-zoom mfp-img-mobile',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image,
                    }
                });
            })
        }
        if($('.popup-youtube').length){
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                mainClass:  'mfp-with-zoom mfp-img-mobile',
            });
        }
    }
    popupGallery();
    
    if ( $('#mapBox').length ){
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var $marker = $('#mapBox').data('marker');
        var $info = $('#mapBox').data('info');
        var $markerLat = $('#mapBox').data('mlat');
        var $markerLon = $('#mapBox').data('mlon');
        var map = new GMaps({
        el: '#mapBox',
        lat: $lat,
        lng: $lon,
        scrollwheel: false,
        scaleControl: true,
        streetViewControl: false,
        panControl: true,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        zoom: $zoom,
        });
        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            icon: $marker,    
            infoWindow: {
              content: $info
            }
        })
    }
    
    
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