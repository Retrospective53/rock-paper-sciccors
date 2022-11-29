// Button computer pick
const rockComp = document.querySelector('.rockComp');
const paperComp = document.querySelector('.paperComp');
const sciccorsComp = document.querySelector('.sciccorsComp');

// Computer random pick 
function getComputerChoice() {
    const computerOptions = ['rock','paper','sciccors']
    const computerNumber = Math.floor(Math.random()*3);
    move = computerOptions[computerNumber];
    return move;
}

let computerScore = 0;
let playerScore = 0;
let currentRound = 0;

// Button with playRound function when clicked
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
function printScore() {
    console.log('Your score ' + playerScore);
    console.log('Computer score ' + computerScore);
    yourScoreCount.textContent = playerScore;
    computerScoreCount.textContent = computerScore;
}

// A round of the game with result displayed 
function playRound(playerSelection, computerSelection) {
    if (playerScore == 5 || computerScore == 5) return;

    if (playerScore  > 5 || computerScore > 5) {
        scoreStatusUpdate('You Cheat')
        return;
    };
    playerSelection = this.className;
    computerSelection = getComputerChoice();
    
    if (playerSelection == computerSelection) {
        scoreStatusUpdate('Tie');
        console.log("Tie")
    }
        
    else if (playerSelection == 'rock') {
        if (computerSelection == 'sciccors') {
            playerScore++;
            scoreStatusUpdate('You Win');
            console.log("You Win");
            printScore();
        }
        else {
            computerScore++;
            scoreStatusUpdate('Computer Win');
            console.log("Computer Win");
            printScore();
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerScore++ ;
            scoreStatusUpdate('You Win');
            console.log("You Win");
            printScore();
        }
        else {
            computerScore++ ;
            scoreStatusUpdate('Computer Win');
            console.log("Computer Win");
            printScore();
        }
    }
    else if (playerSelection == 'sciccors') {
        if (computerSelection == 'paper') {
            playerScore++ ;
            scoreStatusUpdate('You Win');
            console.log("You Win");
            printScore();
        }
        else {
            computerScore++ ;
            scoreStatusUpdate('Computer Win');
            console.log("Computer Win");
            printScore();
        }
    }
    else {
        return "Hey you have to pick"
    }
    if (computerSelection == 'rock') {
        rockComp.classList.add('selected');
        paperComp.classList.remove('selected');
        sciccorsComp.classList.remove('selected');
    }
    else if (computerSelection == 'paper') {
        paperComp.classList.add('selected');
        rockComp.classList.remove('selected');
        sciccorsComp.classList.remove('selected');
    }
    else if (computerSelection == 'sciccors') {
        sciccorsComp.classList.add('selected');
        paperComp.classList.remove('selected');
        rockComp.classList.remove('selected');
    }
    if (playerScore == 5) {
        scoreStatusUpdate('Human wins best of five')
        return;
    }
    else if (computerScore == 5) {
        scoreStatusUpdate('Computer wins best of five')
        return;
    }
}

// Best of five game
function game() {
    computerScore = 0;
    playerScore = 0;
    printScore();
}

function roundCount() {

}
btnStart.addEventListener('click', game);


