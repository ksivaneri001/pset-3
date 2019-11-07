const readlineSync = require("readline-sync");

const MONTH = readlineSync.question("\nEnter a month: ");

const MONTH_LOWER_CASE = MONTH.toLowerCase();

switch (MONTH_LOWER_CASE) {
    case "jan":
    case "january":
    case "mar":
    case "march":
    case "may":
    case "jul":
    case "july":
    case "aug":
    case "august":
    case "oct":
    case "october":
    case "dec":
    case "december":
        console.log("\n31 days.");
        break;
    case "apr":
    case "april":
    case "jun":
    case "june":
    case "sep":
    case "september":
    case "nov":
    case "november":
        console.log("\n30 days.");
        break;
    case "feb":
    case "february":
        console.log("\n28 or 29 days.");
        break;
    default:
        console.log("\nInvalid.");
        break;
}
