function getComputerChoice() {
    const computerOptions = ['rock','paper','sciccors']
    const computerNumber = Math.floor(Math.random()*3);
    move = computerOptions[computerNumber];
    return move;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Pick').toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        return "Tie"}
    else if (playerSelection == 'rock') {
        if (computerSelection == 'sciccors') {
            return "You Win"
        }
        else {
            return "You Lose"
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return "You Win"
        }
        else {
            return "You Lose"
        }
    }
    else if (playerSelection == 'sciccors') {
        if (computerSelection == 'paper') {
            return "You Win"
        }
        else {
            return "You Lose"
        }
    }
    else {
        return "Hey you have to pick"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

/* How do we know which one is the winner
game of 5
if not 5 games then keep playing

count the win lose*/
