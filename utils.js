export function getRandomThrow() {
    let randomThrow = Math.round(Math.random() * 3);
    if (randomThrow === 0) return 'rock';
    if (randomThrow === 1) return 'paper';
    if (randomThrow === 3) return 'scissors';
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