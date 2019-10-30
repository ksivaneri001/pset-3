const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const number1 = readlineSync.question("\nEnter a number: ");
const number2 = readlineSync.question("\nEnter a number: ");
const number3 = readlineSync.question("\nEnter a number: ");

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
    if (number1 < number2 < number3) {
        console.log("\nStrictly Increasing.");
    }
    else if (number1 < number3 && number1 >= number2) {

    }
    else if (number1 < number3 && number2 >= number3) {

    }
}
