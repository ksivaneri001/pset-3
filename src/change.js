const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const QUARTER_VALUE = 0.25;
const DIME_VALUE = 0.1;
const NICKEL_VALUE = 0.05

let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("Invalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid.");
} else {
    let q = Math.floor(amount / QUARTER_VALUE);
    amount = amount % QUARTER_VALUE;

    let d = Math.floor(amount / DIME_VALUE);
    amount = amount % DIME_VALUE;

    let n = Math.floor(amount / NICKEL_VALUE);
    amount = amount % NICKEL_VALUE;

    let p = Math.round(amount * 100);

    console.log("");
    console.log(q + " quarters, " + d + " dimes, " + n + " nickels, " + p + " pennies.");
}
