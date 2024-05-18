function getComputerChoice() {
    const val = Math.floor(Math.random()*3);
    if (val === 0) {
        return "Rock";
    } else if (val === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
let playerWins = 0;
let computerWins = 0;
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.at(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
    if (playerSelection === "Rock" && computerSelection === "Paper"
        || playerSelection === "Paper" && computerSelection === "Scissors"
        || playerSelection === "Scissors" && computerSelection === "Rock") {
        return -1;
    } else if (playerSelection === computerSelection) {
        return 0;
    } else if (playerSelection != "Rock" && playerSelection != "Paper"
                && playerSelection != "Scissors") {
                    return -100;
                }
    return 1;
}
function process(result) {
    if (result == -1) {
        computerWins++;
        return "You lose the round!";
    } else if (result == 0) {
        return "You tie the round!"
    } else {
        playerWins++;
        return "You win the round!";
    }
}
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}
function callRock() {
    const result = process(playRound("Rock", getComputerChoice()));
    const display = document.querySelector("div");
    display.textContent = result + ` Current Score: ${playerWins} for the player, ${computerWins} for the computer`;
    check();
}
function callScissors() {
    const result = process(playRound("Scissors", getComputerChoice()));
    const display = document.querySelector("div");
    display.textContent = result + ` Current Score: ${playerWins} for the player, ${computerWins} for the computer`;
    check();
}
function callPaper() {
    const result = process(playRound("Paper", getComputerChoice()));
    const display = document.querySelector("div");
    display.textContent = result + ` Current Score: ${playerWins} for the player, ${computerWins} for the computer`;
    check();
    
}
function check() {
    if (playerWins < 5 && computerWins < 5) return;
    if (playerWins > computerWins) {
        alert(`You win! Score: ${playerWins} to ${computerWins}`);
    } else if (computerWins > playerWins) {
        alert(`You lose! Score: ${playerWins} to ${computerWins}`)
    } else {
        alert(`You Tie! Score: ${playerWins} to ${computerWins}`)
    }
}
function playGame() {
    const rock = document.createElement("button");
    rock.textContent = "Rock";
    rock.addEventListener("click", callRock);
    const paper = document.createElement("button");
    paper.textContent = "Paper";
    paper.addEventListener("click", callPaper);
    const scissors = document.createElement("button");
    scissors.textContent ="Scissors";
    scissors.addEventListener("click", callScissors);
    const body = document.querySelector("body");
    body.appendChild(rock);
    body.appendChild(paper);
    body.appendChild(scissors);
    
    const display = document.createElement("div");
    body.appendChild(display);
}
playGame();
