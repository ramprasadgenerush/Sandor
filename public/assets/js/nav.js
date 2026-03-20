(function ($) {
    "use strict";





    $(document).ready(function () {

        /*==== header Section Start here =====*/
        $("ul>li>ul").parent("li").addClass("menu-item-has-children");
        // drop down menu width overflow problem fix
        $('ul').parent('li').on('hover', function () {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({
                    left: newpos
                });
            }
        });
        $('.menu li a').on('click', function (e) {
            var element = $(this).parent('li');
            if (screen.width < 1200) {
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('li').removeClass('open');
                    element.find('ul').slideUp(400, "swing");
                } else {
                    element.addClass('open');
                    element.children('ul').slideDown(400, "swing");
                    element.siblings('li').children('ul').slideUp(400, "swing");
                    element.siblings('li').removeClass('open');
                    element.siblings('li').find('li').removeClass('open');
                    element.siblings('li').find('ul').slideUp(400, "swing");
                }
            }
        })

        $('.header__ellepsis').on('click', function (e) {
            var element = $('.header__top');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.slideUp(400, "swing");
                $('.overlayTwo').removeClass('active');
            } else {
                element.addClass('open');
                element.slideDown(400, "swing");
                $('.overlayTwo').addClass('active');
            }
        });
        $('.header__bar').on('click', function () {
            $(this).toggleClass('active');
            $('.menu').toggleClass('active');
        })


        //Header
        // var fixed_top = $("header");
        // $(window).on('scroll', function () {
        //     if ($(this).scrollTop() > 100) {
        //         fixed_top.addClass("header-fixed");
        //     } else {
        //         fixed_top.removeClass("header-fixed");
        //     }
        // });npm run dev

        // $(window).scroll(function () {
        //     if ($(this).scrollTop() > 200) {
        //         $('.header').addClass('sticky1');
        //     } else {
        //         $('.header').removeClass('sticky1');
        //     }
        // });


        // $(document).on("click", ".menu ul li ul li a", function () {
        //     const menu = $(this).closest(".menu ul li ul");
        //     menu.hide();
        //     setTimeout(() => menu.show(), 300); 
        // });

        $(document).on("click", ".menu ul li ul li a", function () {
            if (window.innerWidth < 992) return; // mobile & tablet → skip

            const menu = $(this).closest(".menu ul li ul");
            menu.hide();
            setTimeout(() => menu.show(), 300);
        });


        
        $(document).ready(function () {
            $(".header__bottom .area .menu ul li ul li a").click(function () {
                $(".active").removeClass("active");
            });
        });

        $(document).ready(function () {
            $(".cls").click(function () {
                $(".active").removeClass("active");
            });
        });




        /*==== header Section End here =====*/

        // scroll up start here
        $(function () {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 400) {
                    $('.scrollToTop').css({
                        'bottom': '2%',
                        'opacity': '1',
                        'transition': 'all .5s ease'
                    });
                } else {
                    $('.scrollToTop').css({
                        'bottom': '-30%',
                        'opacity': '0',
                        'transition': 'all .5s ease'
                    })
                }
            });



        });





    });


}(jQuery));