abstract class Point {
    public abstract plus(otherPoint: Point): Point
}

class Point2D extends Point {

    private x: number
    private y: number

    constructor(x: number, y: number) {
        super()
        this.x = x;
        this.y = y;
    }

    plus(otherPoint: Point2D) {
        return new Point2D(
            this.x + otherPoint.x, this.y + otherPoint.y
        )
    }
}
class Point3D extends Point {

    private x: number
    private y: number
    private z: number

    constructor(x: number, y: number, z: number) {
        super()
        this.x = x;
        this.y = y;
        this.z = z;
    }

    plus(otherPoint: Point3D) {
        return new Point3D(
            this.x + otherPoint.x, this.y + otherPoint.y, this.z + otherPoint.z
        )
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