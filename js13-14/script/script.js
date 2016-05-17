"use strict";

var MyTest = {
    init: function() {
    this.createTest(this.questions, this.answers)
    },

    questions: ['2+2 = ', '6*8 = ','7+4 = '],
    answers: [['4','5','6'],
                ['18','32','48'],
                ['12','11','10']
    ],

    createTest: function(questions, answers){
        var form = document.querySelector('body');
        form.innerHTML += '<h2>'+'Тест по программированию'+'</h2>'+ '<br>' +'<form>'+'<form>';

        var container = document.querySelector('form');

        for (var i = 0; i<questions.length; i++){
            container.innerHTML += questions[i] +'<ul>'+'</ul>';
            var ul = document.querySelectorAll('ul');
            for (var j =0; j<answers.length; j++){
                ul[i].innerHTML += '<li>'+'<label>'+answers[i][j]+'<input type="radio" value="'+answers[i][j]+'" name="'+[i]+'">'+'</input>'+'</label>'+'</li>';
            }
        }
        container.innerHTML += '<button class="btn btn-info" onclick="event.preventDefault()">' + 'Проверить мои результаты' + '</button>';
        var li = document.querySelectorAll('li');
        for(i = 0; i <li.length; i++) {
            li[i].className = 'list';}
    }

};
MyTest.init();

$(function(){
    var rightAnswer = ['4','48','11'];
    var submitButton = $('.btn-info');

    submitButton.on('click', checkAnswers);

    function checkAnswers (){
        var data = $('form').serializeArray();
        var myData = JSON.stringify(data);
        localStorage.setItem('data', myData);
        var value = localStorage.getItem('data');
        value = JSON.parse(value);
        var s =0;

        for (var i =0; i<3;i++){
            if (value[i].value == rightAnswer[i]){
                s++;
            }
        }
        console.log('s = ',s);
        modalWindow();
        if(s < 3){
            $('.variant').append('Тест не пройден!');
            $('.btn-primary').append('Пройти заново').on('click', refresh) ;
        }else{
            $('.variant').append('Тест пройден!');
            $('.btn-primary').append('Сохранить изменения').on('click', refresh);
        }
        submitButton.attr('disabled',true);

    }

    function modalWindow(){
        $('.modal').show();
        $('.fade').css("opacity","1");
    }
    function closeModal (){
        $('.modal').hide();
        $('.fade').css("opacity","0");
    }
    function refresh (){
        location.reload();
    }
    $('.btn-default').on('click', closeModal);


});
