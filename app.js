// import functions and grab DOM elements
import { didUserWin, getRandomNumber, updateUI } from './utils.js';

const playButton = document.querySelector('#play-button');
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

    if (didUserWin(userThrow, randomThrow) === 'win') {
        totalWinCount++;
        totalWinsEl.textContent = totalWinCount;
        updateUI(userThrow, randomThrow);
    }

    if (didUserWin(userThrow, randomThrow) === 'loss') {
        totalLossCount++;
        totalLossesEl.textContent = totalLossCount;
        updateUI(userThrow, randomThrow);
    }

    if (didUserWin(userThrow, randomThrow) === 'draw') {
        totalDrawCount++;
        totalDrawsEl.textContent = totalDrawCount;
        updateUI(userThrow, randomThrow);
    }
});