
let guess = '';

function choseButton(coinSide) {
    const randomNumber = Math.random();
    let result = randomNumber < 0.5 ? 'heads' : 'tails';
    console.log(result)

    guess = coinSide;
    console.log('You choses heads')

    const message = result == guess ? 'You win!' : 'You lose!'
    console.log(message)

    if (message === 'You win!' ) {
        score.wins += 1;
    } else {
        score.losses += 1;
    }

    alert(`The coin landed on ${result}. ${message}\nWins: ${score.wins}, Losses: ${score.losses}`);

    localStorage.setItem('score', JSON.stringify(score));

}

function resetCounter() {
    score.wins = 0;
    score.losses = 0;
    alert('Score has been reset.');
    localStorage.removeItem('score');
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0
};