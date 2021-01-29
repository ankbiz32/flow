$(function () {
    $(document).scroll(function () {
        var $nav = $("header");
        var $scrollHeight= 200 ;
        $nav.toggleClass('scrolled', $(this).scrollTop() > $scrollHeight);
    });
});