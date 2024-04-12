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
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function playGame() {
    let numOfTimes = (prompt("How many times do you want to play?"))
    while (!isNumeric(numOfTimes) || +numOfTimes <= 0) {
        numOfTimes = prompt("Invalid input! Please enter a valid input")
    }
    numofTimes = +numOfTimes;
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < numOfTimes; i++) {
        const playerSelection = prompt("What is your pick?");
        const result = playRound(playerSelection, getComputerChoice());
        if (result === -100) {
            i--;
            alert("Invalid input! Choose again");
            continue;
        } else if (result == -1) {
            alert("You lose the round!");
            computerWins++;
        } else if (result == 0) {
            alert("You tie the round!");
        } else {
            alert("You win the round!");
            playerWins++;
        }
        alert(`Current Score: ${playerWins} for the player, ${computerWins} for the computer`);
    }
    if (playerWins > computerWins) {
        alert(`You win! Score: ${playerWins} to ${computerWins}`);
    } else if (computerWins > playerWins) {
        alert(`You lose! Score: ${playerWins} to ${computerWins}`)
    } else {
        alert(`You Tie! Score: ${playerWins} to ${computerWins}`)
    }
}
playGame();
