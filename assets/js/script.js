// Define an object winningCombinations consisting of five properties representing the possible game choices
// Each property is an array of two elements that can be beaten by the respective property of the winningCombinations object.
// For example, 'scissors' property has an array containing 'paper' and 'lizard', which can be beaten by 'scissors' in the game.
const winningCombinations = {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissors'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
}

// Create an array pcPicks containing all possible game choices
// Use for...in loop to iterate through the keys of winningCombinations object
// Use push() method to add those keys to the end of the pcPicks array
const pcPicks = [];
for (let key in winningCombinations) {
    pcPicks.push(key);
}

// Declare variables to store the choices made by the player and the computer, respectively, and their scores
let playerChoice;
let computerChoice;
let playerScore = 0;
let tieScore = 0;
let computerScore = 0;

// Declare variables to store the choices made by the player and the computer, respectively
let playerPick;
let computerPick;
let winner;

// Add event listeners to the buttons in order to detect which button the player clicked

// Use querySelectorAll to pull all the buttons from the body of index.html
const buttons = document.querySelectorAll('.btnChoices');

// Use forEach to loop through all obtained buttons
buttons.forEach(button => {
    // Add click event listener to set playerPick variable to the data-type attribute of the button that was clicked
    button.addEventListener('click', function () {
        playerPick = this.dataset.type;

        // Generate a random index number to select an element from the `pcPicks` array
        computerPick = pcPicks[Math.floor(Math.random() * pcPicks.length)];

        // Call the `determinWinner()` function to determine the winner of the game
        determinWinner();

        // Call the `updateUI()` function to update the user interface with the winner and game result
        updateUI();
    });
});

// This function determines the winner of a game based on the comparison of the player's and computer's choices to the winningCombinations object.
// It assigns the result to the winner variable and creates a message to display the outcome of the game.
// The combo variable is used to concatenate the player's and computer's choices and create a key to look up the corresponding outcome message in the outcomeMessages object.
// If the player and computer choose the same option, the game is a tie.
// If the player's choice beats the computer's choice, the player wins.
// If the computer's choice beats the player's choice, the computer wins.
// The function returns an array with two values: the winner and the message to display the outcome of the game.
function determinWinner() {
    let winner;
    let message;
    const combo = playerPick + '-' + computerPick;
    if (playerPick === computerPick) {
        winner = 'tie';
        message = `<i class="far fa-handshake"></i>It's a tie `;
    } else if (winningCombinations[playerPick].includes(computerPick)) {
        winner = 'player';
        message = `${outcomeMessages[combo]} - You win!`;
    } else {
        winner = 'computer';
        message = `${outcomeMessages[combo]} - Computer wins!`;
    }
    return [winner, message];
}

// An object containing messages describing the outcome of each possible game result.
const outcomeMessages = {
    // Options winning for the player
    'scissors-paper': 'Scissors cuts Paper',
    'paper-rock': 'Paper covers Rock',
    'rock-lizard': 'Rock crushes Lizard',
    'lizard-spock': 'Lizard poisons Spock',
    'spock-scissors': 'Spock smashes Scissors',
    'scissors-lizard': 'Scissors decapitates Lizard',
    'lizard-paper': 'Lizard eats Paper',
    'paper-spock': 'Paper disproves Spock',
    'spock-rock': 'Spock vaporizes Rock',
    'rock-scissors': 'Rock crushes Scissors',

    // Options winning for the computer
    'rock-spock': 'Spock vaporizes Rock',
    'rock-paper': 'Paper covers Rock',
    'paper-lizard': 'Lizard eats Paper',
    'paper-scissors': 'Scissors cuts Paper',
    'scissors-rock': 'Rock crushes Scissors',
    'scissors-spock': 'Spock smashes Scissors',
    'lizard-rock': 'Rock crushes Lizard',
    'lizard-scissors': 'Scissors decapitates Lizard',
    'spock-paper': 'Paper disproves Spock',
    'spock-lizard': 'Lizard poisons Spock',
};

function updateUI() {
    playerImg.innerHTML = `<i class="far fa-hand-${playerPick}"></i>`;
    compImg.innerHTML = `<i class="far fa-hand-${computerPick}"></i>`;
    const [winner, message] = determinWinner();
    result.innerHTML = message;
    
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'tie') {
        tieScore++;
    } else {
        computerScore++;
    }
    
    document.getElementById('player_score').innerHTML = `Player: ${playerScore}`;
    document.getElementById('tie_score').innerHTML = `Tie: ${tieScore}`;
    document.getElementById('computer_score').innerHTML = `Computer: ${computerScore}`;
}