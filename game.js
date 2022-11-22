/* Computer random pick */
function getComputerChoice() {
    const computerOptions = ['rock','paper','sciccors']
    const computerNumber = Math.floor(Math.random()*3);
    move = computerOptions[computerNumber];
    return move;
}

let computerScore = 0
let playerScore = 0

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Pick').toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        return "Tie"}
    else if (playerSelection == 'rock') {
        if (computerSelection == 'sciccors') {
            playerScore++;
            return "You Win";
        }
        else {
            computerScore++;
            return "You Lose" ;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerScore++ ;
            return "You Win" ;
        }
        else {
            computerScore++ ;
            return "You Lose" ; 
        }
    }
    else if (playerSelection == 'sciccors') {
        if (computerSelection == 'paper') {
            playerScore++ ;
            return "You Win" ; 
        }
        else {
            computerScore++ ;
            return "You Lose" ; 
        }
    }
    else {
        return "Hey you have to pick"
    }
}

function game() {
    for (let i = 0; playerScore < 5 || computerScore <5 ; i++) {
        playRound();
    
    if (playerScore == 5) {
        return "You did it, You Win"
    }
    if (computerScore == 5) {
        return "The Computer Wins"
    }
}
}

