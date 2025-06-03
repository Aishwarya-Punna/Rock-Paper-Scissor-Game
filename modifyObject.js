/* 
function modifyObject(obj){
    var student={
        firstName: "Aishwarya",
        lastName:"Punna",
        age: 21,
       address:{
            village:"Hayathnagar",
            state:"Telangana",
            country:"India",
        },

        greet: function(){
            console.log("I am "+this.firstName+this.lastName+". I am right to vote. Because I am "+this.age+" years old");
        }
        
    };
    student.age=22;
    console.log(student.age);

    student.qualification="BTech";
    console.log(student["qualification"]);
    student.greet();
   }
   modifyObject({}); */


   function modifyObject(obj) {
    // Deep copy the object to ensure the original is not impacted
    var student = JSON.parse(JSON.stringify(obj));
    
    student.age = 22;
    console.log(student.age);
    
    student.qualification = "BTech";
    console.log(student["qualification"]);

    // Adding the greet method to the copied object
    student.greet = function() {
        console.log("I am " + this.firstName + " " + this.lastName + ". I have the right to vote because I am " + this.age + " years old.");
    };

    student.greet(); // Call greet to see the updated information

    return student; // Return the modified object
}

var originalStudent = {
    firstName: "Aishwarya",
    lastName: "Punna",
    age: 21,
    address: {
        village: "Hayathnagar",
        state: "Telangana",
        country: "India"
    }
};

var newStudent = modifyObject(originalStudent);

// Checking if the original object is not impacted
console.log(originalStudent);
console.log(newStudent);
