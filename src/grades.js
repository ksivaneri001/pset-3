const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = 100;

const A_B_THRESHOLD = 90;
const B_C_THRESHOLD = 80;
const C_D_THRESHOLD = 70;
const D_F_THRESHOLD = 60;

const GRADE = readlineSync.question("\nEnter a letter grade: ");

if (GRADE < MIN || GRADE > MAX) {
    console.log("\nInvalid.")
}
else if (GRADE <= MAX && GRADE >= A_B_THRESHOLD) {
    console.log("\nYou received an A.");
}
else if (GRADE < A_B_THRESHOLD && GRADE >= B_C_THRESHOLD) {
    console.log("\nYou received a B.");
}
else if (GRADE < B_C_THRESHOLD && GRADE >= C_D_THRESHOLD) {
    console.log("\nYou received a C.");
}
else if (GRADE < C_D_THRESHOLD && GRADE >= D_F_THRESHOLD) {
    console.log("\nYou received a D.");
}
else {
    console.log("\nYou received an F.");
}
