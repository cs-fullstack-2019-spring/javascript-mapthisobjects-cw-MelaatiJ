// 1. Use .map to create a new array of objects
// where each object has a property for ```petnumber``` and ```pettype``` based on the
// elements in the array. Print the new array of objects.
//     ```
// let arr = ["dog", "cat", "pig", "hamster"];
// let pet_objects = []; // new array to hold objects
// ```

let arrayofanimals = ["dog", "cat", "pig", "hamster"];

function petobjects(pettype, petnumber)
{
    let newobj = {};
    newobj.petnumber = petnumber;
    newobj.pettype = petnumber;
    return newobj;

};

var typeAndNumberofAnimals = arrayofanimals.map(petobjects);

console.log(arrayofanimals);
console.log(typeAndNumberofAnimals);