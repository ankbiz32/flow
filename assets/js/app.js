$(function () {
    $(document).scroll(function () {
        var $nav = $("header");
        var $scrollHeight= 200 ;
        $nav.toggleClass('scrolled', $(this).scrollTop() > $scrollHeight);
    });
});


// Feedbacks slider
$('.feedback-container').owlCarousel({
    nav:true,
    loop:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    navText: ["<i class='fas fa-caret-left'></i>","<i class='fas fa-caret-right'></i>"],
    responsive:{
        0:{
            margin:15,
            stagePadding:30,
            items:1
        },
        600:{
            margin:10,
            stagePadding:60,
            items:2
        },
        1000:{
            margin:15,
            stagePadding:80,
            items:2
        }
    }
})

var cls='';
$(".detail-btn").on("click", function() {
    cls = $(this).parent('.content').attr('class');
    $(this).parent('.content').addClass("open");
});

$(".close-detail-btn").on("click", function() {
    $(this).parent('.content').attr('class',cls);
});
