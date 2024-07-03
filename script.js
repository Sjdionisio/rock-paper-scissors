function getComputerChoice(){

    let random = " "
    switch(Math.floor(Math.random()*3)+1){
        case 1: random = "rock";
        break;
        case 2: random = "paper";
        break;
        case 3: random = "scissors";
    }
    console.log("Computer: "+random);
    return random;
}

function getHumanChoice(){
    let guess = prompt("This is a Rock Paper Scissors Game please type your choice:\nRock/Paper/Scissors","");
    console.log("You: "+guess);
    return guess;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice.toLowerCase() == computerChoice){
        return console.log("Draw");
    }
    else if(humanChoice.toLowerCase()=="rock" && computerChoice=="paper"){
        computerScore++
        console.log("You: "+humanScore+" Computer :"+computerScore);
        console.log("You lost");
    }
    else if(humanChoice.toLowerCase()=="paper" && computerChoice=="scissors"){
        computerScore++
        console.log("You: "+humanScore+" Computer :"+computerScore);
        console.log("You lost");
    }
    else if(humanChoice.toLowerCase()=="scissors" && computerChoice=="rock"){
        computerScore++
        console.log("You: "+humanScore+" Computer :"+computerScore);
        console.log("You lost");
    }
    else if(humanChoice.toLowerCase()=="rock" && computerChoice == "scissors"){
        humanScore++
        console.log("You: "+humanScore+" Computer :"+computerScore);
        console.log("You won");
    }
    else if(humanChoice.toLowerCase()=="paper" && computerChoice == "rock"){
        humanScore++
        console.log("You: "+humanScore+" Computer :"+computerScore);
        console.log("You won");
    }
    else if(humanChoice.toLowerCase()=="scissors" && computerChoice == "paper"){
        humanScore++
        console.log("You: "+humanScore+" Computer :"+computerScore);
        console.log("You won");
    }
    else{
        console.log("Please input a valid choice.");
    }
}


    let humanScore = 0;
    let computerScore = 0;
function playGame(){
    for(let i = 1; i<=5 ; i++){
        const humanSelect = getHumanChoice();
        const compSelect = getComputerChoice();
        playRound(humanSelect,compSelect);
    }
    if(humanScore>computerScore){
        console.log("Final score : You: "+humanScore+" Computer :"+computerScore);
        console.log("Congratulations! You won the game!");
    }
    else if(humanScore<computerScore){
        console.log("Final score : You: "+humanScore+" Computer :"+computerScore);
        console.log("You lost the game.");
    }
    else if(humanScore=computerScore){
        console.log("Final score : You: "+humanScore+" Computer :"+computerScore);
        console.log("It's a draw.");
    }
}

playGame();