function sum() {
    var total = 0;
    for (var arg in arguments) {
        total = total + arguments[arg];
    }
    return total;
}

console.log(sum(1, 2, 3));
