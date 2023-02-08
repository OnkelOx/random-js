console.log(NaN === NaN);

Array.isArray = function() {
    return true;
};
console.log(Array.isArray(1));

var a = { "": 1 };
console.log(a[""]);

var b = { [a]: 1 };
for (var key in b) {
    console.log(b.key);
    console.log(b[key]);
    console.log(key);
}

b.a = b;
console.log(b);

console.log(Infinity === Infinity + 1);
console.log(Infinity > Infinity - 1);
