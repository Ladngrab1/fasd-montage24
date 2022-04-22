$(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true
    });
});
/*headerANIMATION*/
var header = $(".header");
var navbar = $(".navbar");
var logo_icon = $(".logo_icon");
var menu_list_link = $(".menu_list-link");
var scrollChange = 100;
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('active') & navbar.addClass('active') & logo_icon.addClass('active') & menu_list_link.addClass('active');
    } else {
        header.removeClass("active") & navbar.removeClass('active') & logo_icon.removeClass('active') & menu_list_link.removeClass('active');
    }
});
/*headerANIMATION*/

// burger
$(document).ready(function () {
    $(".burger").click(function () {
        $(".menu_list").toggleClass("toggle")
            & $(".menu_list-link").toggleClass("toggle")
            & $("body").toggleClass("toggle")
            & $(".line1").toggleClass("toggle")
            & $(".line2").toggleClass("toggle")
            & $(".line3").toggleClass("toggle")
            ; return false;
    });
    $(document).ready(function () {
        $(".menu_list-link").click(function () {
            $(".menu_list").removeClass("toggle")
                & $(".menu_list-link").removeClass("toggle")
                & $("body").removeClass("toggle")
                & $(".line1").removeClass("toggle")
                & $(".line2").removeClass("toggle")
                & $(".line3").removeClass("toggle")
        })
    });
});
// burger