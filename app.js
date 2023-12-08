console.log("*****Practice exercise 5.1*****");
const maxValue = 5;
const solution = Math.floor(Math.random() * maxValue) + 1;
//console.log("Solution: " + solution);

let isCorrect = false;

while (!isCorrect){
    let userGuess = prompt("Enter a number between 1 and 5: ");
    userGuess = parseInt(userGuess);

    if (userGuess == solution){
        console.log("Congrats! You guessed the right number");
        isCorrect = true; // Set isCorrect to true to exit the loop
    }
    else {
        if (userGuess > solution){
            console.log("The guess was too high, please try again");
        }
        else {
            console.log("The guess was too low, please try again");
        }
    }
}

console.log("*****Practice exercise 5.2*****");

let counter = 0;
const step = 5;

do {
    console.log("Counter: " + counter);
    counter += step;

} while (counter < 100);

console.log("*****Practice exercise 5.3*****");

let myWork = [];

for (let i = 1; i<=10; i++){
    let status = i % 2 === 0? true : false;
    let lesson = {
        name: "lesson" + i,
        status: status
    };
    myWork.push(lesson);
}
console.log(myWork);

console.log("*****Practice exercise 5.4*****");

let myTable = [];

const rows = 3;
const col = 4;
let count = 0;

for (let i=0; i<rows; i++){
    tempTable = [];

    for(let j=0; j<col; j++){
        count++;
        tempTable.push(count);
    }
    myTable.push(tempTable);
}
console.log(myTable);

console.log("*****Practice exercise 5.5*****");

let grid = [];
const numCell = 64;
let counTer = 0;
let row = [];

for (let i=0; i<numCell; i++){
    if (counTer % 8 ===0 ){
        if (row !== undefined){
            grid.push(row)
        }
        row = [];
    }
    counTer++;
    let CellValue = counTer;
    row.push(CellValue);

    if(counTer === 8){
        grid.push(row);
    }
}
console.log(grid);

console.log("*****Practice exercise 5.6*****");

let arr = [];
for (let i = 0; i < 10; i++){
    arr.push(i);
}
console.log("Array: " + arr);

console.log("Using for loop");
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("Using for of loop");
for (const value of arr){
    console.log(value);
}

console.log("*****Practice exercise 5.7*****");

let object = {
    item1: "Apple",
    item2: "Banana",
    item3: "Grapes"
}
console.log("Objects: ");
for (let key in object){
    console.log(key + ": " + object[key]);
}

let myArray = ["Apple", "Banana", "Graphes"];

for (let i=0; i<myArray.lenght; i++){
    console.log(myArray[i]);
}

console.log("*****Practice exercise 5.8*****");

let outputString = "";
const skipNumber = 8;

for (let i=1; i<=10;i++){
    if (i == skipNumber){
        continue;
    }
    outputString += i;
}
console.log("Output with continue: " + outputString);

outputString = "";

for (let i=1; i<=10;i++){
    if (i == skipNumber){
        break;
    }
    outputString += i;
}
console.log("Output with break: " + outputString);

console.log("Chapter project");
console.log("Math Multiplication Table");

let number = prompt("Enter any number for Table");
console.log("Multiplication of " + number + " is");
for (let i=1; i<=10; i++){
    console.log(number + " * " + i + " = " +(number*i) )
}
