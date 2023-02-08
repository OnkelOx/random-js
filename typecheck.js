function logType(arg) {
    if (typeof arg == "number") {
        if (isNaN(arg)) {
            console.log("not a number!");
        } else if (arg == Infinity) {
            console.log("infinity and beyond!");
        } else {
            console.log(typeof arg + "!");
        }
    } else if (typeof arg == "object") {
        if (arg == null) {
            console.log("null!");
        } else if (Array.isArray(arg)) {
            console.log("array!");
        } else {
            console.log(typeof arg + "!");
        }
    } else if (
        typeof arg == "function" ||
        typeof arg == "undefined" ||
        typeof arg == "string" ||
        typeof arg == "boolean"
    ) {
        console.log(typeof arg + "!");
    } else {
        console.log("I have no idea!");
    }
}

function test() {
    logType(1);
    logType("a");
    logType(1 / 0);
    logType(NaN);
    logType(true);
    logType(Math.sin);
    logType(undefined);
    logType(null);
    logType([1, 1]);
    logType({ a: 1 });
}

test();
