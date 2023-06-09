// Define an object winningCombinations consisting of five properties
// representing the possible game choices
// Each property is an array of two elements that can be beaten by the
// respective property of the winningCombinations object.

const winningCombinations = {
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  rock: ["lizard", "scissors"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

// Create an array pcPicks containing all possible game choices
// Use for...in loop to iterate through the keys of winningCombinations object
// Use push() method to add those keys to the end of the pcPicks array

const pcPicks = [];
for (let key in winningCombinations) {
  pcPicks.push(key);
}

// Declare variables to store the choices made by the player and the computer,
// respectively, and their scores

let playerScore = 0;
let tieScore = 0;
let computerScore = 0;
let counter = 0;
let playerPick;
let computerPick;
let winner;
let bgChoice = 0;
let playerImg = document.getElementById("playerImg");
let compImg = document.getElementById("compImg");
let result = document.getElementById("result");

// Add a YEAR to the footer

const currentYear = new Date().getFullYear();
document.getElementById("current-year").innerHTML = currentYear;

// Add event listeners to the buttons in order to detect which button
// the player clicked

// Use querySelectorAll to pull all the buttons from the body of index.html
const buttons = document.querySelectorAll(".btnChoices");

result.innerHTML = '<span class="start-message">Ready when you are!</span>';

// Use forEach to loop through all obtained buttons
buttons.forEach((button) => {
  // Add click event listener to set playerPick variable to the data-type
  // attribute of the button that was clicked
  button.addEventListener("click", function () {
    if (counter < 20) {
      counter++;
      playerPick = this.dataset.type;
      result.innerHTML = "";
      computerPick = pcPicks[Math.floor(Math.random() * pcPicks.length)];
      determinWinner();
      updateUI();
    } else {
      if (playerScore > computerScore) {
        result.innerHTML =
          "<span class='game-over win'>Game over! You are the winner!</span>";
      } else if (playerScore < computerScore) {
        result.innerHTML =
          "<span class='game-over loss'>Game over! Sorry, Computer won!</span>";
      } else {
        result.innerHTML =
          "<span class='game-over tie'>Game over! It is a tie!" +
          " You both won!</span>";
      }
    }
  });
});

// This function determines the winner of a game based on the comparison of
// the player's and computer's choices to the winningCombinations object.
function determinWinner() {
  let message;
  const combo = playerPick + "-" + computerPick;
  if (playerPick === computerPick) {
    winner = "tie";
    message = `<span class="outcome-message"><i class="far fa-handshake"></i>
    It's a tie</span>`;
  } else if (winningCombinations[playerPick].includes(computerPick)) {
    winner = "player";
    message = `<span class="outcome-message">${outcomeMessages[combo]} 
    - You win!</span>`;
  } else {
    winner = "computer";
    message = `<span class="outcome-message">${outcomeMessages[combo]} 
    - Computer wins!</span>`;
  }
  return [winner, message];
}

// An object containing messages describing the outcome of each possible game.
const outcomeMessages = {
  "scissors-paper": "Scissors cuts Paper",
  "paper-rock": "Paper covers Rock",
  "rock-lizard": "Rock crushes Lizard",
  "lizard-spock": "Lizard poisons Spock",
  "spock-scissors": "Spock smashes Scissors",
  "scissors-lizard": "Scissors decapitates Lizard",
  "lizard-paper": "Lizard eats Paper",
  "paper-spock": "Paper disproves Spock",
  "spock-rock": "Spock vaporizes Rock",
  "rock-scissors": "Rock crushes Scissors",
  "rock-spock": "Spock vaporizes Rock",
  "rock-paper": "Paper covers Rock",
  "paper-lizard": "Lizard eats Paper",
  "paper-scissors": "Scissors cuts Paper",
  "scissors-rock": "Rock crushes Scissors",
  "scissors-spock": "Spock smashes Scissors",
  "lizard-rock": "Rock crushes Lizard",
  "lizard-scissors": "Scissors decapitates Lizard",
  "spock-paper": "Paper disproves Spock",
  "spock-lizard": "Lizard poisons Spock",
};

// An object containing path to game's images
const imagePaths = {
  rock: "assets/images/characters/boulder-1.webp",
  paper: "assets/images/characters/paper-ball.webp",
  scissors: "assets/images/characters/scissors-5.webp",
  lizard: "assets/images/characters/lizard-3.webp",
  spock: "assets/images/characters/spock-2.webp",
};

function displayComputerChoice(message) {
  result.innerHTML = `<span class="you-have-chosen">You have chosen ${
    playerPick.charAt(0).toUpperCase() + playerPick.slice(1)
  }!</span>`;

  let computerPickIndex = pcPicks.indexOf(computerPick);
  let slotArray = pcPicks.toSpliced(computerPickIndex, 1);
  slotArray.push(computerPick);
  let count = -1;
  const interval = setInterval(function () {
    if (++count === slotArray.length) {
      clearInterval(interval);
      return;
    }
    compImg.innerHTML = `<img src=${
      imagePaths[slotArray[count]]
    } id="cImg"></img>`;
    if (count === slotArray.length - 1) {
      result.innerHTML = message;
      displayScore();
    }
  }, 400);
}

function displayScore() {
  document.getElementById("player-score").innerHTML = `Player: ${playerScore}`;
  document.getElementById("tie-score").innerHTML = `Tie: ${tieScore}`;
  document.getElementById(
    "computer-score"
  ).innerHTML = `Computer: ${computerScore}`;
}

window.addEventListener("load", function () {
  const playerImg = document.getElementById("playerImg");
  const compImg = document.getElementById("compImg");
  const pentagonImage = document.createElement("img");
  pentagonImage.src = "assets/images/favicon/pentagon-2.webp";
  pentagonImage.alt =
    "Game logo in a shape of pentagon formed by five icons: " +
    "Rock, Paper, Scissors, Lizard, Spock";
  playerImg.appendChild(pentagonImage.cloneNode());
  compImg.appendChild(pentagonImage);
});

function updateUI() {
  playerImg.innerHTML = `<img src=${imagePaths[playerPick]} id="pImg"></img>`;
  const [winner, message] = determinWinner();
  if (winner === "player") {
    playerScore++;
  } else if (winner === "tie") {
    tieScore++;
  } else {
    computerScore++;
  }
  displayComputerChoice(message);
}

// Set the initial scores to 0 on window load.
window.addEventListener("load", function () {
  document.getElementById("player-score").innerHTML = `Player: 0`;
  document.getElementById("tie-score").innerHTML = `Tie: 0`;
  document.getElementById("computer-score").innerHTML = `Computer: 0`;
});

// Add a click event listener to the reset (New Game) button.
document.getElementById("reset-btn").addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  counter = 0;
  playerImg.innerHTML = "";
  compImg.innerHTML = "";
  result.innerHTML = '<span class="start-message">Ready when you are!</span>';
  document.getElementById("player-score").innerHTML = `Player: 0`;
  document.getElementById("tie-score").innerHTML = `Tie: 0`;
  document.getElementById("computer-score").innerHTML = `Computer: 0`;
  const pentagonImage = document.createElement("img");
  pentagonImage.src = "assets/images/favicon/pentagon-2.webp";
  pentagonImage.alt =
    "Game logo in a shape of pentagon formed by five icons: " +
    "Rock, Paper, Scissors, Lizard, Spock";
  playerImg.appendChild(pentagonImage.cloneNode());
  compImg.appendChild(pentagonImage);
});

