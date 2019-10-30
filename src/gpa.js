const readlineSync = require("readline-sync");

let gpa = null;

const LETTER_GRADE = readlineSync.question("\nEnter a letter grade: ");

if ((LETTER_GRADE.length == 1) || (LETTER_GRADE.length == 2 && LETTER_GRADE.charAt(1) == "+" || LETTER_GRADE.charAt(1) == "-")) {

    let letterPrefix = LETTER_GRADE.charAt(0);

    switch (letterPrefix) {
        case "A":
        case "a":
            gpa = 4.00;
            console.log("\nTESTING: Success.");
            break;
        case "B":
        case "b":
            gpa = 3.00;
            console.log("\nTESTING: Success.");
            break;
        case "C":
        case "c":
            gpa = 2.00;
            console.log("\nTESTING: Success.");
            break;
        case "D":
        case "d":
            gpa = 1.00;
            console.log("\nTESTING: Success.");
            break;
        case "F":
        case "f":
            gpa = 0.00
            console.log("\nTESTING: Success.");
            break;
        default:
            console.log("\nInvalid.");
    }

}
else {
    console.log("\nTESTING: This is the else statement.");
}
