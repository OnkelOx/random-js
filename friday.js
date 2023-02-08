var x;
var xx;

x = 2;
function timestwo(number) {
    return number * 2;
}

xx = timestwo(x);

var numbers = [x, xx];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers = {};
numbers.y = xx;
