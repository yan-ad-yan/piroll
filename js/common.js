$(document).ready(function () {
    
    $(window).ready(function() { 
        $(".loader-inner").fadeOut(); 
        $(".loader").delay(400).fadeOut("slow");
        setTimeout(function(){new WOW().init();}, 500);  
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
    });


    $('.header-nav__link, .header-btn').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500);
        e.preventDefault();
    });


    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 100) {
                $('.totop').fadeIn();
            } else {
                $('.totop').fadeOut();
            }
        });
        $('.totop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });


    $("[data-fancybox]").fancybox({
        transitionEffect: "slide",
        loop: true,
        slideshow: true,
        thumbs: {
            showOnStart: true
        }
    });

    $('.humburger').on('click', function () {
        $(this).toggleClass('humburger_active');
        $('body').toggleClass('hide-scroll');
    })



    $('.header-nav__link').on('click', function () {
        $(this).toggleClass('humburger_active');
        if ($(window).width() < 993) {
            $(".humburger").trigger("click");
        }
    })



    $('.humburger').on('click', function (e) {
        e.preventDefault();
        $('.header-nav').slideToggle(400);
    });


    var paramsClientsList = {
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };




    $(document).on('click', '.js-videoPoster', function (e) {
        e.preventDefault();
        var poster = $(this);
        var wrapper = poster.closest('.js-videoWrapper');
        videoPlay(wrapper);
    });

    function videoPlay(wrapper) {
        var iframe = wrapper.find('.js-videoIframe');
        var src = iframe.data('src');
        wrapper.addClass('videoWrapperActive');
        iframe.attr('src', src);
    };



    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.header').css('background-position', '50% ' + (-scrolled * 0.2) + 'px');
    };

    parallax();

    $(window).on('scroll', function (e) {
        parallax();
    });



    function checkWidth() {
        if ($(window).width() < 769) {
            $('.clients__list').slick(paramsClientsList);
        } else {
            $('.clients__list').slick('unslick');
        }
    };

    checkWidth();



    // $(window).on('resize load', function (e) {
    //     checkWidth();
    // });


});