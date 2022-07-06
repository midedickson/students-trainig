console.log("We don't need a body, so we good!");
let food;
var music;

const percentage = 0.07;
const foodPercentage = 0.1;

var total = 100;
console.log("The total is " + total + ".");
var tax = total * percentage;
total = total - tax;
food = total * foodPercentage;
total = total - food;
console.log("We have spent " + food + " on food.");

console.log("The total after tax and food is " + total + ".");

const x = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  hairColor: "brown",
  fullName: function () {
    this.firstName + " " + this.lastName;
    return "Full Name has been created";
  },
}; // Object

console.log(x.firstName);
console.log(x.lastName);
console.log(x.age);
console.log(x.eyeColor);
console.log(x.hairColor);
console.log(x.fullName());

// JavaScript Object Notation (JSON)

const cars = ["Saab", "Volvo", "BMW", 5];
console.log(cars);

cars[2] = "Mercedes";
console.log(cars);
console.log(cars[1]);
document.getElementById("cars").innerHTML = cars;
document.getElementById("income").innerHTML =
  "The total after tax and food is " + total + ".";
