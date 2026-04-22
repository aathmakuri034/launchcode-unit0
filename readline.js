const input = require('readline-sync')

let userName = input.question("What is your name?: ");
let userAge = input.question("How old are you?: ");
let fAnswer = input.question("What data type is a Number('3') return?: "); 
let sAnswer = input.question("What does 'false' return when put into an if statement?: ");
let tAnswer = input.question("Which data type is used to return True or False?: ");
let ftAnswer = input.question("Which data type is used to store a sentence or paragraph?: ");
let ffAnswer = input.question("What data type would you use to store the number of days until Christmas?: ");

console.log("Your name is " +userName);
console.log("You are " + userAge + " years old");
console.log("Your 1st answer was " + fAnswer);
console.log("Your 2nd answer was " + sAnswer);
console.log("Your 3rd answer was " + tAnswer);
console.log("Your 4th answer was " + ftAnswer);
console.log("Your 5th answer was " + ffAnswer);
