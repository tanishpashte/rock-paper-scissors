//randomly returns rock, papers or scissors
function getComputerChoice(){
    let num = Math.floor((Math.random()*100))%3;
    switch(num){
        case 0: return "scissors";
        break;
        case 1: return "paper";
        break;
        case 2: return "rock";
        break;
    }
}

//decides who wins after each round
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return 3;
    }
    let win = (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection== "paper")|| (playerSelection == "paper" && computerSelection == "rock");

    return win;
}

function playGame(){
    let rounds = parseInt(prompt("How many rounds do you want to play", 1)); //no of rounds
    let playerCounter = 0;
    let computerCounter = 0;
    for(let i = 1; i<= rounds; i++){
        console.log(`Round ${i}`);
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose between rock, papers and scissors: ").toLowerCase();

        //check who wins the round
        let win = playRound(playerSelection, computerSelection);
        if(win==1){
            console.log("You win! " + playerSelection + " beats " + computerSelection + " !");
            playerCounter++;
        }else if(win == 0){
            console.log("You lose! " + computerSelection + " beats " + playerSelection + " !")
            computerCounter++;
        }else{
            console.log("It's a draw!");
        }
    }

    //score updates after every round
    if(playerCounter ==  computerCounter){
        console.log("It's a tie!");
    }else if(playerCounter > computerCounter){
        console.log("You win :)");
    }else{
        console.log("You lose :(");
    }
}

playGame();