function computerPlay(){
    min = Math.ceil(1);
    max = Math.floor(4);
    play = Math.floor(Math.random() * (max - min) + min);
    if(play == 1){
        return "Rock";
    }
    else if(play == 2){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

function singleRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock"){
        return("Draw");
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper"){
        return("Draw");
    }
    else if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "scissor"){
        return("Draw");
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissor"){
        return("You win! " + playerSelection.toLowerCase() + " beats " + computerSelection.toLowerCase());
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        return("You win! " + playerSelection.toLowerCase() + " beats " + computerSelection.toLowerCase());
    }
    else if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper"){
        return("You win! " + playerSelection.toLowerCase() + " beats " + computerSelection.toLowerCase());
    }
    else{
        return("You loose! " + computerSelection.toLowerCase() + " beats " + playerSelection.toLowerCase());
    }
}

function game(){
    var playerSelection;
    playerWin = 0;
    computerWin = 0;
    for(i = 0; i < 5; i++){
        playerSelection = prompt("Enter your move (Rock, Paper or Scissor): ");
        outcome = singleRound(playerSelection, computerPlay());
        if(outcome.includes("win")){
            playerWin += 1;
        }
        else if(outcome.includes("loose")){
            computerWin += 1;
        }
    }
    if(playerWin > computerWin){
        console.log("You win!");
    }
    else if(playerWin < computerWin){
        console.log("You loose!");
    }
    else{
        console.log("Draw.");
    }
}