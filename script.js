function getComputerChoice() {
    let cChoice = Math.floor(Math.random() * 3);
    if (cChoice == 0) return "rock";
    else if ( cChoice == 1) return "paper";
    else return "scissors";
}

function playRound(cChoice, pChoice) {

    if ((cChoice=="rock" && pChoice=="paper") ||
    (cChoice=="paper" && pChoice=="scissors") ||
    (cChoice=="scissors" && pChoice=="rock"))
        return "player";

    else if ((cChoice=="rock" && pChoice=="scissors") ||
    (cChoice=="paper" && pChoice=="rock") ||
    (cChoice=="scissors" && pChoice=="paper"))
        return "computer";

    else if (cChoice==pChoice)
        return "tie";
}

function game() {

    for (let i=0; i<5; i++) {

        const cChoice = getComputerChoice();
        const pChoice = prompt("Rock, Paper, Scissors?").toLowerCase();

        let win = playRound(cChoice, pChoice)
        if (win=="player") {
            console.log("You Win, " + pChoice + " beats " + cChoice);

        } else if (win=="computer") {
            console.log("You Lose, " + cChoice + " beats " + pChoice);

        } else if (win=="tie") {
            console.log("Its a tie!");
        }
    }
}

game();