$(document).ready(function() {
    var data = {
        title: "Ivan Samoylov",
        imgUrl: "img/photo.png",
        hint:"Студент юмористического университета",
        whylist:"Я хочу учить фронтэнд, потому что:",
        list: [
            "Шутить не всегда весело",
            "Денег нет вообще",
            "Приходится шутить под церковью и магазинами"
        ],
        contacts:"Мой контактный телефон",
        number:"+380669688717",
        profile:"Мой профиль Вконтакте",
        link:'<a href="https://vk.com/ivansamoyloff" target="_blank">Иван Самойлов</a>',
        feedback:"Мой фидбек",
        myfeedback:"Если нужно, могу пошутить"

    };

    var htmlTemplate = $('#html-template').html();
    var lodashTemplate = _.template(htmlTemplate);

    $('#my-page').html(lodashTemplate(data));
});