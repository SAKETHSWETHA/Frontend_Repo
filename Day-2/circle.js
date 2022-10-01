//Circle
class Circle{
    constructor(radius){
    this.radius=radius;
    }
    getArea(){
    return 3.14*this.radius;
    }

    getPerimeter(){
    return  2*3.14*this.radius;
    }

}
let circle = new Circle(11);
console.log(circle.getArea());
console.log(circle.getPerimeter());
