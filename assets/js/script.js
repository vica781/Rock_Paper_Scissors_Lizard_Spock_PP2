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

// Create an array pcPick containing all possible game choices
// Use for...in loop to iterate through the keys of winningCombinations object
// Use push() method to add those keys to the end of the pcPick array
const pcPick = [];
for (let key in winningCombinations) {
    pcPick.push(key);
}

// Declare variables to store the choices made by the player and the computer, respectively, and their scores
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

        // Generate a random index number to select an element from the `pcPick` array
        computerPick = pcPick[Math.floor(Math.random() * pcPick.length)];

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
// The function returns an array with two elements
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

//An object containing path to game's images
const imagePaths = {
    rock: '../images/boulder_1.webp',
    paper: '../images/paper_ball.webp',
    scissors: '../images/scissors_5.webp',
    lizard: '../images/lizard_3.webp',
    spock: '../images/spock_2.webp'
}

function updateUI() {
    // Display the player's choice
    playerImg.innerHTML = `<img src=${imagePaths[playerPick]} id="pImg"></img>`;

    // Use Fisher-Yates Shuffle algorithm as a tool to create animated imitation of a slot machine to display computer choices
    // Use https://www.nobledesktop.com/learn/coding/fisher-yates-shuffle-algorithm as a learning material
    // Adapt idea from https://www.youtube.com/watch?v=NfekYmg4vCE

    // Make a copy of pcPick to stop modifying the original array
    const shuffledPcPick = pcPick.slice();

    //Shuffle the pcPick array to create a 'for' loop
    for (let i = shuffledPcPick.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPcPick[j], shuffledPcPick[i]] = [shuffledPcPick[i], shuffledPcPick[j]];
        };

        // Animate the slot machine by displaying each image in the sequence with a delay
        let i = 0;

        const slotMachineInterval = setInterval(() => {
            // Set the innerHTML of the compImg element to display the image at the current index in the shuffled pcPick array
            compImg.innerHTML = `<img src=${imagePaths[pcPick[i]]} class="slotMachineImg"></img>`;

            // Increment the index variable
            i++;

            // Stop the animation if the index variable reaches the length of the pcPick array
            if (i >= pcPick.length) {
                // Clear the interval ising the interval ID to prevent the repeat calls of the function
                clearInterval(slotMachineInterval);

                // Display the computer's choice
                displayComputerChoice();

                // Get the winner and message from the determineWinner() function
                const [winner, message] = determinWinner();

                // Update the scores and display the outcome message
                updateScores(winner);
                result.innerHTML = message;

            }
        }, 200);

        // Determine the winner and get the appropriate message
        const [winner, message] = determinWinner();
        result.innerHTML = message;

        // Update the score based on the winner
        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'tie') {
            tieScore++;
        } else {
            computerScore++;
        }

        // Update the scores displayed in the UI
        document.getElementById('player_score').innerHTML = `Player: ${playerScore}`;
        document.getElementById('tie_score').innerHTML = `Tie: ${tieScore}`;
        document.getElementById('computer_score').innerHTML = `Computer: ${computerScore}`;
    }

    // Add a click event listener to the reset button
    document.getElementById('reset_btn').addEventListener('click', function () {
        // Reset the scores to 0
        playerScore = 0;
        computerScore = 0;
        tieScore = 0;
        // Clear content of elements from previous game results
        playerImg.innerHTML = '';
        compImg.innerHTML = '';
        result.innerHTML = '';

        // Update the scores displayed in the UI to 0
        document.getElementById('player_score').innerHTML = `Player: 0`;
        document.getElementById('tie_score').innerHTML = `Tie: 0`;
        document.getElementById('computer_score').innerHTML = `Computer: 0`;
    })