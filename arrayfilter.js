function getLessThanZero(arg) {
    var arr = [];
    for (var i = 0; i < arg.length; i++) {
        if (arg[i] < 0) {
            arr.push(arg[i]);
        }
    }
    return arr;
}

console.log(getLessThanZero([1, 2, -1, -90, 10]));
console.log(getLessThanZero([1, 2]));
