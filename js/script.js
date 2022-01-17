let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

let roundResultDiv = document.querySelector('.round-result-text-container')
let playerScoreSpan = document.querySelector('.player-score')
let computerScoreSpan = document.querySelector('.computer-score')
let playerButtonsContainer = document.querySelector('.player-buttons-container')
let resetGameButton = document.querySelector('.reset-game-btn')
let roundNumberSpan = document.querySelector('.round-number')

function computerPlay() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    return computerChoices[Math.floor(Math.random() * 3)];
};

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
         return 'tie'
    }
    else if (didPlayerWin(playerSelection, computerSelection)){
         return 'player'
    } else {
         return 'computer'
    };
};

function didPlayerWin(playerSelection, computerSelection){
    // For each of the 3 possible player choices, there is only one counterpart computer chioce which results in a win for the player
    switch (playerSelection) {
        case 'rock':
            return computerSelection === 'scissors'
        case 'scissors':
            return computerSelection === 'paper'
        case 'paper':
            return computerSelection === 'rock'
    };
}

function resetGame() {
    playerButtonsContainer.style.display = 'block'
    resetGameButton.style.display = 'none'
    playerScoreSpan.textContent = '0'
    computerScoreSpan.textContent = '0'
    roundNumberSpan.textContent = '1'
    roundResultDiv.textContent = ''
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
    
}

function playerChoiceHandler(e) {
    roundNumberSpan.textContent = ++roundNumber
    let playerSelection = e.target.name;

    if (!playerSelection) return

    let computerSelection = computerPlay()
    let roundWinner = playRound(playerSelection, computerSelection);

    if (roundWinner === 'player'){
        playerScoreSpan.textContent = ++playerScore;
        roundResultDiv.textContent = `You win this round! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`
    } else if (roundWinner === 'computer'){
        computerScoreSpan.textContent = ++computerScore;
        roundResultDiv.textContent = `You lose this round. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`
    } else {
        roundResultDiv.textContent = `It's a tie this round! Both you and the computer chose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`

    }


    if (playerScore >= 5 || computerScore >= 5){
        playerButtonsContainer.style.display = 'none';
        roundResultDiv.textContent = playerScore > computerScore ? `You won the game 🎉! Your score is ${playerScore} and the computer's is ${computerScore}.` : `You lost this time 😞. Your score is ${playerScore} and the computer's is ${computerScore}.`
        resetGameButton.style.display = 'block';

    }
}

playerButtonsContainer.addEventListener('click', playerChoiceHandler)
resetGameButton.addEventListener('click', resetGame)
