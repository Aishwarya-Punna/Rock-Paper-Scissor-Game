function Car(name,brand){
    this.name=name;
    this.brand=brand;
    this.greet=function(){
        console.log(`the car is ${name} brand is  ${brand} `);
    }
}
Car.prototype.honk=function(){
    console.log("Beep!");
}
let car1=new Car("Shift Desire", "Maruthi Suziki");
let car2=new Car("Toyoto", "Tata Motors");
car1.greet();
car2.greet();
car1.honk();
car2.honk();