// Create an array of image paths for the background options.
const backgroundOptions = [
  "assets/images/backgrounds/sweet-pea.webp",
  "assets/images/backgrounds/dill.webp",
  "assets/images/backgrounds/blue-feather.webp",
  "assets/images/backgrounds/chinese-lantern.webp",
  "assets/images/backgrounds/lavandula.webp",
  "assets/images/backgrounds/dandelion.webp",
  "assets/images/backgrounds/pettel.webp",
  "assets/images/backgrounds/feather.webp",
  "assets/images/backgrounds/garden-lupin.webp",
  "assets/images/backgrounds/leaf-1.webp",
  "assets/images/backgrounds/mushroom.webp",
  "assets/images/backgrounds/monkswood-3.webp",
  "assets/images/backgrounds/fish-scale-2.webp",
  "assets/images/backgrounds/oyster.webp",
  "assets/images/backgrounds/catmint.webp",
  "assets/images/backgrounds/magic-world.webp",
  "assets/images/backgrounds/monkswood-2.webp",
  "assets/images/backgrounds/fish-scale.webp",
  "assets/images/backgrounds/leaf.webp",
  "assets/images/backgrounds/dandelion-1.webp",
  "assets/images/backgrounds/insect-scales.webp",
  "assets/images/backgrounds/garden-leaves.webp",
  "assets/images/backgrounds/droplets.webp",
  "assets/images/backgrounds/monkswood.webp",
  "assets/images/backgrounds/monkswood-1.webp",
  "assets/images/backgrounds/garden-fir-tree.webp",
];

document.body.style.backgroundImage = `url(${backgroundOptions[bgChoice]})`;

const bgChange = document.getElementById("bgChange");
bgChange.addEventListener("click", function () {
  bgChoice++;
  if (bgChoice === backgroundOptions.length) {
    bgChoice = 0;
  }
  document.body.style.backgroundImage = `url(${backgroundOptions[bgChoice]})`;
});

let currentBgIndex = 0;

if (currentBgIndex >= backgroundOptions.length) {
  currentBgIndex = 0;
}

// Function to update the background image.
function updateBackgroundImage() {
  let bgImage = `url(${backgroundOptions[currentBgIndex]})`;
  document.body.style.backgroundImage = bgImage;
}

