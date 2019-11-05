const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const number = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(number)) {
    console.log("\nInvalid.")
}
else if (number < MIN || number > MAX) {
    console.log("\nInvalid.");
}
else if (number == 0) {
    console.log("\nZero.");
}
else if (number > 0) {
    console.log("\nPositive.");
}
else if (number < 0) {
    console.log("\nNegative.");
}
else {
    console.log("\nInvalid.");
}
