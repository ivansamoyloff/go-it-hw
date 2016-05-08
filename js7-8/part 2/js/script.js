$(document).ready(function(){

    var $input = $('.form__filed');
    var $showAll = $('.show_all');

    $input.on('mouseenter', showTooltip);
    $input.on('mouseleave', hideTooltip);
    $showAll.on('click', showAllTooltip);

    function showTooltip() {
        $(this).next('.tooltip').fadeIn();
    }
    function hideTooltip(){
        $(this).next('.tooltip').fadeOut(200);
    }
    function showAllTooltip() {
       var $tooltipAll = $("body").find('.tooltip');
        $tooltipAll.fadeIn();
        $tooltipAll.fadeOut(3000);
    }

});