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
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "scissor"){
        return 0;
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissor"){
        return 1;
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        return 1;
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        return 1;
    }
    else{
        return -1;
    }
}