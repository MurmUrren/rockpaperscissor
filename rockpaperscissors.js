function getComputerChoice() {
    const number = Math.random();
    console.log(number);

    let choice = null;

    if (number >= 0 && number <= 0.2) {
        choice = 'paper'
    } else if (number <= 0.6) {
        choice = 'rock'
    } else {
        choice = 'scissor'
    }

    console.log(choice);
    return choice;
}

function getHumanChoice() {
    let humanChoice = null

    while (true) {
        humanChoice = prompt("What do you choose? rock, paper or scissor");

        if (humanChoice != 'paper' && humanChoice != 'rock' && humanChoice != 'scissor'){
            alert('Invalid option')
        } else {
            break;
        }

    }
    
    humanChoice = humanChoice.toLowerCase();

    console.log(humanChoice);

    return humanChoice;
}


function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === 'rock' && computerChoice === 'scissor') {
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
    } else if (humanChoice === 'scissor' && computerChoice === 'paper'){
        humanScore++;
    } else if (humanChoice === computerChoice){
        console.log(`Its a draw!`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return;
    }
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
}

function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        playRound();
    }

    console.log(humanScore)
    console.log(computerScore)
    
    if (humanScore > computerScore) {
        console.log(`Congrats! Human wins ${humanScore} vs ${computerScore}`)
    } else {
        console.log(`You are a failure, computer wins ${computerScore} vs ${humanScore}`)
    }
}

let humanScore = 0, computerScore = 0;

playGame(5);




