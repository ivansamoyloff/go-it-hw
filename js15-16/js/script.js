$(document).ready(function(){
    function search () {
        var ser = $('input').val();

        $.ajax({
            url: 'http://api.riffsy.com/v1/search?tag='+ser+'&limit=10',
            success: function (data) {
                $('.logo').hide();
                for (var i = 0; i < data.results.length; i++) {
                    $('#results').append('<img src="' + data.results[i].url + '">')
                }
            }
        });
    }

    $('#search').on('keyup', function (event) {
        if(event.keyCode == 13) {
            search();
        }
    });


    $('.btn').on('click', search);
});
