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
    if (playerPick === computerPick) {
        winner = 'It\'s a tie';
    } else if (winningCombinations[playerPick].includes(computerPick)) {
        winner = 'Player wins';
    } else {
        winner = 'Computer wins';
    }
    return winner;
}

// Use `playerImg`, `compImg` and `result` variables to updated UI
const playerImg = document.getElementById('playerImg');
const compImg = document.getElementById('compImg');
const result = document.getElementById('result');

function updateUI() {
  playerImg.innerHTML = `<i class="far fa-hand-${playerPick}"></i>`;
  compImg.innerHTML = `<i class="far fa-hand-${computerPick}"></i>`;
  result.innerHTML = `The winner is ${determinWinner()}`;
}
