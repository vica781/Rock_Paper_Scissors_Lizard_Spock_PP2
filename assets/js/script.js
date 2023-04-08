// Define an object consisting of five properties representing possible game choices
// Each property is an array of two elements that can be beaten by the property 
const winningCombinations = {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissors'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
}

// Create an array `pcPicks`
// Use `for...in` loop to iterate through the keys of winningCombinations object
// Use push() method to add those keys to the end of the `pcPicks` array
const pcPicks = [];
for (let key in winningCombinations) {
    pcPicks.push(key);
}

// Declare variables to store the choices made by the player and the computer, respectively
let playerPick;
let computerPick;
let winner;

// Add event listeners to the `buttons` in order to detect which button the player clicked
// Use `querySelectorAll` to pull all the buttons from the body of index.html
// Use `forEach` to loop through all obtained buttons
// Add `click` event listener to set `playerPick` variable to the `data-type` attribute of the button that was clicked
const buttons = document.querySelectorAll('.btnChoices');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        playerPick = this.dataset.type;
        // Generate a random index number to select an element from the `pcPicks` array
        computerPick = pcPicks[Math.floor(Math.random() * pcPicks.length)];
        determinWinner();
        updateUI();
    });
});

// Write a function to determine a winner based on the comparison 
// of the player's and computer's choices to the `winningCombinations
// and assign the result to the `winner` variable
function determinWinner() {
    let winner;
    let message;
    if (playerPick === computerPick) {
        winner = 'tie';
        message = "It's a tie";
    } else if (winningCombinations[playerPick].includes(computerPick)) {
        winner = 'player';
        message = `${playerPick} ${winningMessages[playerPick][computerPick]} You win!`;
    } else {
        winner = 'computer';
        message = `${computerPick} ${winningMessages[computerPick][playerPick]} Computer wins!`;
    }
    return [winner, message];
}

const outcomeMessages = {
    'scissors-paper': 'Scissors cuts Paper',
    'paper-rock': 'Paper covers Rock',
    'rock-lizard': 'Rock crushes Lizard',
    'lizard-spock': 'Lizard poisons Spock',
    'spock-scissors': 'Spock smashes Scissors',
    'scissors-lizard': 'Scissors decapitates Lizard',
    'lizard-paper': 'Lizard eats Paper',
    'paper-spock': 'Paper disproves Spock',
    'spock-rock': 'Spock vaporizes Rock',
    'rock-scissors': 'Rock crushes Scissors'
  };
  
const winningMessages = {
    scissors: {
        paper: 'cuts',
        lizard: 'decapitates'
    },
    paper: {
        rock: 'covers',
        spock: 'disproves'
    },
    rock: {
        lizard: 'crushes',
        scissors: 'crushes'
    },
    lizard: {
        spock: 'poisons',
        paper: 'eats'
    },
    spock: {
        scissors: 'smashes',
        rock: 'vaporizes'
    }
};

function updateUI() {
    playerImg.innerHTML = `<i class="far fa-hand-${playerPick}"></i>`;
    compImg.innerHTML = `<i class="far fa-hand-${computerPick}"></i>`;
    const [winner, message] = determinWinner();
    result.innerHTML = message;
}
