// import functions and grab DOM elements
import { didUserWin, getRandomNumber, updateUI, resetButton } from './utils.js';

const playButton = document.querySelector('#play-button');
const totalWinsEl = document.querySelector('#total-wins-el');
const totalLossesEl = document.querySelector('#total-losses-el');
const totalDrawsEl = document.querySelector('#total-draws-el');
const resetCountEl = document.querySelector('#reset-count');

// initialize state
let totalWinCount = 0;
let totalLossCount = 0;
let totalDrawCount = 0;
let resetCount = 0;

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

resetButton.addEventListener('click', () => {
    totalWinCount = 0;
    totalLossCount = 0;
    totalDrawCount = 0;
    totalWinsEl.textContent = 0;
    totalLossesEl.textContent = 0;
    totalDrawsEl.textContent = 0;
    resetCount++;
    resetCountEl.textContent = resetCount;
})