const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

const YEAR = Number(readlineSync.question("\nEnter a year: "));

if (Number.isNaN(YEAR)) {
    console.log("\nInvalid.");
}
else if (YEAR < MIN || YEAR > MAX) {
    console.log("\nInvalid.");
}
else if (YEAR % 400 == 0) {
    console.log("\n" + YEAR + " is a leap year.");
}
else if (YEAR % 4 == 0 && YEAR % 100 != 0) {
    console.log("\n" + YEAR + " is a leap year.");
}
else {
    console.log("\n" + YEAR + " is not a leap year.");
}
