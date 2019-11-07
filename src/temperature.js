const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const F_FREEZING_POINT = 32;
const F_BOILING_POINT = 212;
const C_FREEZING_POINT = 0;
const C_BOILING_POINT = 100;
const K_FREEZING_POINT = 273.15;
const K_BOILING_POINT = 373.15;

const TEMPERATURE = Number(readlineSync.question("\nEnter a temperature: "));
const SCALE = readlineSync.question("Enter a temperature: ");
const SCALE_LOWER_CASE = SCALE.toLowerCase();

if (Number.isNaN(TEMPERATURE)) {
    console.log("\nInvalid.");
}
else if (TEMPERATURE < MIN || TEMPERATURE > MAX) {
    console.log("\nInvalid.");
}
else {
    if (SCALE_LOWER_CASE == "f") {
        if (TEMPERATURE <= F_FREEZING_POINT) {
            console.log("\nSolid.");
        }
        else if (TEMPERATURE >= F_BOILING_POINT) {
            console.log("\nGas.");
        }
        else {
            console.log("\nLiquid.");
        }
    }
    else if (SCALE_LOWER_CASE == "c") {
        if (TEMPERATURE <= C_FREEZING_POINT) {
            console.log("\nSolid.");
        }
        else if (TEMPERATURE >= C_BOILING_POINT) {
            console.log("\nGas.");
        }
        else {
            console.log("\nLiquid.");
        }
    }
    else if (SCALE_LOWER_CASE == "k") {
        if (TEMPERATURE <= K_FREEZING_POINT) {
            console.log("\nSolid.");
        }
        else if (TEMPERATURE >= K_BOILING_POINT) {
            console.log("\nGas.");
        }
        else {
            console.log("\nLiquid.");
        }
    }
    else {
        console.log("\nInvalid.");
    }
}
