
console.log('Hello World');

// statement
let girl ="Ewa";

// expression
let score = (2 * 5) + 3; console.log(score);

// case sensivity
let fineGirl = "Esther"
console.log(fineGirl); 

/* Variables
 assigns name to a value
 identifier (name of variable) = "fineGirl"
 value = "Esther 
*/

// let = used to declare a variable

// declaration is letting js know the name of the container
 
// initialization is assigning a value to the variable


// const keyword: This is used to introduce a constant variable, which cannot be reassigned(changed)
const myName = "Dolapo";
console.log(myName);

// Data types
// 1. String
let name = "Dolapo";
console.log(name);

// 2. Number
let age = 20;
console.log(age);

// 3. Boolean
let isStudent = true;
console.log(isStudent);

/*common operators
+, -, *, /, %, ++, --, **
*/

let tester = 10;
tester++;
console.log(tester);

// strings (string literal): This is a sequence of characters, which can be letters, numbers, or symbols. Strings are enclosed in either single quotes (' ') or double quotes (" ").
let firstName = "Dolapo";
let lastName = "Olowofela";
console.log(firstName + " " + lastName);

let quote1 = "Trix is a master of his craft."
let quote2 = "and there is no one like him."

console.log(quote1 + " " + quote2);

//template literals: This is a way to create strings that can include variables and expressions. Template literals are enclosed in backticks (` `) and use ${} to insert variables or expressions.

let fullQuote = `${quote1} ${quote2}`;

console.log(fullQuote);

// string methods
 
console.log(quote1.length); // returns the number of characters in the string


// Control flow statements: These are used to control the flow of execution in a program. They include conditional statements, loops, and functions.
// Conditional statements


// if (condition) statement

if (true) console.log("Qudus is a student moderator")


else {

}

// ternary operator: This is a shorthand way to write an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

let isLong = true;

let classToday = isLong ? "Class was a lot today" :
"Class was pretty short today";

console.log(classToday);

// nesting if else

   /* if(condition) {
        // code to execute if both conditions are true
    }
    else if(condition) {
        // code to execute if the second condition is true
    }
    else {
        // code to execute if both conditions are false
    }*/



/*
Task
In this task you are provided with two variables:

season — contains a string that says what the current season is.
response — begins uninitialized, but is later used to store a 
response that will be printed to the output panel (using console log).

To complete the task:
- Create a conditional that checks whether season contains the string "summer",
and if so assigns a string to response that gives the user an appropriate
message about the season.
- If not, it should assign a generic string to response that tells the user 
we don't know what season it is. Add another conditional that checks whether 
season contains the string "winter", and again assigns an appropriate string to response.
*/

let season = "summer";
let response;

if(season === "summer") {
    response = "This weather dey hot gan"
}

else if(season === "winter") {
    response = "Its harmattan ooh, so it's similar"
}
console.log(response);

response = (season === "summer")
? "The weather is hot"
: "My keyboard isn't working";

// switching statement

switch (season){
case "summer":
    response = "This weather dey hot gan";
    console.log("help, we are hungry");
    alert("charge my laptop")
    break;
case "winter":
    response = "Its harmattan ooh, so it's similar";
    break;
default:
    response = "I don't know what season it is";
}

// Loops

/* syntax for while loop
 initializer
while(condition) {
    - do something

    - skip an iteration with the keyword

    - exit a loop with the break keyword

}
*/


let randomize = () => Math.floor(Math.random() * 10);
let randomNumber = 0;

while(randomNumber != 4) {
    console.log("randomNumber at the start: " + randomNumber);
    randomNumber++;
    if(randomNumber === 2) {
        continue;
    }
    console.log("Loop iteration count:" + randomNumber);
}


















// for loop
/* for (initializer; condition; incrementer) {
} */

for (let g = 0; g <= 5;) {
    const answer = `${g} * ${g} = ${g * g}`;
    g++
    console.log(answer);
}


















/*Task
1. Write a loop
*/



const students = ["Munirat", "Oyin", "Kaycee", "Trix", "Aristotess", "Emmanuella", "Okpala", "Teacher", "Bad guy", "Mmesoma"];

for (let i = 0; i < students.length; i++){
    if(students[i] === "Teacher" || students[i] === "Bad guy"){
    console.log(`${students[i]} is not a student`)
    }
    else{
        console.log(`${students[i]} is a student`)
    }
}

/*
*/

function multiplyThreeToValue(value) {
    return value * 3;
}

let result = multiplyThreeToValue(5);
console.log(result);

/*
*/

const ManchesterUnitedWinstheLeague = ()=> "Champions Champions";
console.log(ManchesterUnitedWinstheLeague()); 