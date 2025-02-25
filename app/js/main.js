
$(function(){
    $('.service-item-block').on('click', function() {
        $(this).children('.service-item-block-btn').toggleClass('rotate');
        $(this).children('.service-item-block-btn').parent().next('.service-item-price-list').toggleClass('display-none');

        let active1= $('#1').attr('class');

        let active2= $('#2').attr('class');

        let active3= $('#3').attr('class');

        if (active1 == 'service-item-block-btn rotate' || active2 == 'service-item-block-btn rotate' || active3 == 'service-item-block-btn rotate' ) {
                    $('.section-block-img').addClass('img-price-active');
                } else {
                    $('.section-block-img').removeClass('img-price-active');
                    $('.section-block-img').addClass('no-price');
                }
    })
})

$(function(){
    $(window).on('load resize', sliderSize);

    let windowSize = $(window).width();
    
    function sliderSize(){
        if (windowSize <= '600'){
                $('.slider-carousel').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                  });
            
        } else if (windowSize >= '601' && windowSize <= '900') {
                $('.slider-carousel').slick({
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                  });
    
        } else if (windowSize >= '901') {
                $('.slider-carousel').slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                  });
        }
    }
    
});

$(function(){
    $('.slider-carousel, .gallery-item-pic').magnificPopup({
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

$(function() {

        $(".scroll").on("click", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top,
                offset = $('header').innerHeight();
            $('body,html').animate({ scrollTop: top - offset }, 1500);
        });

});