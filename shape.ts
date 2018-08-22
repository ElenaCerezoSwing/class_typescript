abstract class Shape {
    protected width: number
    protected height: number

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    abstract area(): number
}

class Triangle extends Shape {
    area() {
        return (this.width * this.height) / 2

    }
}
class Rectangle extends Shape {
    area() {
        return (this.width * this.height)

    }
}


const triangle = new Triangle(10, 10);
const rectangle = new Rectangle(10, 10);

console.log(triangle.area());
console.log(rectangle.area());
function printArea(shape: Shape) {
    console.log(shape.area());
}

printArea(triangle);
printArea(rectangle);
