// import functions and grab DOM elements
import { didUserWin, getRandomNumber } from './utils.js';

const playButton = document.querySelector('#play-button');
const gameResultEl = document.querySelector('#game-result-el');
const lastPlayerThrowEl = document.querySelector('#last-player-throw-el');
const lastComputerThrowEl = document.querySelector('#last-computer-throw-el');
const totalWinsEl = document.querySelector('#total-wins-el');
const totalLossesEl = document.querySelector('#total-losses-el');
const totalDrawsEl = document.querySelector('#total-draws-el');

// initialize state
let totalWinCount = 0;
let totalLossCount = 0;
let totalDrawCount = 0;

// set event listeners to update state and DOM

playButton.addEventListener('click', () => {
    const randomThrow = getRandomNumber();
    const userThrow = document.querySelector('input:checked').value;
    console.log(userThrow, randomThrow);

    if (didUserWin(userThrow, randomThrow) === 'win') {
        totalWinCount++;
        lastPlayerThrowEl.textContent = userThrow;
        lastComputerThrowEl.textContent = randomThrow;

        //console.log("wins: " + totalWinCount);
    }

    if (didUserWin(userThrow, randomThrow) === 'loss') {
        totalLossCount++;
        lastPlayerThrowEl.textContent = userThrow;
        lastComputerThrowEl.textContent = randomThrow;

        //console.log("Losses: " + totalLossCount);
    }

    if (didUserWin(userThrow, randomThrow) === 'draw') {
        totalDrawCount++;
        lastPlayerThrowEl.textContent = userThrow;
        lastComputerThrowEl.textContent = randomThrow;

        //console.log("Draws: " + totalDrawCount);
    }
});