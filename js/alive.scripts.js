//////////////////////////////////////////////////////  //
//    EVENTS ON PAGE LOADED                             //
//////////////////////////////////////////////////////  //
$(window).load(function() { // makes sure the whole site is loaded
"use strict";

        ///// PRELOADER
        $('#loading').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $("body").removeClass("page-loading");
        return false;

});


//////////////////////////////////////////////////////  //
//    EVENTS ON DOCUMENT READY                          //
//////////////////////////////////////////////////////  //
$(document).ready(function(){
"use strict";
  
  ///// CAROUSELS
  
  ////////// TESTIMONIALS
  $("#carousel-testimonials").owlCarousel({
    loop: true,
    nav:true,
    navText: [
      '<div class="elegant arrow_carrot-left"></div>',
      '<div class="elegant arrow_carrot-right"></div>'
      ],
    items: 1
    });

  ////////// LOGOS
  $("#carousel-logos").owlCarousel({
    loop: true,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    items: 4,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        480:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
    });

  ////////// TEAM
  $("#carousel-team").owlCarousel({
      loop: false,
      nav:false,
      items: 8,
      dots: false,
    });

  ////////// GALLERY
  $("#carousel-gallery").owlCarousel({
    loop: true,
    nav:false,
    items: 4,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        350:{
            items:2,
            nav:true
        },
        560:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
    });

  ////////// FUN FACTS
  $("#carousel-funfacts").owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    items: 6,
    });
  
  ///// BUTTONS DEPRESSED FIX
  $(".btn").mouseup(function(){$(this).blur();});
  $("#navbar .navbar-nav *").mouseup(function(){$(this).blur();});
  
  ///// FUN FACTS COUNTUP
  var options = {
  useEasing : true,
  useGrouping : false,
  separator : ',',
  decimal : '.',
  prefix : '',
  suffix : ''
  }
  var count01 = new countUp("count01", 0, 290, 0, 3, options);
  var count02 = new countUp("count02", 0, 8, 0, 4, options);
  var count03 = new countUp("count03", 0, 17, 0, 5, options);
    var count04 = new countUp("count04", 0, 70, 0, 2.5, options);
    var count05 = new countUp("count05", 0, 3, 0, 1, options);
    var count06 = new countUp("count06", 0, 537, 0, 4, options);

    $('#count01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count01.start();} return false;});
    $('#count02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count02.start();} return false;});
    $('#count03').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count03.start();} return false;});
    $('#count04').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count04.start();} return false;});
    $('#count05').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count05.start();} return false;});
    $('#count06').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count06.start();} return false;});
  
  ///// DYNAMIC MODAL CONTENT
  $(function() {
    
    var gotoRegister = $("#gotoRegister");
    var gotoLogin = $("#gotoLogin");
    var gotoRemind = $("#gotoRemind");
    var login = $("#login");
    var remind = $("#remind");
    var register = $("#register");
    
    var clearMe1;
    var clearMe2;
    var clearMe2;
    
    function stopTimer() {
      clearTimeout(clearMe1);
      clearTimeout(clearMe2);
      clearTimeout(clearMe3);
    }
    
    gotoRegister.on("click", function() {  
      login.addClass("noopacity");
      remind.addClass("noopacity");
      
      clearMe1 = setTimeout(function (){
        login.addClass("nodisplay");
        remind.addClass("nodisplay");
        register.removeClass("nodisplay");
        gotoRegister.addClass("noopacity");
      }, 300); // delay
      
      clearMe2 = setTimeout(function (){
        register.removeClass("noopacity");
        gotoRegister.addClass("nodisplay");
        gotoLogin.removeClass("nodisplay");
      }, 350); // delay
      
      clearMe3 = setTimeout(function (){
        gotoLogin.removeClass("noopacity");
      }, 400); // delay
      
      stopTimer();
      
    });
    
   
    gotoLogin.on("click", function() {  
      register.addClass("noopacity");
      remind.addClass("noopacity");
      
      clearMe1 = setTimeout(function (){
        register.addClass("nodisplay");
        remind.addClass("nodisplay");
        login.removeClass("nodisplay");
        gotoLogin.addClass("noopacity");
      }, 300); // delay
      
      clearMe2 = setTimeout(function (){
        login.removeClass("noopacity");
        gotoLogin.addClass("nodisplay");
        gotoRegister.removeClass("nodisplay");
      }, 350); // delay
      
      clearMe3 = setTimeout(function (){
        gotoRegister.removeClass("noopacity");
      }, 400); // delay
      
      stopTimer();
      
    });
    
    
    gotoRemind.on("click", function() {  
      register.addClass("noopacity");
      login.addClass("noopacity");
      
      clearMe1 = setTimeout(function (){
        register.addClass("nodisplay");
        login.addClass("nodisplay");
        remind.removeClass("nodisplay");
        gotoLogin.addClass("noopacity");
      }, 300); // delay
      
      clearMe2 = setTimeout(function (){
        remind.removeClass("noopacity");
        gotoLogin.addClass("nodisplay");
        gotoRegister.removeClass("nodisplay");
      }, 350); // delay
      
      clearMe3 = setTimeout(function (){
        gotoRegister.removeClass("noopacity");
      }, 400); // delay
      
      stopTimer();
      
    });
    
    return false;
    
  });



//////////////////////////////////////////////////////  //
//    DOCUMENT READY: EVENTS ON MOBILE                  //
//////////////////////////////////////////////////////  //
  if ($(window).width() < 768) {
    
    ///// DON'T SCROLL ON TABS
    $('#navbar .nav a').filter(":not(#tabs *)").on('click', function(){
      $("#navbar-header .navbar-toggle").on("click");
      return false;
    });
    
  } // EVENTS ON MOBILE ENDS HERE


//////////////////////////////////////////////////////  //
//    DOCUMENT READY: EVENTS ON DESKTOP                 //
//////////////////////////////////////////////////////  // 
  if ($(window).width() > 768) {
    
    ///// SCROLL ANIMATIONS
    $('.anim-from-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeInRight');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    
    $('.anim-from-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeInLeft');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    
    $('.anim-fade').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeIn');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-fade-down').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeInDown');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-fade-up').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeInUp');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceIn');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceInLeft');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceInRight');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce-down').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceInDown');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce-up').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceInUp');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-zoom-down').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated zoomInDown');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-zoom-up').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated zoomInUp');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
  } // EVENTS ON DESKTOP ENDS HERE
  
}); // DOCUMENT READY ENDS HERE



