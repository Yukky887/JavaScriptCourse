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

        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`)

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove == 'paper') {
            result = 'Tie.';
        } else {
            result = 'You lose.';
        }

        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`)
        
    } else {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove == 'paper') {
            result = 'You win.';
        } else {
            result = 'Tie.';
        }
        
        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`)
    }
}