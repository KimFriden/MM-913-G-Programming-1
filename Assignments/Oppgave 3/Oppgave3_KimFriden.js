const spacer = " "; /* to make "fake" indentations in console. */
const tx_seconds = "sekunder";
const tx_minutes = "minutter";
const B_q1 = "Hvor mange sekunder er det i 2.5 timer?";
const B_q2 = "Hvor mange minutter er det i 123 dager?";

function log(text) {
    console.log(text);
};

function logArray(variable) {
    for (let index in variable) {
        log(spacer + `${index} : ${variable[index]}`)
    };
};

/*
    Oppgave: A
    Lag variabler for:
    * Timer i døgnet
    * Minutter i en time
    * Sekunder i et minutt
    * forholdet mellom vann og saft når man blander saft.
    * dager til din bursdag
    * mmilimeter regn som faller 
*/
console.log("Oppgave: A");

const timeSetup = {
    hours: 24,
    minutes: 60,
    seconds: 60
};

let ratio = {
    vann: 4,
    saft: 1
}

const daysUntilBirthday = 341;
let rainInMM = 4.1;
 
log(`timeSetup: `); logArray(timeSetup);
log(`ratio: `); logArray(ratio);
log(`daysUntilBirthday : ${daysUntilBirthday}`);
log(`rainInMM : ${rainInMM}mm`);
log("");

/*
    Oppgave: B
    Bruk variablene dine fra oppgave A og kalkuler:
    * Hvor Mange sekunder er det i 2.5 timer?
    * Hvor mange minutter er det i 123 dager?
    Husk å sette svarene til sine egne variabler
    Eks:
    // Hvor mange dl er 4.5 coups?
    const dlInCoups = 2.36588;
    const antallDL = dlInCoups * 4.5;
*/
console.log("Oppgave: B");
//hvor mange sekunder er det i 2.5 timer?
const secondsInTwoPointFiveHours = 2.5 * (timeSetup.minutes * timeSetup.seconds);
const minutesInTwoHoundredAndThreeDays = (timeSetup.hours * timeSetup.minutes) * 123;

log(`${spacer}1) ${B_q1} \n ${secondsInTwoPointFiveHours} ${tx_seconds}\n${spacer}2) ${B_q2} \n ${minutesInTwoHoundredAndThreeDays} ${tx_minutes}`); /* Nei, ikke spør meg om dette... */

/*
    Oppgave: C
    Bruk en løkke (for) til å skrive ut tallene fra 1 til 10 
*/
console.log("Oppgave: C");

for (let number = 1; number <= 10; number++) {
    log(number);
};
log("");

/*
    Oppgave: D
    Bruk en løkke (for) til å skrive ut tallene fra 10 til 1
*/
console.log("Oppgave: D");


for (let number = 10; number > 0; number--) {
    log(number);
};
log("");

/*
    Oppgave: E
    Denne er litt vanskligere, men du klarer den ;)
    Bruk en løkke (for) til å skrive ut partallene mellom 1 og 100
*/
console.log("Oppgave: E");

let evenNumbers = [];
let MAX = 100;
let MIN = 0;
let delimiter = ", ";

for (let number = MIN; number <= MAX; number++) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
    if (number == MAX) {
        log(evenNumbers.join(`${delimiter}`));
    }
};
log("");

/*
    Oppgave: F
    Fyll inn koden som skal til for å få følgende kode til å skrive ut det som er forventet.
*/
console.log("Oppgave: F \n");

const DICTIONARY = {
    hello: "Hei på deg",
    howAreYou: "hvordan står det til?",
    goodQuestionsLately: "Fått noen gode spørsmål i det siste?"
}

console.log(`${DICTIONARY.hello} Christian ${DICTIONARY.howAreYou}`); //-> Hei på deg Christian, hvordan står det til?
console.log(`${DICTIONARY.goodQuestionsLately}`) //-> Fått noen gode spørsmål i det siste?
log("");

/*
    Oppgave: G
    Fyll inn koden som skal til for å få følgende kode til å skrive ut det som er forventet.
*/
console.log("Oppgave: G \n");

const DICTIONARY_ML = {
    no:{
        hello:"Hei på deg",
        howAreYou:"hvordan står det til?"
    },
    en:{
        hello:"Hello my friend",
        howAreYou:"How you doing?",
        goodQuestionsLately: "Had any great questions lately?"
    }
}

console.log(`${DICTIONARY_ML.en.hello} Christian ${DICTIONARY_ML.en.howAreYou}`); //-> Hi Christian, how are you?
console.log(`${DICTIONARY_ML.en.goodQuestionsLately}`) //-> Gotten anny good questions latly?
log("");

