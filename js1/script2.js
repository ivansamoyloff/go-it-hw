/**
 * Created by ivans on 22.03.2016.
 */
var arr=[];
for(var i=0; i<5; i++){
    arr[i]=prompt('Введите имя');
}
var check=prompt('Введите имя пользователя');
function name (){
    for (var i=0;i<arr.length;i++){
        if (arr[i]==check){
            alert('Добро пожаловать, '+check);
            return 0;
        }
    }
    alert('Имя отсутствует');
}
name();
