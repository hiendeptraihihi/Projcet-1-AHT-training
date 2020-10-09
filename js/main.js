$(document).ready(function () {
    $('.carousel').on('slid.bs.carousel', function () {
        $('.carousel-item').each(function (){
            if ($(this).hasClass('active')) {
                $(this).find('.content__title').addClass('transform-title');
                $(this).find('.content__summary').addClass('transform-summary');
                $(this).find('.content__button').addClass('transform-button');
            } else {
                $(this).find('.content__title').removeClass('transform-title');
                $(this).find('.content__summary').removeClass('transform-summary');
                $(this).find('.content__button').removeClass('transform-button');
            }
        });
    });    
    var sec = $('.sec').html();
    var min = $('.min').html();
    var hour = $('.hour').html();
    var day = $('.day').html();
    setInterval(function (){
        sec -= 1;
        if (sec == -1) {
            sec = 59;
            min -= 1;
            if (min == -1) {
                min = 59;
                hour -= 1;
                if (hour == -1) {
                    hour = 23;
                    day -= 1;
                }
            }
        }
        $('.sec').html(sec);
        $('.min').html(min);
        $('.hour').html(hour);
        $('.day').html(day);
    }, 1000);
    // $(window).scroll(function () { 
    //     if ($(this).scrollTop()>215) {
    //         $('.menu').addClass('fixed');
    //         $('.menu').slideDown();
    //     } else {
    //         $('.menu').removeClass('fixed');
    //         $('.menu').slideUp(1);
    //         $('.menu').addClass('d-block');
    //     }
    // });
    $('.menu__left--title').click(function (){
        $('.content-menu-toggle').slideToggle();
    });
    $('.item-header__icon').each(function (){
        $(this).click(function (){
            $('.item-header__icon').toggleClass('d-none');
            $('.sl-language').toggleClass('d-none');
            $(this).removeClass('d-none');
            $(this).parent().find('.item-header__content').toggleClass('d-block');
        });
    });
});