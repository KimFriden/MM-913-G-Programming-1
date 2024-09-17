/*
    Hei.
    Dette er et oppgave sett i MM-912.
    Meningen er å trene på et fåtall ting av gangen. 
    Du gjør dette ved å skrive inn ditt svar etter at en oppgave er gitt (se på eksempelet)

    IKKE endre på kode som er gitt, med mindre oppgaven spesefikt sier at du skal det
*/

/*
    Oppgave: Eksempel
    Skriv koden for å skrive ut alle navnene i listen, et navn per linje
*/
console.log("Oppgave: Eksempel");
const people = ["Tony","Christian","Håkon"];

for(let index = 0; index < people.length; index++){
    let person = people[index];
    console.log(person);
}

/*
    Oppgave: A
    Skriv kode som skriver ut settningen "Debuging er som å være en dektektiv i et krim drama hvor du også er morderen" 
    100 ganger. 
    Husk vi bruker console.log() til å skrive ting ut.
*/
console.log("Oppgave: A");

let repeatCount = 100;
while (repeatCount > 0) {
    console.log("Debuging er som å være en dektektiv i et krim drama hvor du også er morderen");
    repeatCount--;
};

/*
    Oppgave: B
    Følgende kode er feil, kan du fikse feilene?
    Denne er ikke helt enkel, det er syntax feil her og logiske feil.
    Prøv å tenke på hva vi prøver å oppnå.
*/
console.log("Oppgave: B");

let max = 99;
let index = 0;
while (index < max, index++, max--) {
  console.log(max + " flasker med brus i kassa.");
  console.log(max + " flasker med brus.");

  console.log(
    "Ta en ut, drikk den opp. " + (max) + " flasker med brus i kassa"
  );
  console.log("");
}  

console.log("Ingen flere flasker med brus i kassa");

/*
    Oppgave: C
    Deklarere en variabel for tyngdekraft og en variabel for pi og en variabel for antall personer i et rom. 
*/
console.log("Oppgave: C");
let tyngdekraft = 1;
let pi = 3.17;
let antallPersoner = 10;

/*
    Oppgave: D
    Lag en funksjon som legger sammen to tall, funksjonen skal hete add
*/
console.log("Oppgave: D");

function add(a,b){
    return a += b;
};

console.log("3 + 6 = " + add(3,6));
console.log("5673 + 234 = " + add(5673,234));

/*
    Oppgave: E
    Bruk variabelen people fra eksempelet og skriv navna ut i reversert rekke følge (bruk en løkke)
    NB du skal ikke endre på people, bare bruke det som den inneholder.
*/
console.log("Oppgave: E");

for (i = (people.length - 1); i >= 0; i--) {
    console.log(people[i]);
}

/*
    Oppgave: F
    Deklarere en variabel for en liste med telefon nummer. Listen din skal ha minst 3 nummer. 
*/
console.log("Oppgave: D" + " " + `let numbers = ["000 00 000", "111 11 111", "222 22 222"];`);
let numbers = ["000 00 000", "111 11 111", "222 22 222"];

/*
    Oppgave: G
    Skriv ut bare det siste telefon numeret i listen din. 
*/
console.log("Oppgave: G" + " tlf:" + numbers[2]);

/*
    Oppgave: H
    Skriv ut kunn etternavnene for personene i listen, bruk en løkke.
*/
console.log("Oppgave: H");
let personer = [["Christian", "Simonsen"], ["Tony", "Bergholtz"]];

for (let i = 0; i < personer.length; i++){
    console.log(personer[i][1]);
}
