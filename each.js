function each(arg, func) {
    if (typeof arg == "object" && arg != null && typeof func == "function") {
        if (Array.isArray(arg)) {
            for (var i = 0; i < arg.length; i++) {
                func(arg[i], i);
            }
            //thought about return "OK" here but trick question it's an object as well.
        }
        for (var key in arg) {
            func(arg[key], key);
        }
        return "OK";
    }
    return "ERROR";
}

function printerino(arg, key) {
    console.log(arg + " at " + key);
}

var arr = [1, 2, 3];
var obj = { "0": 1, "1": 2, "2": 3 };
var arr2 = [4, 5, 6];
arr2.whatami = "array";

each(arr, printerino);
each(obj, printerino);
each(arr2, printerino);
console.log(each(1, printerino));
console.log(each("aaaaaaa", printerino));
console.log(each(arr, obj));
