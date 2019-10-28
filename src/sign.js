const readlineSync = require("readline-sync");

const number = readlineSync.question("\nEnter a number: ");

if (number == 0) {
    console.log("Zero.")
} else if (number < 0) {
    console.log("Negative.");
} else if (number > 0) {
    console.log("Positive.");
} else if (Number.isNaN(number)) {
    console.log("Invalid.");
} else {
    console.log("Invalid.");
}
