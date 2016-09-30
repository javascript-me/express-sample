
function Counter(id) {

    this.id = id;

    this.result = 0;

    this.increment = function () {
        this.result++;
        this.update();
    };

    this.decrement = function () {
        this.result--;
        this.update();
    };

    this.update = function () {
        $(this.id).text(this.result);
    };

}

var counter1 = new Counter("#result1");
var counter2 = new Counter("#result2");
var counter3 = new Counter("#result3");

$(document).ready(function(){
    counter1.update();
    counter2.update();
    counter3.update();
});