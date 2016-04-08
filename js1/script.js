/**
 * Created by ivans on 22.03.2016.
 */
var pow1 = prompt('Введите число');
var pow2 = prompt('Введите степень');

for(var i=0; i<pow2-1;i++ ){
    var c =pow1;
    pow1*=c;
}
console.log(pow1);