const age = 20;
const name = "Wesley";
const userName = "Blade-_-Aspect";

//prints to console
console.log(`I am ${age} years old`);

//prints to website with using an element id
document.getElementById("id1").textContent=`I am ${age} years old`;
document.getElementById("id2").textContent=`My name is ${name}`;

//classic function
function greetUser(userName) {
console.log(`Hello, ${userName}! Welcome back.`);
}
greetUser(userName);

//arrow function with the .forEach method
const hobbies = ["Gaming", "Reading", "Coding"];
hobbies.forEach(hobby => {
    console.log(`One of my hobbies is ${hobby}.`);
});
//ternary operator and comparison operators
console.log(3 == '3');
console.log(3 === '3');
const math = 4 /2 == 0 ? "True" : "False";
console.log(`The number is ${math}.`);

// .forEach just ptints the array items
// .map creates a new array with modified items
// .filter creates a new array with items that meet a condition
// .reduce reduces the array to a single value based on a function
