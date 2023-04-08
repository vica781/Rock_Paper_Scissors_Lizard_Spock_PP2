//define an object consisting five properties representing possible game choice
//each property is an array of two elements that can be bitten by the property 
const winnigCombinations = {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissors'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
}

//creat an array `pcPick`
//use `for...in` loop to iterate through the keys of winningCombinations object
//use push() method to add those keys to the end of the `pcPick` array
const pcPicks = [];
for (let key in winnigCombinations) {
    pcPicks.push(key);
}

//declare variables to store the choices made by the player and the computer, respectively
let playerPick;
let computerPick;
let winner;

//assign value to `playerPick` variable (cna be replaces with any other valid game choice) 
playerPick = 'scissors';

//use `Math.random()` function to generate a random number between 0 and 1,
//and multiply by length of `pcPick` array
//use `Math.floor()` function to round down product to the nearest interger
//obtain a random index number to select an element from the `pcPick` array by following steps above
//assign value of random index generated from `pcPick` array to `computerPick` vatiable
computerPick = pcPicks[Math.floor(Math.random() * pcPicks.length)];

//add event listeners to the `buttons` in order to detect which button the player clicked
//use `querySelectorAll` to pull all the buttons from the body of index.html
//use `forEach` to loop through all obtained buttons
//add `click` event listener to set `playerPick` variable to the `data-type` atribute of the button that that was clicked
const buttons = document.querySelectorAll('.btnChoices');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        playerPick = this.dataset.type;
        //call a function to determin the winner
        //and update the UI (player-computer interaction/communication)
    });
});