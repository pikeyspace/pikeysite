$('.slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true
  });



// Tabs
// (function($) {
//     $(function() {
//         $("ul.tabs__caption").on("click", "li:not(.active)", function() {
//             $(this)
//                 .addClass("active")
//                 .siblings()
//                 .removeClass("active")
//                 .closest("div.tabs")
//                 .find("div.tabs__content")
//                 .removeClass("active")
//                 .eq($(this).index())
//                 .addClass("active");
//         });
//     });
// })(jQuery);




$(function() {
    $('.burger').on('click', function() {
        $(this).toggleClass('active');
        $('body').toggleClass('stop-scroll');
        $('.menu').toggleClass('visible');
    })
    $('.menu-link, .menu-list, .book, .balloon').on('click', function() {
        $('.burger').removeClass('active');
        $('.menu').removeClass('visible');
        $('body').removeClass('stop-scroll');

    })
    $('.team-unit__info_link a').on('click', function(){
        $('body').addClass('stop-scroll');
        $('.header .wrapper').addClass('display-none');
    })
    $('.closepopup').on('click', function(){
        $('body').removeClass('stop-scroll');
        $('.header .wrapper').removeClass('display-none');
    })

    $('.popup-open').on('click', function() {
        $('body').addClass('stop-scroll');
    })

})


$(function() {

        $(".scroll").on("click", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top,
                offset = $('header').innerHeight();
            $('body,html').animate({ scrollTop: top - offset }, 1500);
        });

});
            
$(function() {
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
    });
});


// Slider for review
$(function() {
    $('.comment-slider').slick({
        dots: false,
        speed: 4000,
        autoplay: true,
        cssEase: 'linear',
        autoplaySpeed: 3000,
        prevArrow: false,
        nextArrow: false
    });
});

$(function() {
    $('.btn-see-service').on('click', function() {
        $(this).toggleClass('service-item-activ');
        $(this).parent().next('.service-item__text').toggleClass('service-item__text_active');
    })
})
