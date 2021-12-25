function computerPlay() {
    const computerChoices = ['rock', 'paper', 'scissors']
    return computerChoices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection === computerSelection){
         console.log(`It's a tie this round! Both you and the computer chose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`)
         return 'tie'
    }

    if (didPlayerWin(playerSelection, computerSelection)){
         console.log(`You win this round! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`)
         return 'player'
    } else {
         console.log(`You lose this round. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`)
         return 'computer'
    }
}

function didPlayerWin(playerSelection, computerSelection){
    switch (playerSelection) {
        case 'rock':
            return computerSelection === 'scissors'
        case 'scissors':
            return computerSelection === 'paper'
        case 'paper':
            return computerSelection === 'rock'
    }
}

function game(){
    let playerScore = 0
    let computerScore = 0

    for(let i = 0; i < 5; i++){
        let userInput = prompt('Choose rock, paper or scissors!');
        let winner = playRound(userInput, computerPlay());

        if (winner === 'player'){
            playerScore += 1
        } else if (winner === 'computer'){
            computerScore += 1
        }
    }

    if (playerScore === computerScore){
        console.log(`Wow! The game ends at a tie at ${playerScore} - ${computerScore}!`)
    } else{ 
    console.log (
        playerScore > computerScore ? `You won the game 🎉! Your score is ${playerScore} and the computer's is ${computerScore}.` : `You lost this time 😞. Your score is ${playerScore} and the computer's is ${computerScore}.` 
    )}
}

game()
