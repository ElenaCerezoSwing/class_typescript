"use strict";
class Point {
}
class Point2D extends Point {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
    plus(otherPoint) {
        return new Point2D(this.x + otherPoint.x, this.y + otherPoint.y);
    }
}
class Point3D extends Point {
    constructor(x, y, z) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
    }
    plus(otherPoint) {
        return new Point3D(this.x + otherPoint.x, this.y + otherPoint.y, this.z + otherPoint.z);
    }
}
const p1 = new Point2D(1, 2);
const p2 = new Point2D(2, 1);
const p3 = p1.plus(p2);
const p4 = new Point3D(1, 2, 3);
const p5 = new Point3D(3, 2, 1);
const p6 = p4.plus(p5);
console.log(p3);
console.log(p6);
