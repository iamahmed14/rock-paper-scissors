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

    let cScore = 0;
    let pScore = 0;
    for (let i=0; i<5; i++) {

        const cChoice = getComputerChoice();
        const pChoice = prompt("Rock, Paper, Scissors?").toLowerCase();

        let win = playRound(cChoice, pChoice)
        if (win=="player") {
            console.log("You Win, " + pChoice + " beats " + cChoice);
            pScore++;

        } else if (win=="computer") {
            console.log("You Lose, " + cChoice + " beats " + pChoice);
            cScore++;

        } else if (win=="tie") {
            console.log("Its a tie!");
        }
    }
    console.log("Your Score = " + pScore + ", Computer Score = " + cScore);

    if (pScore > cScore)
        console.log("WINNER WINNER CHICKEN DINNER!");
    else if (pScore < cScore)
        console.log("Better luck next time");
    else
        console.log("TIEEEE");

}

game();