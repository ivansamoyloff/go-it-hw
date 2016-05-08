(function(){
    var Tabs = {
        addActiveClass: function($el){
        $el.addClass('active').siblings().removeClass('active');
    },
        showContent: function($el){
            var index =  $el.index();
            $('.content-block_item').eq(index).addClass('is-show').siblings().removeClass('is-show');
        },
        init:function() {
            $('.tabs_button').on('click', function () {
                Tabs.addActiveClass($(this));
                Tabs.showContent($(this));
            });
        }
    };
    Tabs.init();
})();