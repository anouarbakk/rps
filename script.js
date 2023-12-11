function playRound() {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let choice = playerSelection.toLowerCase();

    let computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    let result = "";

    switch (choice) {
        case "rock":
            if (computerChoice === "paper") {
                result = "You lose! Paper beats Rock";
            } else if (computerChoice === "scissors") {
                result = "You win! Rock beats Scissors";
            } else {
                result = "It's a tie!";
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                result = "You win! Paper beats Rock";
            } else if (computerChoice === "scissors") {
                result = "You lose! Scissors beats Paper";
            } else {
                result = "It's a tie!";
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                result = "You lose! Rock beats Scissors";
            } else if (computerChoice === "paper") {
                result = "You win! Scissors beats Paper";
            } else {
                result = "It's a tie!";
            }
            break;
    }

    console.log(result);
    return result;
}


for(let i = 0; i < 5; i++){
    playRound();
}
 



