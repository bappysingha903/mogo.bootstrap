$(function () {






    /*=================================
           .......STICKY MENU JS........
    ===================================*/

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $(".menu_bar").removeClass("sticky");
        } else {
            $(".menu_bar").addClass("sticky");
        }
    });

    /*=================================
           .......SMOOTH SCROLL........
    ===================================*/


    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true,
    });


    /*=================================
           .......SLIDER JS........
    ===================================*/

    $('.slide').slick({
        arrow: true,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: '.angle_left',
        nextArrow: '.angle_right',
    });






    /*=================================
          .......COUNTER JS........
    ===================================*/

    $('.mycount').counterUp({
        delay: 20,
        time: 2000
    });





    /*=================================
          .......SCROLL JS........
    ===================================*/

    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back_to_top').fadeIn(200)
        } else {
            $('.back_to_top').fadeOut(200)
        }
    });




    /*=================================
        ..CLICK AND BACK SCROLL JS..
    ===================================*/

    $('.back_to_top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
    });





    /*=================================
        .......PRELOADER JS.......
    ===================================*/

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });



    /*=================================
         .......venobox js.......
     ===================================*/

    $('.gell_img').venobox({
        framewidth: '400px',
        frameheight: '300px',
        border: '1px',
        bgcolor: '#adadad',
        spinner: 'three-bounce'

    });




});
