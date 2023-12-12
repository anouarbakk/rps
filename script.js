let scoreplayer=0;
let scorecomputer=0;
function playRound(playerSelection) {
    let computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    let result = "";
    switch (playerSelection) {
        case "rock":
            if (computerChoice === "paper") {
                result = "You lose! Paper beats Rock";
                scorecomputer++;
            } else if (computerChoice === "scissors") {
                result = "You win! Rock beats Scissors";
                scoreplayer++;
            } else {
                result = "It's a tie!";
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                result = "You win! Paper beats Rock";
                scoreplayer++;
            } else if (computerChoice === "scissors") {
                result = "You lose! Scissors beats Paper";
                scorecomputer++;
            } else {
                result = "It's a tie!";
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                result = "You lose! Rock beats Scissors";
                scorecomputer++;
            } else if (computerChoice === "paper") {
                result = "You win! Scissors beats Paper";
                scoreplayer++;
            } else {
                result = "It's a tie!";
            }
            break;
    }

    console.log(result);
    return result;
}
function updatescore(result){
    let resdiv=document.querySelector("#result");
    resdiv.textContent=result;
    let winner=document.querySelector("#winner");
if(scoreplayer===5){
    winner.textContent="You win!";
    reset();
}
else if(scorecomputer===5){
    winner.textContent="You lose!";
    reset();
}
}

function r() {
    let playerSelection = "rock";
    let result=playRound(playerSelection);
    updatescore(result);
    updateScoreDisplay();
}
function p() {
    let playerSelection = "paper";
    let result=playRound(playerSelection);
    updatescore(result);
    updateScoreDisplay();
}
function s() {
    let playerSelection = "scissors";
    let result=playRound(playerSelection);
    updatescore(result);
    updateScoreDisplay();
}
function updateScoreDisplay() {
    let scorediv = document.querySelector("#score");
    scorediv.textContent = `Player: ${scoreplayer} - Computer: ${scorecomputer}`;
}
function reset() {
    if (scoreplayer === 5 || scorecomputer === 5) {
        scoreplayer = 0;
        scorecomputer = 0;
        updateScoreDisplay();
        let resdiv=document.querySelector("#result");
        resdiv.textContent="";
    
    }
}
let rock=document.querySelector("#rock");
rock.addEventListener("click",r);
let paper=document.querySelector("#paper");
paper.addEventListener("click",p);
let scissors=document.querySelector("#scissors");
scissors.addEventListener("click",s);







 



