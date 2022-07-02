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

function playRound(playerSelection,computerSelection) {

    playerSelection = prompt("Type Rock, Paper, or Scissors")
    computerSelection = computerPlay()
    

    //I Pick Rock
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        ++computerScore
        return "You Lose! Paper covers Rock.";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        ++yourScore 
        return "You Win! Rock crushes Scissors.";
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "You both picked Rock, so it's a tie. How Boring"; 
    }
    //I Pick Paper
      else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "You both picked Paper, so it's a tie.";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        ++computerScore
        return "You Lose! Scissors slices through Paper.";
    } else if (playerSelection == "Paper" && computerSelection === "Rock") {
        ++yourScore
        return "You Win! Paper covers Rock.";
    }
    //I Pick Scissors
      else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        ++yourScore
        return "You Win! Scissors slices through Paper.";
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "You both picked Scissors, so it's a tie!";
    } else {
        ++computerScore
        return "You Lose! Rock crushes Scissors";
    }

    
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





