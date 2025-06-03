class Shape{
    constructor(ObjName){
        this.ObjName=ObjName;
    }
    draw(){
        console.log(`Object to be drawing is ${this.ObjName}`);
    }
}
class Circle extends Shape{
    draw(){
        console.log(`Drawing the Object using Shape is ${this.ObjName}`);
        super.draw();
    }
}
let circle1=new Circle('Semicircle');
let shape1=new Shape("Outercircle");
circle1.draw();
shape1.draw();
//circle1.Shape.draw();
//circle2.Shape.draw();
