function getComputerChoice() {
    let cChoice = Math.floor(Math.random() * 3);
    if (cChoice == 0) return "rock";
    else if ( cChoice == 1) return "paper";
    else return "scissors";
}

function playRound(cChoice, pChoice) {

    if (cChoice=="rock" && pChoice=="paper") return "You Win, Paper beats Rock!";
    else if (cChoice=="rock" && pChoice=="scissors") return "You Lose, Rock beats Scissors!";
    else if (cChoice=="paper" && pChoice=="rock") return "You Lose, Paper beats Rock!";
    else if (cChoice=="paper" && pChoice=="scissors") return "You Win, Scissors beats Paper!";
    else if (cChoice=="scissors" && pChoice=="rock") return "You Win, Rock beats Scissors!";
    else if (cChoice=="scissors" && pChoice=="paper") return "You Lose, Scissors beats Paper!";
    else if (cChoice==pChoice) return "Its a tie";
}

const cChoice = getComputerChoice();
const pChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
console.log(playRound(cChoice, pChoice));
