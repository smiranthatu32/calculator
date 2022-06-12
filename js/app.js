//getnumber
function number(num){
var result = document.getElementById("input");
result.value += num;
}

function result(){
    var result = document.getElementById("input");
    result.value = eval(result.value);
}

function clearResult(){
    var result = document.getElementById("input");
    result.value = "";
}

function backspace(){
    var result = document.getElementById("input");
    var remove = result.value;
    remove = remove.slice(0,-1);
    result.value = remove;
}