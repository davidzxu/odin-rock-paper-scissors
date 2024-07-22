function getComputerChoice() {
    let computerChoice = "rock";
    // let randomNum = Math.ceil(Math.random() * 3);
    // if (randomNum === 1) {
    //     computerChoice = "rock";
    // } else if (randomNum === 2) {
    //     computerChoice = "paper";
    // } else {
    //     computerChoice = "scissors";
    // }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors? Type q to quit.", "");
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {
    // Player enters an invalid choice
    if (
        humanChoice === null ||
        (humanChoice.toLowerCase() !== "rock" &&
            humanChoice.toLowerCase() !== "r" &&
            humanChoice.toLowerCase() !== "paper" &&
            humanChoice.toLowerCase() !== "p" &&
            humanChoice.toLowerCase() !== "scissors" &&
            humanChoice.toLowerCase() !== "s")
    ) {
        console.log("You entered an invalid choice. Try again.");
    }
    // All iterations of player choosing rock
    else if (
        (humanChoice.toLowerCase() === "rock" ||
            humanChoice.toLowerCase() === "r") &&
        computerChoice === "paper"
    ) {
        console.log("You lose. Paper beats rock.");
        computerScore++;
    } else if (
        (humanChoice.toLowerCase() === "rock" ||
            humanChoice.toLowerCase() === "r") &&
        computerChoice === "scissors"
    ) {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if (
        (humanChoice.toLowerCase() === "rock" ||
            humanChoice.toLowerCase() === "r") &&
        computerChoice === "rock"
    ) {
        console.log("It's a tie.");
    }
    // All iterations of player choosing paper
    else if (
        (humanChoice.toLowerCase() === "paper" ||
            humanChoice.toLowerCase() === "p") &&
        computerChoice === "paper"
    ) {
        console.log("It's a tie.");
    } else if (
        (humanChoice.toLowerCase() === "paper" ||
            humanChoice.toLowerCase() === "p") &&
        computerChoice === "scissors"
    ) {
        console.log("You lose. Scissors beats paper.");
        computerScore++;
    } else if (
        (humanChoice.toLowerCase() === "paper" ||
            humanChoice.toLowerCase() === "p") &&
        computerChoice === "rock"
    ) {
        console.log("You win! Paper beats rock.");
        humanScore++;
    }
    // All iterations of player choosing scissors
    else if (
        (humanChoice.toLowerCase() === "scissors" ||
            humanChoice.toLowerCase() === "s") &&
        computerChoice === "paper"
    ) {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    } else if (
        (humanChoice.toLowerCase() === "scissors" ||
            humanChoice.toLowerCase() === "s") &&
        computerChoice === "scissors"
    ) {
        console.log("It's a tie.");
    } else if (
        (humanChoice.toLowerCase() === "scissors" ||
            humanChoice.toLowerCase() === "s") &&
        computerChoice === "rock"
    ) {
        console.log("You lose. Rock beats scissors.");
        computerScore++;
    }
}

let humanScore = 0;
let computerScore = 0;

playRound(getComputerChoice(), getHumanChoice());
