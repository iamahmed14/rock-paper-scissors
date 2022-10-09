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

}

function game(pChoice) {

    const cChoice = getComputerChoice();
    
    let win = playRound(cChoice, pChoice)
    if (win=="player") {
        results.innerHTML = ("Yayy, " + pChoice + " beats " + cChoice);
        pScore++;
        updateScores();
    } else if (win=="computer") {
        results.innerHTML = ("Ouch, " + cChoice + " beats " + pChoice);
        cScore++;
        updateScores();
    } else results.innerHTML = (pChoice + " ties to " + cChoice);

    if (pScore==5) {
        results.innerHTML = ("YOU WIN!!");
        cScore = 0;
        pScore = 0;
    } else if (cScore==5) {
        results.innerHTML = ("YOU LOSE!!");
        cScore = 0;
        pScore = 0;
    }
    
}

let pScore = 0;
let cScore = 0;
const scores = document.querySelector('#scores');
function updateScores(){
    scores.innerHTML = ("Player: " + pScore + " Computer: " + cScore);
}
updateScores();

const results = document.querySelector('#results');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.onclick = () => game(button.id);
});
