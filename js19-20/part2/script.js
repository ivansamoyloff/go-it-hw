$(function() {

    $.getJSON("data.json", function(data) {
        sortArray(data);
        //console.log(data)
    });

    function sortArray(data) {
        var compArr =[];
        var nameArr =[];
        var friendsArr = [];
        for(var i=0; i<data.length; i++) {
            compArr.push(data[i].skills);
            nameArr[i] = {name:data[i].name ,friends:data[i].friends.length};
            for(var j=0; j<data[i].friends.length; j++){
            friendsArr.push(data[i].friends[j].name);}
        }
        var newArr = [];
        for(var i=0; i<compArr.length; i++) {
            newArr = newArr.concat(compArr[i]);
        }
        newArr = _.uniq(newArr);
        newArr[2]=newArr[2].toLowerCase();
        newArr = _.sortBy(newArr);
        nameArr = _.sortBy(nameArr,'friends');
        friendsArr= _.uniq(friendsArr);
        console.log(newArr,nameArr,friendsArr);
    }
});
