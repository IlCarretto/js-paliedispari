// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

let userWord = prompt("Inserisci una parola palindroma")
console.log(userWord.length);

// FUNCTIONS

/**
 * Description: Funzione che controlla se la parola inserita dall'utente è palindroma 
 * @param {string}; Stringa da controllare
 * @returns {boolean}; valore booleano, true se è palindroma, false se non è palindroma
 */
function elementIsPalindroma (wordToCheck) {
    let wordWritten = false;
    let wordReversed = "";
    for (let i = userWord.length; i > 0; i--) {
        wordReversed += userWord[i - 1];
    }
    if (wordReversed === wordToCheck) {
        wordWritten = true;
    }
    console.log(wordReversed);
    return wordWritten;
}

console.log(elementIsPalindroma(userWord));