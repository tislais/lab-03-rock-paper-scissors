const gameResultEl = document.querySelector('#game-result-el');
const lastPlayerThrowEl = document.querySelector('#last-player-throw-el');
const lastComputerThrowEl = document.querySelector('#last-computer-throw-el');

export const resetButton = document.querySelector('#reset-button');

export function getRandomNumber() {
    let randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber === 1) return 'rock';
    if (randomNumber === 2) return 'paper';
    if (randomNumber === 3) return 'scissors';
}

export function didUserWin(player, computer) {

    // Player and computer choose the same
    if (player === computer) return 'draw';

    // Player: ROCK -- Computer: PAPER or SCISSORS
    if (player === 'rock' && computer === 'paper') return 'loss';
    if (player === 'rock' && computer === 'scissors') return 'win';

    // Player: PAPER -- Computer: ROCK or SCISSORS
    if (player === 'paper' && computer === 'rock') return 'win';
    if (player === 'paper' && computer === 'scissors') return 'loss';

    // Player: SCISSORS -- Computer: PAPER or ROCK
    if (player === 'scissors' && computer === 'paper') return 'win';
    if (player === 'scissors' && computer === 'rock') return 'loss';

}

export function updateUI(player, computer){
    gameResultEl.classList.remove('hidden');
    resetButton.classList.remove('hidden');
    lastPlayerThrowEl.textContent = player;
    lastComputerThrowEl.textContent = computer;
}