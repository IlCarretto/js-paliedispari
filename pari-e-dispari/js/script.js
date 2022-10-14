// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userOddOrEven = prompt("Scegli pari o dispari");
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

function generateRandomNumber (min, max) {
    const generatedNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return generatedNumber
}

const computerNumber = generateRandomNumber(1, 5);

let numberSum = userNumber + computerNumber;
console.log(userNumber, computerNumber, numberSum);


function numberOddOrEven(numberResult) {
    numberOdd = false;
    if (numberResult % 2 === 0) {
        numberOdd = true;
    }
    return numberOdd
}

const finalResult = numberOddOrEven(numberSum);
console.log(finalResult);
if (finalResult === true && userOddOrEven === "pari") {
    console.log("You won!");
} else {
    console.log("You lost!");
}
