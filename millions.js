function millions(num) {
    if (isNaN(num) || num <= 0) {
        return "ERROR";
    }
    if (num >= 1000000) {
        return num;
    }
    return millions(num * 10);
}

console.log(millions(1));
