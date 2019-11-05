const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = 100;

const A_B_THRESHOLD = 90;
const B_C_THRESHOLD = 80;
const C_D_THRESHOLD = 70;
const D_F_THRESHOLD = 60;

const grade = Number(readlineSync.question("\nEnter a grade: "));

if (Number.isNaN(grade)) {
    console.log("\nInvalid.");
}
else if (grade < MIN || grade > MAX) {
    console.log("\nInvalid.");
}
else if (grade <= MAX && grade >= A_B_THRESHOLD) {
    console.log("\nYou received an A.");
}
else if (grade < A_B_THRESHOLD && grade >= B_C_THRESHOLD) {
    console.log("\nYou received a B.");
}
else if (grade < B_C_THRESHOLD && grade >= C_D_THRESHOLD) {
    console.log("\nYou received a C.");
}
else if (grade < C_D_THRESHOLD && grade >= D_F_THRESHOLD) {
    console.log("\nYou received a D.");
}
else {
    console.log("\nYou received an F.");
}
