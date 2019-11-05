const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("\nEnter three numbers.");

const number1 = Number(readlineSync.question("\n"));
const number2 = Number(readlineSync.question(""));
const number3 = Number(readlineSync.question(""));

if (Number.isNaN(number1) || Number.isNaN(number2) || Number.isNaN(number3)) {
    console.log("\nInvalid.");
}
else if (number1 < MIN || number1 > MAX) {
    console.log("\nInvalid.");
}
else if (number2 < MIN || number2 > MAX) {
    console.log("\nInvalid.");
}
else if (number3 < MIN || number3 > MAX) {
    console.log("\nInvalid.");
}
else {
    if (number1 < number2 && number2 < number3) {
        console.log("\nStrictly Increasing.");
    }
    else if (number1 < number2 && number2 == number3) {
        console.log("\nIncreasing.");
    }
    else if (number1 == number2 && number2 < number3) {
        console.log("\nIncreasing.");
    }
    else if (number1 == number2 && number2 == number3) {
        console.log("\nEqual.");
    }
    else if (number1 > number2 && number2 > number3) {
        console.log("\nStrictly Decreasing.");
    }
    else if (number1 > number2 && number2 == number3) {
        console.log("\nDecreasing");
    }
    else if (number1 == number2 && number2 > number3) {
        console.log("\nDecreasing");
    }
    else {
        console.log("\nUnordered.");
    }
}
