/* ---------------------------------------------------------------------------
------- TABLE OF JS CONTENTS -------------------------------------------------
------------------------------------------------------------------------------

   ----------------------------------------
   ------- JS INDEX 
   ----------------------------------------
      01. Scroll To Top
      02. Smooth Scroll
      03. WOW Js
      04. NiceSelect
      05. Number Input
      06. Mean-menu Navbar
      07. Sticky Menu 
      08. CounterUp
      09. Isotope Js
      10. Fancy Box
      11. Search Box
      12. Info bar
      13. Feather Icons
      14. OwlCarousel for home page 
      15. Postbox Item Gallery
      16. Gallery 01
      17. Testimonial Style 02
      18. Testimonial Style 03
      19. Progress-skill
      20. Preloader Js

-----------------------------------------------------------------------------*/

(function ($) {
  "use strict";

  //======================================================|
  //===| 01. Scroll To Top
  //======================================================|
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1000) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
  $(".scrollToTop").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      250,
    );
    return false;
  });

  //======================================================|
  //===| 02. Smooth Scroll
  //======================================================|
  $("a.smooth-scroll").on("click", function (event) {
    event.preventDefault();
    var section_smooth = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section_smooth).offset().top,
      },
      1250,
      "easeInOutExpo",
    );
  });

  //======================================================|
  //===| 03. WOW Js
  //======================================================|
  new WOW().init();

  //======================================================|
  //===| 04. NiceSelect
  //======================================================|
  //   $("select").niceSelect();
  // update for select
  $("select:not(.react-safe)").niceSelect();

  //======================================================|
  //===| 05. Number Input
  //======================================================|
  jQuery(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fas fa-plus"></i></div><div class="quantity-button quantity-down"><i class="fas fa-minus"></i></div></div>',
  ).insertAfter(".quantity input");
  jQuery(".quantity").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");
    btnUp.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    btnDown.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  //======================================================|
  //===| 06. Mean-menu Navbar
  //======================================================|
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
  });

  $(document).on("click", ".sub_menu li a", function () {
    const menu = $(this).closest(".sub_menu");
    menu.hide();
    setTimeout(() => menu.show(), 300); // 1 seconds
  });

  //======================================================|
  //===| 07. Sticky Menu
  //======================================================|
  // if (screen.width >= 992) {
  //    $(document).on("scroll", function (e) {
  //       var scrollPos = $(this).scrollTop();
  //       if (scrollPos > 400) {
  //          $(".header__menu-wrapper").addClass("menu_sticky");
  //          $(".header__menu-wrapper").addClass("animated");
  //          $(".header__menu-wrapper").addClass("slideInDown");
  //       } else {
  //          $(".header__menu-wrapper").removeClass("menu_sticky");
  //          $(".header__menu-wrapper").removeClass("animated");
  //          $(".header__menu-wrapper").removeClass("slideInDown");
  //       }
  //    });
  // }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".home1").addClass("sticky1");
    } else {
      $(".home1").removeClass("sticky1");
    }
  });

  //======================================================|
  //===| 08. CounterUp
  //======================================================|
  $(".counter").counterUp({
    delay: 10,
    time: 1500,
  });

  //======================================================|
  //===| 09. Isotope Js
  //======================================================|
  $(".your_class_name li").on("click", function () {
    $(".your_class_name li").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    $("#isotope-container").isotope({
      filter: selector,
    });
  });
  $(window).on("load", function () {
    $("#isotope-container").isotope();
  });

  //======================================================|
  //===| 10. Fancy Box
  //======================================================|
  $('[data-fancybox="gallery_1"]').fancybox({
    loop: true,
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close",
    ],
    animationEffect: "zoom-in-out",
    transitionEffect: "circular",
  });

  //======================================================|
  //===| 11. Search Box
  //======================================================|

  // if ($(".search_box_container").length) {
  //    var searchToggleBtn = $(".search_btn");
  //    var searchContent = $(".search_form");
  //    var body = $("body");

  //    searchToggleBtn.on("click", function (e) {
  //       searchContent.toggleClass("search_form_toggle");
  //       e.stopPropagation();
  //    });

  //    body
  //       .on("click", function () {
  //          searchContent.removeClass("search_form_toggle");
  //       })
  //       .find(searchContent)
  //       .on("click", function (e) {
  //          e.stopPropagation();
  //       });
  // }

  //======================================================|
  //===| 12. Info bar
  //======================================================|
  $(".extra_info_btn").on("click", function () {
    $(".extra_info").addClass("extra_info_open");
  });

  $(".extra_info_close").on("click", function () {
    $(".extra_info").removeClass("extra_info_open");
  });

  //======================================================|
  //===| 13. Feather Icons
  //======================================================|
  function featherIcon() {
    if (typeof feather !== "undefined") {
      feather.replace();
    }
  }
  featherIcon();

  //======================================================|
  //===| 14. OwlCarousel for home page
  //======================================================|
  function homeSlider() {
    var slider = $(".slider1__active");
    slider.owlCarousel({
      loop: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      autoplay: true,
      nav: true,
      dots: true,
      navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>',
      ],
      smartSpeed: 450,
      margin: 0,
      stagePadding: 0,
      autoplayTimeout: 8000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    slider.on("translate.owl.carousel", function () {
      var layer = $("[data-animation]");
      layer.each(function () {
        var slider_animation = $(this).data("animation");
        $(this)
          .removeClass("animated " + slider_animation)
          .css("opacity", "0");
      });
    });
    $("[data-delay]").each(function () {
      var animation_delay = $(this).data("delay");
      $(this).css("animation-delay", animation_delay);
    });
    $("[data-duration]").each(function () {
      var animation_dutation = $(this).data("duration");
      $(this).css("animation-duration", animation_dutation);
    });
    slider.on("translated.owl.carousel", function () {
      var layer = slider.find(".owl-item.active").find("[data-animation]");
      layer.each(function () {
        var slider_animation = $(this).data("animation");
        $(this)
          .addClass("animated " + slider_animation)
          .css("opacity", "1");
      });
    });
  }
  homeSlider();

  //======================================================|
  //===| 15. Postbox Item Gallery
  //======================================================|
  $(".postbox_w1__item__slider").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    margin: 30,
    autoplayTimeout: 8000,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      991: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  //======================================================|
  //===| 16. Gallery 01
  //======================================================|
  function gallery1__slider() {
    $(".gallery1__active").owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 400,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      margin: 40,
      dots: false,
      nav: false,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1199: {
          items: 2,
        },
        1400: {
          items: 3,
        },
      },
    });
  }
  gallery1__slider();

  //======================================================|
  //===| 17. Testimonial Style 02
  //======================================================|
  function testimonial2__slider() {
    $(".testimonial2__active").owlCarousel({
      loop: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      autoplay: true,
      smartSpeed: 400,
      autoplayTimeout: 10000,
      autoplayHoverPause: true,
      margin: 0,
      dots: false,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1199: {
          items: 1,
        },
        1400: {
          items: 1,
        },
      },
    });
  }
  testimonial2__slider();

  //======================================================|
  //===| 18. Testimonial Style 03
  //======================================================|
  function testimonial3__slider() {
    $(".testimonial3__active").owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 400,
      autoplayTimeout: 10000,
      autoplayHoverPause: true,
      margin: 5,
      dots: true,
      nav: false,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1199: {
          items: 1,
        },
        1400: {
          items: 1,
        },
      },
    });
  }
  testimonial3__slider();

  //======================================================|
  //===| 19. Progress-skill
  //======================================================|
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          2000,
        );
      });
      this.destroy();
    },
    {
      offset: "bottom-in-view",
    },
  );

  //======================================================|
  //===| Window Load Function
  //======================================================|
  $(window).on("load", function () {
    //============================================|
    //===| 20. Preloader Js
    $(".preloader").delay(100).fadeOut("slow");
  });
})(jQuery);
