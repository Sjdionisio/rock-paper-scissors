const choices = document.querySelector(".choices");
const humanScore = document.querySelector(".humanScore");
const computerScore = document.querySelector(".computerScore");
const result = document.querySelector(".result");
function getComputerChoice(){

    let random = " "
    switch(Math.floor(Math.random()*3)+1){
        case 1: random = "rock";
        break;
        case 2: random = "paper";
        break;
        case 3: random = "scissors";
    }
    result.textContent = "Computer has chosen "+random+". ";
    return random;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        result.textContent += "It's a draw."
    }
    else if(humanChoice =="rock" && computerChoice=="paper"){
        computerScore.value++;
        result.textContent += "You lost."
    }
    else if(humanChoice =="paper" && computerChoice=="scissors"){
        computerScore.value++;
        result.textContent += "You lost."
    }
    else if(humanChoice =="scissors" && computerChoice=="rock"){
        computerScore.value++;
        result.textContent += "You lost."
    }
    else{
        humanScore.value++;
        result.textContent += "You won!"
    }

}

choices.addEventListener("click",(event)=>{
    let target = event.target;
    const computerChoice = getComputerChoice();
    switch(target.id){
        case 'rockBtn':
            const playGame = playRound("rock",computerChoice);
            break;
        case 'paperBtn':
            const playGame2 = playRound("paper",computerChoice);
            break;
        case 'scissorsBtn':
            const playGame3 = playRound("scissors",computerChoice);
            break;
    }
    if(humanScore.value==5){
        result.textContent = "Congratulations! You've won the game!!!"
        humanScore.value = "";
        computerScore.value = "";
    }
    else if(computerScore.value==5){
        result.textContent = "The Computer has won the game. Better luck next time."
        humanScore.value = "";
        computerScore.value = "";
    }
});














