// Computer random pick 
function getComputerChoice() {
    const computerOptions = ['rock','paper','sciccors']
    const computerNumber = Math.floor(Math.random()*3);
    move = computerOptions[computerNumber];
    return move;
}

let computerScore = 0;
let playerScore = 0;
const btnStart = document.querySelector('.btnStartGame');
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnSciccors = document.querySelector('.sciccors');
btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnSciccors.addEventListener('click', playRound);

// Display score
const yourScoreCount = document.querySelector('.yourScoreCount');
const computerScoreCount = document.querySelector('.computerScoreCount');
const scoreStatus = document.querySelector('.status');
function scoreStatusUpdate(e) {
    scoreStatus.textContent = e;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = this.className;
    computerSelection = getComputerChoice();
    function printScore() {
        console.log('Your score ' + playerScore);
        console.log('Computer score ' + computerScore);
        yourScoreCount.textContent = playerScore;
        computerScoreCount.textContent = computerScore;
    }
    if (playerSelection == computerSelection) {
        scoreStatusUpdate('Tie');
        console.log("Tie")}
    else if (playerSelection == 'rock') {
        if (computerSelection == 'sciccors') {
            playerScore++;
            scoreStatusUpdate('You Win')
            console.log("You Win");
            printScore();
        }
        else {
            computerScore++;
            scoreStatusUpdate('Computer Win')
            console.log("Computer Win");
            printScore();
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerScore++ ;
            scoreStatusUpdate('You Win')
            console.log("You Win");
            printScore();
        }
        else {
            computerScore++ ;
            scoreStatusUpdate('Computer Win')
            console.log("Computer Win");
            printScore();
        }
    }
    else if (playerSelection == 'sciccors') {
        if (computerSelection == 'paper') {
            playerScore++ ;
            scoreStatusUpdate('You Win')
            console.log("You Win");
            printScore();
        }
        else {
            computerScore++ ;
            scoreStatusUpdate('Computer Win')
            console.log("Computer Win");
            printScore();
        }
    }
    else {
        return "Hey you have to pick"
    }
}

function game() {
    //for (let i = 0; playerScore < 5 || computerScore <5 ; playRound) {
    computerScore = 0;
    playerScore = 0;
    if (playerScore == 5) {
        console.log(playerScore + ' vs ' + computerScore + "You did it, You Win");
    }
    if (computerScore == 5) {
        console.log(playerScore + ' vs ' + computerScore + "The Computer Wins");
    }
}
btnStart.addEventListener('click', game);


