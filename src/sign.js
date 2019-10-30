const readlineSync = require("readline-sync");

const number = readlineSync.question("\nEnter a number: ");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

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
