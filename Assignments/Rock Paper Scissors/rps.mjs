import GAME_DICTIONARY from "./dictionary.mjs";
import * as readlinePromises from 'node:readline/promises';
import { getRandomItemFromArray } from './lib/random.mjs';
const rl = readlinePromises.createInterface({ input: process.stdin, output: process.stdout });

const playerChoices = {rock: 1, paper: 2, scissors: 3};
const list_of_playerChoices = [playerChoices.rock, playerChoices.paper, playerChoices.scissors];
const LANGUAGES = ['en', 'no'];
let currentLanguage = 'no';
let intro = "On";

async function Game() {
    while (true) {
        if (intro == "On") {
           await showStartScreen();
           await rl.question("");
           intro = "Off";
        }
        const playerChoice = await askForPlayerChoice();
        const aiChoice = makeAIChoice();
        const result = evaluateWinner(aiChoice, playerChoice);

        print(GAME_DICTIONARY[currentLanguage].aiChose + " " + getChoiceName(aiChoice));
        print(result);

        if (await askToPlayAgain() === false) {
            break;
        }
    }
    process.exit();
}

function showStartScreen() {
    print(`${GAME_DICTIONARY[currentLanguage].title}`);
};

async function askForPlayerChoice() {
    let choice = null;

    do {
        print(GAME_DICTIONARY[currentLanguage].selectionQuestion);
        let rawChoice = await rl.question("");
        rawChoice = rawChoice.toLowerCase();
        choice = evaluatePlayerChoice(rawChoice);
    } while (choice == null)

    return choice;
};

function evaluatePlayerChoice(rawChoice) {
    let choice = null;

    if (rawChoice == GAME_DICTIONARY[currentLanguage].rock) {
        choice = playerChoices.rock;
    } else if (rawChoice == GAME_DICTIONARY[currentLanguage].paper) {
        choice = playerChoices.paper;
    } else if (rawChoice == GAME_DICTIONARY[currentLanguage].scissors) {
        choice = playerChoices.scissors;
    }
    return choice;
}

async function askToPlayAgain() {
    print(GAME_DICTIONARY[currentLanguage].playAgainPrompt);
    const answer = await rl.question("");
    return answer.toLowerCase() === GAME_DICTIONARY[currentLanguage].playAgainYes.toLowerCase();
}

function print(text) {
    console.log(text);
};

function makeAIChoice() {
    return getRandomItemFromArray(list_of_playerChoices);
}

function evaluateWinner(p1Ch, p2Ch) {
    if (p1Ch == p2Ch) {
        return GAME_DICTIONARY[currentLanguage].draw;
    } else if (
        (p1Ch == playerChoices.rock && p2Ch == playerChoices.scissors) ||
        (p1Ch == playerChoices.paper && p2Ch == playerChoices.rock) ||
        (p1Ch == playerChoices.scissors && p2Ch == playerChoices.paper)
    ) {
        return GAME_DICTIONARY[currentLanguage].player2;
    } else {
        return GAME_DICTIONARY[currentLanguage].player1;
    }
}

function getChoiceName(choice) {
    if (choice === playerChoices.rock) return GAME_DICTIONARY[currentLanguage].rock;
    if (choice === playerChoices.paper) return GAME_DICTIONARY[currentLanguage].paper;
    if (choice === playerChoices.scissors) return GAME_DICTIONARY[currentLanguage].scissors;
}

Game();