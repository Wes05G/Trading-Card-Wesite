const age = 45;
const name = "Wesley";
const userName = "Blade-_-Aspect"
console.log(`I am ${age} years old`);

document.getElementById("id1").textContent=`I am ${age} years old`;
document.getElementById("id2").textContent=`My name is ${name}`;

function greetUser(userName) {
console.log(`Hello, ${userName}! Welcome back.`);
}

greetUser(userName);
