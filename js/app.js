console.log('palindromia')
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Comunicare all’utente (decidete voi come) se la parola che ha inserito è palindroma oppure no

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