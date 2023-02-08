function invertCase(str) {
    var invStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            invStr += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            invStr += str[i].toUpperCase();
        }
    }
    return invStr;
}

console.log(invertCase("aB!"));
