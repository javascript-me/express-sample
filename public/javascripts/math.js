var result = 0;

function update() {
    $("#result").text(result);
}

$(document).ready(function(){
    update();
});

function increment() {
    result++;
    update();
}

function decrement() {
    result--;
    update();
}
