// AI Task generated via o1-Preview (OpenAI - API)
// Simple functions to avoid repeating certain things..
function task(x, y) {
    console.log("");
    console.log("Oppgave " + x + ": " + y);
}
function log(x) {
    console.log(x);
}
/* Oppgave 1: Variabler

a) Lag en variabel
Opprett en variabel som heter navn og sett den til ditt eget navn.

B) Bruke konstante variabler
Lag en konstant som heter FØDSELSÅR og sett den til året du ble født. */

task(1, 'variabler');
let myName = "Kim Fridén"; // myName = X; to change variable.
const birthday = 2020;

/* Oppgave 2: Arrays (Lister)

a) Opprett en array
Lag en array som heter favorittMat som inneholder tre av dine favorittretter.

b) Tilgang til array-elementer
Skriv ut den første og siste retten i favorittMat-arrayen til konsollen.

c) Legge til elementer i en array
Legg til en ny favorittrett til favorittMat-arrayen og skriv ut den oppdaterte listen. */

task(2, 'Arrays');
let favFood = ["Pizza", "Sausage", "Tika masala"];
console.log("0 og 1 Mat: ", favFood[0] + ",", favFood[2]);
favFood.push("Knekke brød");

for (i = 0; i < favFood.length; i++){
    console.log(favFood[i]);
}

/* Oppgave 3: Løkker

a) For-løkke
Bruk en for-løkke til å skrive ut tallene fra 1 til 5 i konsollen.

b) For-løkke med arrays
Bruk en for-løkke til å gå gjennom favorittMat-arrayen og skriv ut hver rett.

c) While-løkke
Bruk en while-løkke til å telle ned fra 10 til 1 og skriv ut hvert tall. */

task(3, 'Løkker');
for (let number = 1; number <= 5; number++ ) {
    console.log(number);
}
console.log("")
console.log("While-Løkke")
let count = 10;
while (count >= 0) {
    console.log(count);
    count--;
}

/* Oppgave 4: Conditionals (if-setninger)

a) Enkel if-setning
Skriv et program som sjekker om et tall lagret i variabelen tall er større enn 10. Hvis det er det, skriv ut ""Tallet er stort"".

b) If-else-setning
Skriv et program som sjekker om et tall er partall eller oddetall. Bruk modulus-operatøren (%).

c) Flere betingelser
Lag et program som sjekker alderen din og skriver ut en melding basert på aldersgruppen din (f.eks. ""Du er en tenåring"", ""Du er en voksen"", etc.). */

task(4, 'Conditionals');
let cash = Math.round(Math.random()*100); // let cash = 100;

log("If cash > :");
if (cash > 100) {
    console.log("Mer Cash enn " + cash);
} else {
    console.log("Du har mindre cash enn " + cash);
}

log("if else even or odds :");
if (cash % 2 === 0) {
    log("Cash is even!");
} else {
    log("Cash is odd!");
}

let txt = myName + "'s age group: ";
let year = 2024 - birthday;
if (txt >= 60) {
    log(txt + "Old folk")
} else if (year >= 30 && year < 60) {
    log(txt + "Adult!")
} else if (year >= 18 && year < 30) {
    log(txt + "Young Adult!")
} else if (year >= 0 && year < 18) {
    log(txt + "Minor")
}; 

/* Oppgave 5: Funksjoner

a) Enkel funksjon
Lag en funksjon kalt hils som tar inn et navn som parameter og skriver ut ""Hei, [navn]!"".

b) Funksjon med returverdi
Lag en funksjon kalt leggSammen som tar to tall som parameter og returnerer summen av dem. */

task(5, 'Funksjoner');
function introduction(name) {
    log("Hello! " + name + "!");
}

introduction('John');

function putTogether(x, y) {
    log(x+y);
}

putTogether(5,5)

/* Oppgave 6: Kombinere konsepter

a) Array og funksjoner
Lag en array med navnet tallListe som inneholder tallene 1 til 10. Lag en funksjon kvadrerTall som tar inn et tall og returnerer tallet ganget med seg selv. 
Bruk en løkke til å gå gjennom tallListe og skriv ut kvadratet av hvert tall ved å bruke kvadrerTall-funksjonen.

b) Filtrere arrays
Lag en funksjon erStortTall som tar inn et tall og returnerer true hvis tallet er større enn 5. 
Bruk denne funksjonen til å filtrere ut og skrive ut alle tall større enn 5 i tallListe.

c) Interaktive programmer
Bruk prompt()-funksjonen (hvis du kjører i en nettleser) for å be brukeren om å skrive inn alderen sin. 
Skriv deretter ut en melding som sier om brukeren er gammel nok til å kjøre bil (18 år eller eldre). */



/* Oppgave 7: Mini-prosjekt

a) Gjett tallet-spill
Lag et program der datamaskinen velger et tilfeldig tall mellom 1 og 100. Be brukeren om å gjette tallet. 
For hver gjetning, gi tilbakemelding om tallet er for høyt eller for lavt. Fortsett til brukeren gjetter riktig, og skriv ut hvor mange forsøk det tok.

b) Enkel kalkulator
Lag en funksjon kalkulator som tar inn to tall og en operator ('+', '-', '*', '/') som parameter. 
Funksjonen skal utføre operasjonen på tallene og returnere resultatet. Be brukeren om å skrive inn to tall og en operator, bruk kalkulator-funksjonen og skriv ut resultatet. */