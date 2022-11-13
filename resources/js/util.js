jQuery('#aboutMeMoreBtn').on('click', function() {
    jQuery(this).hide();
    jQuery('#aboutMeMore').toggleClass('about-me-more-visible');
});

// carrousel
jQuery(document).ready(function($) {
    $('.carrouselScript').slick({
        dots: true,
        autoplaySpeed: 5000,
        speed: 300,
        infinite: false,
        arrows: false,
        slidesToScroll: 2,
        slidesToShow: 2,
        swipe: true,
        draggable: true,
        touchMove: true,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }],
        pauseOnDotsHover: true,
        customPaging: function(slider, i) {
            return '<i type="button" style="color:#2e353e;" class="fa fa-circle-o" data-role="none"></i>';
        },
    });
});