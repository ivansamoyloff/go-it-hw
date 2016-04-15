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
        var container = document.querySelector('body');
        container.innerHTML += '<h2>'+'Тест по программированию'+'</h2>'+'</n>'+'<form>';
        for (var i = 0; i<questions.length; i++){
            container.innerHTML += '<ul>' + questions[i] + '</ul>';
            var ul = document.querySelectorAll('ul');
            for (var j =0; j<answers.length; j++){
                ul[i].innerHTML += '<li>'+'<label>'+'<input type="radio">'+answers[i][j]+'</input>'+'</label>'+'</li>';
            }
        }
        container.innerHTML += '<button class="btn btn-info">' + 'Проверить мои результаты' + '</button>' + '\n' + '</form>';
        var li = document.querySelectorAll('li');
        for(i = 0; i <li.length; i++) {
            li[i].className = 'list';}
    }

};
MyTest.init();
