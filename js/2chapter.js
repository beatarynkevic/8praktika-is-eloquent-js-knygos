//we create a binding
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

let one = 1, two = 2;
console.log(one + two);

const greeting = 'Hello';
const name = 'Ayda';
console.log(greeting + name);

//prompt('Say hello'); calling a function

/* let theNumber = Number(prompt("Pick a number")); //The result of prompt is a string value and we need number values. The function Number converts a value to a number.
if (!Number.isNaN(theNumber)) {
console.log("Your number is the square root of " +
theNumber * theNumber);
} else {
    console.log("Hey. Why didn't you give me a number?");
}
*/
let num = Number(prompt("Pick a number"));

if (num < 10) {
    console.log("Small");
} else
if ( num < 50) {
    console.log("Medium");
} else {
    console.log("Large");
}
console.clear()
//While loop

let number2 = 0;
while (number2 <= 12) {
console.log(number2);
number2 = number2 + 2;
}

let result = 1;
for (let i = 0; i < 10; i++) {
    result = result * 2;
}
console.log(result);

for (let a = 0; a <= 10; a = a + 2.5) {
    console.log(a);
}

//Exercises
//Triangle
let triangle = '';
for (let line = '#'; line.length < 8; line += '#') {
    console.log(line);
}

//FizzBuzz
const from = 1;
const to = 100;

for (let i = from; i < 100; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if ( i % 3 === 0) {
        console.log('Fizz')
    } else (console.log(i));
}
console.clear();
//Chessboard
let size = 8;
let board = " ";
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x+y) % 2 === 0) {
            board += "  ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);