const choices = ["rock","paper","scissors"];

function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

function checkWinner(playerChoice,computerChoice){
    if (playerChoice == "rock" && computerChoice == "scissors" ||
        playerChoice == "scissor" && computerChoice == "paper" ||
        playerChoice == "paper" && computerChoice == "rock"){
            return "player";
        }
    else if(playerChoice == computerChoice){
        return "tie";
    }
    else{
        return "computer";
    }
}

function playRound(playerChoice,computerChoice){
    let winner = checkWinner(playerChoice,computerChoice);
    if(winner == "player"){
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    }
    else if(winner == "tie"){
        return "It's a tie.";
    }
    else{
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

function getPlayerChoice(){
    let validate = false;
    while (validate == false){
        const playerChoice = prompt("Rock Paper scissors");
        if(playerChoice == null){
            continue;
        }

        const choiceLower = playerChoice.toLowerCase();
        if(choices.includes(choiceLower)){
            validate = true;
            return choiceLower;
        }
    }
}

function game(){
    let comScore = 0;
    let playScore = 0;
    console.log("Welcome !");
    for (let i=0; i<5; i++){
        const player = getPlayerChoice();
        const computer = getComputerChoice();

        console.log(`ROUND ${i+1}`);
        console.log(playRound(player,computer));
        console.log("----------------------");

        let winner = checkWinner(player,computer);
        if(winner == "player"){
            playScore++;
        }
        else if(winner == "computer"){
            comScore++;
        }
    }
    console.log("-------GAME OVER!-------");
    console.log("The scores are : ");
    console.log(`computer : ${comScore}`);
    console.log(`player : ${playScore}`);

    if (comScore > playScore){
         console.log("You Lose");
        }
    else if (playScore > comScore) { 
         console.log("You Win");
    }
    else {
        console.log("It's a Tie");
    }
}


game();