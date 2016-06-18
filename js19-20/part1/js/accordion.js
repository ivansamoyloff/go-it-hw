$(function() {

    var $panel1 = $('.1').on('click',function(){
        var $i = $panel1.find('.ico');
        $('.act').addClass('normal').removeClass('act');
        $i.removeClass('act').addClass('normal');
        $('.active').removeClass('active').slideUp();
        $panel1.removeClass('normal').addClass('act');
        $i.addClass('act').removeClass('normal');
        $panel1.next().addClass('active').slideDown();
    });

    var $panel2 = $('.2').on('click',function(){
        var $i = $panel2.find('.ico');
        $('.act').addClass('normal').removeClass('act');
        $i.removeClass('act').addClass('normal');
        $('.active').removeClass('active').slideUp();
        $panel2.removeClass('normal').addClass('act');
        $i.addClass('act').removeClass('normal');
        $panel2.next().addClass('active').slideDown();
    });

    var $panel3 = $('.3').on('click',function(){
        var $i = $panel3.find('.ico');
        $('.act').addClass('normal').removeClass('act');
        $i.removeClass('act').addClass('normal');
        $('.active').removeClass('active').slideUp();
        $panel3.removeClass('normal').addClass('act');
        $i.addClass('act').removeClass('normal');
        $panel3.next().addClass('active').slideDown();
    });

    var $panel4 = $('.4').on('click',function(){
        var $i = $panel4.find('.ico');
        $('.act').addClass('normal').removeClass('act');
        $i.removeClass('act').addClass('normal');
        $('.active').removeClass('active').slideUp();
        $panel4.removeClass('normal').addClass('act');
        $i.addClass('act').removeClass('normal');
        $panel4.next().addClass('active').slideDown();
    });

});