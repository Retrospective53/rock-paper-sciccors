function getComputerChoice(move) {
    const computerOptions = ['Rock','Paper','Sciccors']
    const computerNumber = Math.floor(Math.random()*3);
    move = computerOptions[computerNumber];
    return move;
}

