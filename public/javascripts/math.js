
var result1 = 0;
var result2 = 0;
var result3 = 0;

function update() {
    $("#result1").text(result1);
    $("#result2").text(result2);
    $("#result3").text(result3);
}

$(document).ready(function(){
    update();
});

function increment1() {
    result1++;
    update();
}

function decrement1() {
    result1--;
    update();
}


function increment2() {
    result2++;
    update();
}

function decrement2() {
    result2--;
    update();
}


function increment3() {
    result3++;
    update();
}

function decrement3() {
    result3--;
    update();
}