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
        return 0;
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper"){
        return 0;
    }
    else if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "scissor"){
        return 0;
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissor"){
        return 1;
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        return 1;
    }
    else if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper"){
        return 1;
    }
    else{
        return -1;
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

function test(n){
    for(i = 0; i < n; i++){
        console.log("Worked!");
    }
}