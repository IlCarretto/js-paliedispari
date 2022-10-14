// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

let userWord = prompt("Inserisci una parola palindroma")
const userLetters = userWord.split(""); 
console.log(userLetters, userLetters.length);

// FUNCTIONS

/**
 * Description: Funzione che controlla se la parola inserita dall'utente è palindroma 
 * @param {string}; Stringa da controllare
 * @returns {boolean}; valore booleano, true se è palindroma, false se non è palindroma
 */
function elementIsPalindroma (wordToCheck) {
    let wordWritten = false;
    let wordReversed = "";
    for (let i = userLetters.length; i = 0; i--) {
        wordReversed+=(userLetters.length[i]);
    }
    if (wordReversed === wordToCheck) {
        wordWritten = true;
    }
    return wordWritten;
}

console.log(elementIsPalindroma(userWord));