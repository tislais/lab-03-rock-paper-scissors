const gameResultEl = document.querySelector('#game-result-el');
const humanPlayer = document.querySelector('#human-player');
const humanRock = document.querySelector('#human-rock');
const humanPaper = document.querySelector('#human-paper');
const humanScissors = document.querySelector('#human-scissors');
const robotPlayer = document.querySelector('#robot-player');
const robotRock = document.querySelector('#robot-rock');
const robotPaper = document.querySelector('#robot-paper');
const robotScissors = document.querySelector('#robot-scissors');

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

    humanPlayer.classList.add('hidden');
    humanRock.classList.add('hidden');
    humanPaper.classList.add('hidden');
    humanScissors.classList.add('hidden');

    robotPlayer.classList.add('hidden');
    robotRock.classList.add('hidden');
    robotPaper.classList.add('hidden');
    robotScissors.classList.add('hidden');

    if (player === 'rock') humanRock.classList.remove('hidden');
    if (player === 'paper') humanPaper.classList.remove('hidden');
    if (player === 'scissors') humanScissors.classList.remove('hidden');

    if (computer === 'rock') robotRock.classList.remove('hidden');
    if (computer === 'paper') robotPaper.classList.remove('hidden');
    if (computer === 'scissors') robotScissors.classList.remove('hidden');
    
}