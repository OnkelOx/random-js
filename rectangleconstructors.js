function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

function Square(w) {
    this.width = w;
    this.height = w;
}

function getArea() {
    return this.width * this.height;
}

Rectangle.prototype.getArea = getArea;
Square.prototype.getArea = getArea;

console.log(new Rectangle(1, 2).getArea());
console.log(new Square(1).getArea());
