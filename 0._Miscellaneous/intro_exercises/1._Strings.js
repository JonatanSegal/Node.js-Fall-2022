// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
const ex1Result = numberOne*1 + numberTwo*1;

console.log(ex1Result);


// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

//const parsedNumberOne = Number(anotherNumberOne)
//const parsedNumberTwo = Number(anotherNumberTwo)

const ex2Result = Number(anotherNumberOne) + Number(anotherNumberTwo);
ex2Dicimals = ex2Result.toFixed(2)
console.log(ex2Dicimals);

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = (one+two+three)/3;
dicimals = average.toFixed(5);
console.log(dicimals);


// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

char = letters.split('');
console.log(char[2]);

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const arr = fact.split(' ')
for (var i = 0; i < arr[3].length; i++) {
    arr[3] = arr[3].charAt(0).toUpperCase() + arr[3].slice(1);

}
const str = arr.join(' ');
console.log(str);
// --------------------------------------