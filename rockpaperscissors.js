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

function handleHumanChoice(e) {
    choice = e.target.value;
    console.log(choice);
    const humanChoice = choice;
    playRound(humanChoice)
    humanScore.textContent = humanScore.value;
}

function updateScore(choice) {
    switch(choice) {
        case "human":
            humanScore.textContent = humanScore.value;
            return;
        case "computer":
            computerScore.textContent = computerScore.value;
            return;
        default:
            return;
    }
}


function playRound(hChoice) {
    const humanChoice = hChoice;
    const computerChoice = getComputerChoice();

    if (humanChoice === 'rock' && computerChoice === 'scissor') {
        humanScore.value++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore.value++;
    } else if (humanChoice === 'scissor' && computerChoice === 'paper'){
        humanScore.value++;
    } else if (humanChoice === computerChoice){
        result.textContent = "Its a draw!";
        return;
    } else {
        computerScore.value++;
        updateScore("computer");
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        return;
    }

    updateScore("human");
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`
}

function checkGameState() {
    let gameEnd = 0;

    if (humanScore.value === 5) {
        result.textContent = `Congrats! Human wins`
        gameEnd = 1;
    } else if (computerScore.value === 5) {
        result.textContent = `You are a failure, computer wins`
        gameEnd = 1;
    }

    if (gameEnd) hChoiceButton.forEach((btns) => {
        btns.disabled = true;
    });
}

////////// Button setup


let rockBtn = document.createElement("button");
rockBtn.value = 'rock';
rockBtn.textContent = rockBtn.value;

let scissorBtn = document.createElement("button");
scissorBtn.value = 'scissor';
scissorBtn.textContent = scissorBtn.value;

let paperBtn = document.createElement("button");
paperBtn.value = 'paper';
paperBtn.textContent = paperBtn.value;

let buttonContainer = document.createElement("div");
buttonContainer.className = 'button-container'
buttonContainer.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 20px;
`;
buttonContainer.append(rockBtn, paperBtn, scissorBtn);

////////// Scoreboard setup

let humanScore = document.createElement("p"), 
        computerScore = document.createElement("p"),
        humanText = document.createElement("p"),
        computerText = document.createElement("p");

let scoreContainer = document.createElement("div"),
    humanContainer = document.createElement("div"),
    computerContainer = document.createElement("div");

humanScore.value = 0;
humanScore.textContent = humanScore.value;
humanText.textContent = "Human"

computerScore.value = 0;
computerScore.textContent = computerScore.value;
computerText.textContent = "AI"



humanContainer.append(humanScore, humanText);
computerContainer.append(computerScore, computerText);

humanContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50px;
    border: 1px solid blue;
    padding: 2px;
`;

computerContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
    padding: 2px;
    width: 50px;
`;

scoreContainer.className = 'score-container'
scoreContainer.append(humanContainer, computerContainer)
scoreContainer.style.cssText = `
    display: flex;
    gap: 20px;
    justify-content: center;
`;
////////////////////

let result = document.createElement("h3");
result.textContent = "Choose an option";

let optionContainer = document.createElement("div");
optionContainer.append(result, buttonContainer);
optionContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;
optionContainer.className = 'option-container';


//////////// Appending buttons and scoreboard

const gameContainer = document.createElement("div");
gameContainer.append(scoreContainer, optionContainer);
gameContainer.style.cssText = `
    border: 2px dotted black;
    width: 500px;
    margin: 0 auto;
    padding: 10px;
`;

document.body.append(gameContainer);


const hChoiceButton = document.querySelectorAll("button");

hChoiceButton.forEach((currentButton) => {
    currentButton.addEventListener("click", (e) => {
        handleHumanChoice(e);
        checkGameState();
    });
});






