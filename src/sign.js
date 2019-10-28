const readlineSync = require("readline-sync");

const number = readlineSync.question("\nEnter a number: ");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

if (number == 0) {
    console.log("Zero.")
} else if (number < 0) {
    console.log("Negative.");
} else if (number > 0) {
    console.log("Positive.");
} else if (Number.isNaN(number)) {
    console.log("Invalid.");
} else if (number < MIN || number > MAX) {
    console.log("Invalid.");
} else if (number % 1 != 0) {
    console.log("Invalid.");
} else {
    console.log("Invalid.");
}
