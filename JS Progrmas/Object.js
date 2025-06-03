const animal={
    species:"animal",
  
};
const dog=Object.create(animal);

console.log("The species is: "+animal.species);
//console.log("The breed is: "+dog.species);
dog.breed="American Eskimo Dog";
console.log("The breed is: "+dog.breed);