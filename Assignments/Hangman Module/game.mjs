import * as readlinePromises from 'node:readline/promises';
import fs from "node:fs";
const rl = readlinePromises.createInterface({ input: process.stdin, output: process.stdout });

import { HANGMAN_UI } from './graphics.mjs';
import { GREEN, RED, WHITE, RESET } from './colors.mjs';
import { languages } from './languages.mjs';

let word;
let dictionary;
let guessedWord;
let wrongGuesses;
let isGameOver;
let playAgain;
let language;

function initializeGame() {
    word = getRandomWord();
    guessedWord = createGuessList(word.length);
    wrongGuesses = [];
    isGameOver = false;
    playAgain = false;
}

async function startGame() {
    console.clear();
    print("Welcome to Hangman!", GREEN);
    print("===================", GREEN);

    const languageChoice = await rl.question("Choose a language (1 - English, 2 - Norwegian): ");
    dictionary = languageChoice === "1" ? languages.english : languages.norwegian;

    do {
        initializeGame();

        while (!isGameOver) {
            updateUI();

            let guess = (await rl.question(dictionary.guessPrompt)).toLowerCase();

            if (wrongGuesses.includes(guess)) {
                print("You already guessed that letter. Try again!", RED);
                continue;
            }

            if (isWordGuessed(word, guessedWord)) {
                print(dictionary.winCelibration, GREEN);
                isGameOver = true;
            } else if (word.includes(guess)) {
                updateGuessedWord(guess);

                if (isWordGuessed(word, guessedWord)) {
                    print(dictionary.winCelibration, GREEN);
                    isGameOver = true;
                }
            } else {
                print("Wrong guess!", RED);
                wrongGuesses.push(guess);

                if (wrongGuesses.length >= HANGMAN_UI.length - 1) {
                    isGameOver = true;
                    print(dictionary.gameOverMessage, RED);
                }
            }
        }

        updateUI();
        printStatistics();

        const answer = await rl.question(dictionary.playAgainPrompt);
        playAgain = answer.toLowerCase() === "y" || answer.toLowerCase() === "j";
    } while (playAgain);

    rl.close();
}

function updateGuessedWord(guess) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            guessedWord[i] = guess;
        }
    }
}

function createGuessList(length) {
    return Array(length).fill("_");
}

function isWordGuessed(correct, guessedWord) {
    return correct === guessedWord.join("");
}

function print(msg, color = WHITE) {
    console.log(color, msg, RESET);
}

function updateUI() {
    console.clear();
    print(guessedWord.join(" "), GREEN);
    print(HANGMAN_UI[wrongGuesses.length]);
    if (wrongGuesses.length > 0) {
        print(dictionary.wrongGuesses + RED + wrongGuesses.join(", ") + RESET);
    }
}

function getRandomWord() {
    const words = ["kiwi", "car", "dog", "gun"];
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}

function printStatistics() {
    print(`Word: ${word}`, GREEN);
    print(`Wrong guesses: ${wrongGuesses.length}`, RED);
}

startGame();