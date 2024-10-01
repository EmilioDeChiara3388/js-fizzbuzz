console.log("Funziona?");

/* Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda: Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
NB. Mi raccomando come visto in classe stamattina non va bene copiare la traccia per farsi fare l'esercizio ma é ottimo seguire il flusso che vi ho mostrato durante la correzione dell'esercizio.
Scrivetevi le 5 fasi, poi createvi dello pseudo codice per ciascuna fase e procedete passo passo nella risoluzione del problema proposto.
 */

// Preparazione
// Scrivere numeri da 1 a 100 con loop for;
// Creare blocchi if per i numeri divisibili per 3, 5, 3 e 5;
let divisibleByThree = "Fizz";
let divisibleByFive = "Buzz";
let divisibleByThreeAndFive = "FizzBuzz";


// Raccolta Dati
// Definire criteri di divisibilità nei blocchi if;
// i % 3 == 0;
// i % 5 == 0;
// i % 3 == 0 && i % 5 == 0;
// Elaborazione Codice
for ( let i = 1; i <= 100; i++){
    /* console.log(i); */
    if (i % 3 == 0){
        console.log(divisibleByThree);
    } else if (i % 5 == 0){
        console.log(divisibleByFive);
    }  else if (i % 3 == 0 && i % 5 == 0){
        console.log(divisibleByThreeAndFive);
    } else {
        console.log(i);
        
    }
}
// Output
