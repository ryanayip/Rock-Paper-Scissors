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

let yourScore = 0
let computerScore = 0
let roundCounter = 0

function playRound(playerSelection, computerSelection) {

    
    computerSelection = computerPlay()

    if (yourScore == "5") {
        playerWon()
    }

    if (computerScore == "5") {
        computerWon()
    }

    if (yourScore == "5" || computerScore == "5") {
        return
    }

    //I Pick Rock
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        ++computerScore
        resultsDisplay.textContent = "You Lose! Paper covers Rock.";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        ++yourScore 
        resultsDisplay.textContent = "You Win! Rock crushes Scissors.";
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        resultsDisplay.textContent = "You both picked Rock, so it's a tie. How Boring"; 
    }
    //I Pick Paper
      else if (playerSelection == "Paper" && computerSelection == "Paper") {
        resultsDisplay.textContent = "You both picked Paper, so it's a tie.";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        ++computerScore
        resultsDisplay.textContent = "You Lose! Scissors slices through Paper.";
    } else if (playerSelection == "Paper" && computerSelection === "Rock") {
        ++yourScore
        resultsDisplay.textContent = "You Win! Paper covers Rock.";
    }
    //I Pick Scissors
      else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        ++yourScore
        resultsDisplay.textContent = "You Win! Scissors slices through Paper.";
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        resultsDisplay.textContent = "You both picked Scissors, so it's a tie!";
    } else {
        ++computerScore
        resultsDisplay.textContent = "You Lose! Rock crushes Scissors";
    }
    
    runningScore.textContent = `Player : ${yourScore} Computer : ${computerScore}`

    
    
}

function playerWon() {
    resultsDisplay.textContent = "Congratulations, you won!";
    return;
    
}

function computerWon() {
    resultsDisplay.textContent = "Oof, you lost. Better luck next time!"
    return;
}


function game() {

    computerSelection = computerPlay()
    playerSelection = ""
   

    console.log("---------------------------")
    console.log(`Round ${++roundCounter}`)
    console.log(playRound(playerSelection, computerSelection))
    console.log(`Your Score : ${yourScore}`)
    console.log(`Computer Score : ${computerScore}`)


    console.log("---------------------------")
    console.log(`Round ${++roundCounter}`)
    console.log(playRound(playerSelection, computerSelection))
    console.log(`Your Score : ${yourScore}`)
    console.log(`Computer Score : ${computerScore}`)


    console.log("---------------------------")
    console.log(`Round ${++roundCounter}`)
    console.log(playRound(playerSelection, computerSelection))
    console.log(`Your Score : ${yourScore}`)
    console.log(`Computer Score : ${computerScore}`)
    
    console.log("---------------------------")
    console.log(`Round ${++roundCounter}`)
    console.log(playRound(playerSelection, computerSelection))
    console.log(`Your Score : ${yourScore}`)
    console.log(`Computer Score : ${computerScore}`)


    console.log("---------------------------")
    console.log(`Round ${++roundCounter}`)
    console.log(playRound(playerSelection, computerSelection))
    console.log(`Your Score : ${yourScore}`)
    console.log(`Computer Score : ${computerScore}`)
    console.log("---------------------------")

    if (yourScore > computerScore) {
        console.log("Congratulations, you win!")
    } else if (computerScore > yourScore) {
        console.log("You lost. Too bad.")
    } else {
        console.log("Wow, a tie!")
    }
    console.log("---------------------------")





}





