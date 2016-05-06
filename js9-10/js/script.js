$(document).ready(function() {
    jQuery('.jcarousel').jcarousel();

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
    $('.jcarousel').jcarousel({ wrap: 'circular' });

    var $links = $('.dropdown');
    $links.on('mouseenter', function(){
        $(this).find('.submenu').first().stop(true, true).slideDown();
    });

    $links.on('mouseleave', function(){
        $(this).find('.submenu').first().slideUp();
    });
    $(function() {

        $('.input1, select').styler();

    });
});

