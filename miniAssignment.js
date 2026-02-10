/*1*/  console.log("Question 1:"); 
const add = (a,b) => a + b;
console.log("The sum of a and b is: " + add(5,10));

/*2*/   console.log("Question 2:");  
function isEven(a, b) {
    if (a % 2 === 0 && b % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log("The sum is either Even or Odd and it is: " + (isEven(5,10) ? "Even" : "Odd"));

/*3*/   console.log("Question 3:"); 
const nums = [1,2,3,4,5];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}    

/*4*/   console.log("Question 4:"); 
nums.forEach(nums => console.log(nums));

/*5*/   console.log("Question 5:"); 
const double = [2,3,4,5,6];
let printDouble = double.map(doubled => {
    console.log(doubled * 2);
})

/*6*/   console.log("Question 6:");
let student1 ={
Name : "Wesley",
Age : 20,
GPA : 2.5,
Major : "Computer Science",
}
console.log(student1.Name);
console.log(student1.GPA);

/*7*/   console.log("Question 7:");
let students = [
    {
        Name: "Alex",
        Age: 20,
        GPA: 2.8,
        Major: "Computer Science"
    },
    {
        Name: "Jordan",
        Age: 22,
        GPA: 3.5,
        Major: "Mathematics"
    },
    {
        Name: "Taylor",
        Age: 19,
        GPA: 3.9,
        Major: "Engineering"
    },
    {
        Name: "Casey",
        Age: 18,
        GPA: 2.9,
        Major: "Philosophy"
    }
];

/*8*/   console.log("Question 8:"); 
let filteredList = students.filter(student => {
  return student.GPA >= 3.0;
});
console.log(filteredList);

/*9*/   console.log("Question 9:"); 
let filteredLists = students.filter(student => {
  return student.Major === "Computer Science";
});
console.log(filteredLists);

/*10*/  console.log("Question 10:"); 
let StudentNames = students.map(student => {
    console.log(student.Name);
})

/*11*/  console.log("Question 11:"); 
let TopStudents = students
.filter(students => students.GPA >= 3.5)
.map(students => students.Name);
console.log(TopStudents);

/*12*/  console.log("Question 12:"); 
let averageGPA = students.reduce((total, student) => total + student.GPA, 0) / students.length;
console.log(averageGPA);