function nextBg() {
  currentBgIndex++;
  if (currentBgIndex === backgroundOptions.length) {
    currentBgIndex = 0;
  }
  updateBackgroundImage();
}

function previousBg() {
  currentBgIndex--;
  if (currentBgIndex < 0) {
    currentBgIndex = backgroundOptions.length - 1;
  }
  updateBackgroundImage();
}

// Attach event listeners to the buttons.
document.getElementById("bgForward").addEventListener("click", nextBg);
document.getElementById("bgBack").addEventListener("click", previousBg);
document.getElementById("bgChange").addEventListener("click", nextBg);

// ADD AUDIO TO THE GAME
// Array of audio file names to be used by the audio element.
const audioFiles = [
  "petertchaikovsky-the-nutcracker-waltzoftheflowers.mp3",
  "claudedebussy-clairdelune.mp3",
  "antonindvorak-symphonyno9-fromthenewworld.mp3",
  "antoniovivaldi-autumn-thefourseasons.mp3",
  "antoniovivaldi-spring-thefourseasons.mp3",
  "antoniovivaldi-summer-thefourseasons.mp3",
  "antoniovivaldi-winter-thefourseasons.mp3",
  "aramkhachaturian-masquerade-suite-noi-waltz.mp3",
  "camillesaint-saens-carnivaloftheanimals-theswan.mp3",
  "christophgluck-orfeoedeuridice-danceoftheblessedspirits.mp3",
  "claudedebussy-arabesque-no-1.mp3",
  "edvardgrieg-morningmood-peergynt-suite-no1.mp3",
  "edwardelgar-enigmavariations-nimrod.mp3",
  "eriksatie-gymnop-die-no-1.mp3",
  "fredericchopin-nocturneno2.mp3",
  "johannesbrahms-symphonyno3-3rdmovement.mp3",
  "johannpachelbel-canon.mp3",
  "ludwigvanbeethoven-f-relise.mp3",
  "ludwigvanbeethoven-pastoral-symphony-no-6.mp3",
  "mauriceravel-pavaneforadeadprincess.mp3",
  "ralphvaughanwilliams-thelarkascending.mp3",
  "sergeirachmaninoff-pianoconcertono2.mp3",
  "johann-sebastian-bach-sheep-may-safely-graze.mp3",
  "ludovico-einaudi-nuvole-bianche.mp3",
  "wolfgang-amadeus-mozart-eine-kleine-nachtmusik.mp3",
];

// Variable to keep track of the current audio index
let currentAudioIndex = 0;

// Create an audio element with the initial audio file and set it to loop.
const audioElement = new Audio(`assets/audio/${audioFiles[currentAudioIndex]}`);
audioElement.loop = true;

// Event listener for the volume-up button to play the next audio or
// start playing the first one.
document.getElementById("volume-up").addEventListener("click", function () {
  if (audioElement.paused) {
    audioElement.play(); // Play the audio if it's paused.
  } else {
    currentAudioIndex++; // Move to the next audio in the array.
    if (currentAudioIndex === audioFiles.length) {
      currentAudioIndex = 0; // Reset the index if it reaches the end.
    }
    // Update the source.
    audioElement.src = `assets/audio/${audioFiles[currentAudioIndex]}`;
    audioElement.play(); // Play the new audio file.
  }
});

// Event listener for the volume-off button to pause the audio
// and reset its currentTime.
document.getElementById("volume-off").addEventListener("click", function () {
  audioElement.pause();
  audioElement.currentTime = 0;
});

// Event listener for the back-music button to play the previous audio file.
document.getElementById("back-music").addEventListener("click", function () {
  currentAudioIndex--;
  if (currentAudioIndex < 0) {
    currentAudioIndex = audioFiles.length - 1; // Set the index to the last item
  }
  // Update the source.
  audioElement.src = `assets/audio/${audioFiles[currentAudioIndex]}`;
  audioElement.play(); // Play the new audio file.
});

// Event listener for the forward-music button to play the next audio file.
document.getElementById("forward-music").addEventListener("click", function () {
  currentAudioIndex++;
  if (currentAudioIndex === audioFiles.length) {
    currentAudioIndex = 0; // Reset the index if it reaches the end.
  }
  // Update the source.
  audioElement.src = `assets/audio/${audioFiles[currentAudioIndex]}`;
  audioElement.play(); // Play the new audio file.
});

// MODAL WINDOW

// constants for modal elements
const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal-btn");
const closeModal = document.getElementById("close-modal-btn");

// Open modal at the start of the page
window.onload = function () {
  document.getElementById("modal").showModal();
};

// Make click on button open modal
openModal.addEventListener("click", () => {
  modal.showModal();
});

// Close modal on button click
closeModal.addEventListener("click", () => {
  modal.close();
});
