function getTotaler() {
    var total = 0;
    return function(num) {
        total = total + num;
        return total;
    };
}

var totaler = getTotaler();
console.log(totaler(0));
console.log(totaler(2));
console.log(totaler(1));
console.log(totaler(-4));
