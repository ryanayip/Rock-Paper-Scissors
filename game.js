function computerPlay() {
    const rndInt = Math.floor(Math.random() * 3) + 1
    if (rndInt === 1) {
        return "Rock";
    } else if (rndInt === 2) {
        return "Paper";
    } else {
        return "Scissors"
    }
        
}

function playRound(playerSelection = prompt("Select Rock, Paper, or Scissors"),computerSelection = computerPlay()) {
    //I Pick Rock
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper covers Rock.";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock crushes Scissors.";
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "You both picked Rock, so it's a tie. How Boring"; 
    }
    //I Pick Paper
      else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "You both picked Paper, so it's a tie.";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors slices through Paper.";
    } else if (playerSelection == "Paper" && computerSelection === "Rock") {
        return "You Win! Paper covers Rock.";
    }
    //I Pick Scissors
      else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors slices through Paper.";
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "You both picked Scissors, so it's a tie!";
    } else {
        return "You Lose! Rock crushes Scissors";
    }

}




