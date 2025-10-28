function pickComputerMove() {
    const randomNumber = Math.random()
    
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber > 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber > 2/3 && randomNumber < 3/3) {
        computerMove = 'Scissors';
    }
    
    return computerMove;
}	

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

document.querySelector('.js-reset-score-button')
    .addEventListener('click', () => {
        resetScore();
    })

function resetScore() {
    let html = `
        <p>Are you sure you want to reset the score?</p>
        <button class="js-yes-button question-button">Yes</button>
        <button class="js-no-button question-button">No</button>
    `;
    document.querySelector('.js-reset-question')
        .innerHTML = html

    document.querySelector('.js-yes-button')
        .addEventListener('click', () => {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            html = '';
            document.querySelector('.js-reset-question')
                .innerHTML = html
            alert('Score has been reset.');
            localStorage.removeItem('score');
            updateScoreElement();
        })
    document.querySelector('.js-no-button')
        .addEventListener('click', () => {
            html = '';
            document.querySelector('.js-reset-question')
                .innerHTML = html
            return;
        })
}

let isAutoPlay = false;

let intervalId;

document.querySelector('.js-auto-play-button')
    .addEventListener('click', () => {
        autoPlay();
        if (isAutoPlay) {
            document.querySelector('.js-auto-play-button')
            .innerHTML = 'Stop Play';
        } else if (!isAutoPlay) {
            document.querySelector('.js-auto-play-button')
            .innerHTML = 'Auto Play';
        }
    });

function autoPlay() {
    if (!isAutoPlay) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000)
        
            isAutoPlay = true;
        } else {
        clearInterval(intervalId);
        isAutoPlay = false;
    }
}

document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('rock');   
    });

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('paper');
    });

document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('scissors');
    });

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    } else if (event.key === 'a') {
        autoPlay();
    } else if (event.key === 'Backspace') {
        resetScore();
    }
});
function playGame(playerMove) {
    const computerMove = pickComputerMove();
    
    let result = '';
    
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove == 'paper') {
            result = 'You lose.';
        } else {
            result = 'You win';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove == 'paper') {
            result = 'Tie.';
        } else {
            result = 'You lose.';
        }
        
    } else {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove == 'paper') {
            result = 'You win.';
        } else {
            result = 'Tie.';
        }
	}
        
	if (result === 'You win.') {
		score.wins += 1;
	} else if (result === 'You lose.') {
		score.losses += 1;
	} else {
		score.ties += 1;
	}
	
	localStorage.setItem('score', JSON.stringify(score));

	document.querySelector('.js-result')
		.innerHTML = result;

	document.querySelector('.js-moves')
		.innerHTML = `You
			<img src="Images/${playerMove}-emoji.png" class="move-icon">
			<img src="Images/${computerMove}-emoji.png" class="move-icon">
			Computer`;

	updateScoreElement();
}

function updateScoreElement() {
	document.querySelector('.js-score')
		.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
