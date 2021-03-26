// import functions and grab DOM elements
import { didUserWin, getRandomNumber, updateUI, resetButton } from './utils.js';

const playButton = document.querySelector('#play-button');
const totalWinsEl = document.querySelector('#total-wins-el');
const totalLossesEl = document.querySelector('#total-losses-el');
const totalDrawsEl = document.querySelector('#total-draws-el');
const resetCountEl = document.querySelector('#reset-count');
const roundCountEl = document.querySelector('#round-count');
const vsEl = document.querySelector('#vs');
const humanHandsEl = document.querySelector('#human-hands');
const robotHandsEl = document.querySelector('#robot-hands');
const humanPlayer = document.querySelector('#human-player');
const robotPlayer = document.querySelector('#robot-player');

// initialize state
let totalWinCount = 0;
let totalLossCount = 0;
let totalDrawCount = 0;
let resetCount = 1;
let roundCount = 1;

// set event listeners to update state and DOM

playButton.addEventListener('click', () => {
    const randomThrow = getRandomNumber();
    const userThrow = document.querySelector('input:checked').value;
    roundCount++;
    roundCountEl.textContent = roundCount;
    humanHandsEl.classList.remove('hidden');
    robotHandsEl.classList.remove('hidden');
    vsEl.classList.add('outcome');

    if (didUserWin(userThrow, randomThrow) === 'win') {
        totalWinCount++;
        totalWinsEl.textContent = totalWinCount;
        updateUI(userThrow, randomThrow);
        vsEl.textContent = 'WIN';
    }

    if (didUserWin(userThrow, randomThrow) === 'loss') {
        totalLossCount++;
        totalLossesEl.textContent = totalLossCount;
        updateUI(userThrow, randomThrow);
        vsEl.textContent = 'LOSE';
    }

    if (didUserWin(userThrow, randomThrow) === 'draw') {
        totalDrawCount++;
        totalDrawsEl.textContent = totalDrawCount;
        updateUI(userThrow, randomThrow);
        vsEl.textContent = 'DRAW';
    }
});

resetButton.addEventListener('click', () => {
    totalWinCount = 0;
    totalLossCount = 0;
    totalDrawCount = 0;
    roundCount = 1;
    roundCountEl.textContent = '1';
    totalWinsEl.textContent = 0;
    totalLossesEl.textContent = 0;
    totalDrawsEl.textContent = 0;
    resetCount++;
    resetCountEl.textContent = resetCount;
    vsEl.classList.remove('outcome');
    vsEl.textContent = 'VS';
    robotHandsEl.classList.add('hidden');
    humanHandsEl.classList.add('hidden');
    humanPlayer.classList.remove('hidden');
    robotPlayer.classList.remove('hidden');
});