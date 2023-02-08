function reverse(arg) {
    var arr = [];
    for (var i = arg.length - 1; i >= 0; i--) {
        arr.push(arg[i]);
    }
    return arr;
}

console.log(reverse([1, 2, 3]));
