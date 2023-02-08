console.log('palindromia')
// // Palidroma
// // Chiedere all’utente di inserire una parola
// // Creare una funzione per capire se la parola inserita è palindroma
// // Comunicare all’utente (decidete voi come) se la parola che ha inserito è palindroma oppure no

// creo un promt che chieda all'utente di inserire una parola
let askUser = prompt('add a word')
console.log(askUser, 'you enter this word')

let message = ''

// creo una variabile che prenda il risultato della condizione all'interno della funzione
const result = palindromeControl(askUser)
console.log(message)

// creo una funzione con un ciclo che divide la parola in due
// controllo ad ogni iterazione la prima e l'ultima lettera della parola
    // continuo finche le lettere sono uguali
    // SE trovo una lettera diversa
        // non sara palindromo
    // ALTRIMENTI 
        // sara palindromo

function palindromeControl(word){

    word = word.toLowerCase()

    const typedWord = word.length
    console.log(word.length)

    for (let i = 0; i < typedWord / 2; i++) {

        if (word[i] !== word[typedWord - i - 1]) {

            message = 'its not palindrome'

            return
        }
    }
    message = 'its palindrome'
}



console.log ('pari o dispari v2000.0.1')
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Comunichiamo all’utente chi ha vinto. (decidete voi come)

// creo un prompt per l'utente che gli fa scegliere pari o dispari
let userChoice = prompt('Choose even or odd')
console.log('Your Choice is: ', userChoice)

// creo un prompt per l'utente che gli fa scegliere un numero da 1 a 5
let userNumber = parseInt(prompt('Choose a number between 1 and 5'))
console.log('You choose the number: ', userNumber)

// creo un numero random per il pc invocando la funzione
let pcRandomNumber = randomPcNumber(1, 5);
console.log('Pc has generate this number: ', pcRandomNumber);

// invoco la funzione con la somma dei numeri di utente e pc
const totalSum = numberSum (userNumber, pcRandomNumber)
console.log ('The total is: ', totalSum)

// SE la somma/2 risulta UGUALE a 0 E l'utente ha scelto pari allora ha vinto
// ALTRIMENTI SE la somma/2 risulta DIVERSA da 0 E l'utente ha scelto dispari ha vinto
// ALTRIMENTI l'utente ha perso

if (userChoice === 'even' && totalSum % 2 === 0) {

    console.log('You WIN!')
}
else if (userChoice === 'odd' && totalSum % 2 !== 0){

    console.log('You WIN!')
}
else {

    console.log('Pc WIN!')
}

/*********
 FUNZIONI
 *********/

function randomPcNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + 1;
}

function numberSum(userNum, pcNum) {

    const sum = userNum + pcNum

    return sum
}

