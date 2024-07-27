function getComputerChoice() {
    let computerChoice = "";
    let randomNum = Math.ceil(Math.random() * 3);
    if (randomNum === 1) {
        computerChoice = "rock";
    } else if (randomNum === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function playRound(computerChoice, humanChoice) {
    const div = document.createElement("div");
    const linebreak = document.createElement("br");
    if (humanScore === 5 || computerScore === 5) {
        resetGame();
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        div.textContent = `WIN - ${humanChoice} vs ${computerChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        div.textContent = `LOSS - ${humanChoice} vs ${computerChoice}`;
    } else {
        div.textContent = `TIE - ${humanChoice} vs ${computerChoice}`;
    }

    results.appendChild(div);
    results.appendChild(linebreak);

    humanScoreDisplay.textContent = `You: ${humanScore}`;
    computerScoreDisplay.textContent = `Cpu: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        determineWinner();
    }
}

function determineWinner() {
    const gameEndMsg = document.createElement("div");
    if (humanScore < computerScore) {
        gameEndMsg.textContent = "GAME RESULT: LOSS";
    } else if (humanScore === computerScore) {
        gameEndMsg.textContent = "GAME RESULT: TIE";
    } else {
        gameEndMsg.textContent = "GAME RESULT: WIN!!!";
    }

    results.appendChild(gameEndMsg);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = `You: ${humanScore}`;
    computerScoreDisplay.textContent = `Cpu: ${computerScore}`;
    while (results.childNodes.length > 3) {
        results.removeChild(results.lastChild);
    }
}

let humanScore = 0;
let computerScore = 0;

const results = document.querySelector(".results");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset = document.querySelector(".reset");
const humanScoreDisplay = document.querySelector(".humanScore");
const computerScoreDisplay = document.querySelector(".computerScore");

rock.addEventListener("click", () => playRound(getComputerChoice(), "rock"));
paper.addEventListener("click", () => playRound(getComputerChoice(), "paper"));
scissors.addEventListener("click", () =>
    playRound(getComputerChoice(), "scissors")
);
reset.addEventListener("click", () => resetGame());
