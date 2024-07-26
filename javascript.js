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

    // All iterations of player choosing rock
    if (
        humanChoice.toLowerCase() === "rock" ||
        humanChoice.toLowerCase() === "r"
    ) {
        if (computerChoice === "paper") {
            computerScore++;
            div.textContent = `You lose. Paper beats rock. Your score: ${humanScore} Computer score: ${computerScore}`;
        } else if (computerChoice === "scissors") {
            humanScore++;
            div.textContent = `You win! Rock beats scissors. Your score: ${humanScore} Computer score: ${computerScore}`;
        } else {
            div.textContent = `It's a tie. Your score: ${humanScore} Computer score: ${computerScore}`;
        }
    }

    // All iterations of player choosing paper
    else if (
        humanChoice.toLowerCase() === "paper" ||
        humanChoice.toLowerCase() === "p"
    ) {
        if (computerChoice === "paper") {
            div.textContent = `It's a tie. Your score: ${humanScore} Computer score: ${computerScore}`;
        } else if (computerChoice === "scissors") {
            computerScore++;
            div.textContent = `You lose. Scissors beats paper. Your score: ${humanScore} Computer score: ${computerScore}`;
        } else {
            humanScore++;
            div.textContent = `You win! Paper beats rock. Your score: ${humanScore} Computer score: ${computerScore}`;
        }
    }

    // All iterations of player choosing scissors
    else if (
        humanChoice.toLowerCase() === "scissors" ||
        humanChoice.toLowerCase() === "s"
    ) {
        if (computerChoice === "paper") {
            humanScore++;
            div.textContent = `You win! Scissors beats paper. Your score: ${humanScore} Computer score: ${computerScore}`;
        } else if (computerChoice === "scissors") {
            div.textContent = `It's a tie. Your score: ${humanScore} Computer score: ${computerScore}`;
        } else {
            computerScore++;
            div.textContent = `You lose. Rock beats scissors. Your score: ${humanScore} Computer score: ${computerScore}`;
        }
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
    while (results.childNodes.length > 5) {
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

// playGame();
