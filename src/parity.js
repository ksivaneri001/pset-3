const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const number = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(number)) {
    console.log("\nInvalid.");
}
else if (number < MIN || number > MAX) {
    console.log("\nInvalid.");
}
else if (number % 1 != 0) {
    console.log("\nInvalid.");
}
else {
    const evenOddCheck = number / 2;

    if (evenOddCheck % 1 == 0) {
        console.log("\nEven.");
    }
    else {
        console.log("\nOdd.");
    }
}
