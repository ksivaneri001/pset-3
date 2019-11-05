const readlineSync = require("readline-sync");

const CARD = readlineSync.question("\nEnter a playing card: ");

let cardLowerCase = CARD.toLowerCase();
let cardRank = cardLowerCase.charAt(0);
let cardSuit = cardLowerCase.charAt(1);

let rankString = null;
let suitString = null;

let skipFinalStep = false;

if (cardLowerCase.length == 2) {
    switch (cardRank) {
        case "2":
            rankString = "Two";
            break;
        case "3":
            rankString = "Three";
            break;
        case "4":
            rankString = "Four";
            break;
        case "5":
            rankString = "Five";
            break;
        case "6":
            rankString = "Six";
            break;
        case "7":
            rankString = "Seven";
            break;
        case "8":
            rankString = "Eight";
            break;
        case "9":
            rankString = "Nine";
            break;
        case "t":
            rankString = "Ten";
            break;
        case "j":
            rankString = "Jack";
            break;
        case "q":
            rankString = "Queen";
            break;
        case "k":
            rankString = "King";
            break;
        case "a":
            rankString = "Ace";
            break;
        default:
            skipFinalStep = true;
            break;
    }

    switch (cardSuit) {
        case "c":
            suitString = "Clubs";
            break;
        case "d":
            suitString = "Diamonds";
            break;
        case "h":
            suitString = "Hearts";
            break;
        case "s":
            suitString = "Spades";
            break;
        default:
            skipFinalStep = true;
            break;
    }

    if (skipFinalStep == false) {
        console.log("\n" + rankString + " of " + suitString + ".");
    }
    else {
        console.log("\nInvalid.");
        console.log("test");
    }
}
else {
    console.log("\nInvalid.");
    console.log("other test");
}
