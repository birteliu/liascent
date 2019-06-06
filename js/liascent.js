//向下捲動
$(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 400) {
            $('.go-top').css("opacity", "1");
        } else {
            $('.go-top').css("opacity", "0");
        }
    });
});