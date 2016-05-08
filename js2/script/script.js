var MyTest = {
    init: function() {
    this.createTest(this.questions, this.answers)
    },

    questions: ['Вопрос 1', 'Вопрос 2','Вопрос 3'],
    answers: [['Ответ 11','Ответ 21','Ответ 31'],
                ['Ответ 12','Ответ 22','Ответ 32'],
                ['Ответ 13','Ответ 23','Ответ 33']
    ],

    createTest: function(questions, answers){
        var form = document.querySelector('body');
        form.innerHTML += '<h2>'+'Тест по программированию'+'</h2>'+ '<br>' +'<form>'+'<form>';

        var container = document.querySelector('form');

        for (var i = 0; i<questions.length; i++){
            container.innerHTML += questions[i] +'<ul>'+'</ul>';
            var ul = document.querySelectorAll('ul');
            for (var j =0; j<answers.length; j++){
                ul[i].innerHTML += '<li>'+'<label>'+answers[i][j]+'<input type="radio" name="'+[i]+'">'+'</input>'+'</label>'+'</li>';
            }
        }
        container.innerHTML += '<button class="btn btn-info">' + 'Проверить мои результаты' + '</button>';
        var li = document.querySelectorAll('li');
        for(i = 0; i <li.length; i++) {
            li[i].className = 'list';}
    }

};
MyTest.init();
