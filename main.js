//Global Variables
var currentGame = new Game();

//Query Selectors
var gameOptionPage = document.querySelector('.game-options');
var gameOption = document.querySelectorAll('.game-box');

// var classicBox = document.querySelector('.classic-game');
// var spicyBox = document.querySelector('.spicy-game');
var classicImages = document.querySelector('.classic-images');
var spicyImages = document.querySelector('.spicy-images');

var classicWeapons = document.querySelectorAll('.weapon1');
var spicyWeapons = document.querySelectorAll('weapon2');

var userWins = document.querySelector('.user-wins');
var computerWins = document.querySelector('.computer-wins');

var clearButton = document.querySelector('.clear-button');
var subTitle = document.querySelector('.subtitle');
var fighterText = document.querySelector('.fighter-text');
var winResults = document.querySelector('.win-results');

var classicButton = document.querySelector('.classic-game');
var spicyButton = document.querySelector('.spicy-game');


//Event Listeners
classicButton.addEventListener('click', function() {
  currentGame.gameType = 'classic';
  showGamePage();
});

spicyButton.addEventListener('click', function() {
  currentGame.gameType = 'spicy';
  showGamePage();
})

classicImages.addEventListener('click', function() {
  currentGame.assignAlienChoice(event);
  currentGame.assignComputerChoice();
  currentGame.determineWinner();
});

spicyImages.addEventListener('click', function() {
  currentGame.assignAlienChoiceSpicy(event);
  currentGame.assignComputerChoiceSpicy();
  currentGame.determineWinner();
});

clearButton.addEventListener('click', function() {
  currentGame.toggleChooseAgainButton();
});

//Event Handlers & Functions
function showGamePage() {
  classicButton.classList.add('hidden');
  spicyButton.classList.add('hidden');
  subTitle.classList.add('hidden');
  fighterText.classList.remove('hidden');
  if (currentGame.gameType === 'classic') {
    classicImages.classList.remove('hidden');
  } else if (currentGame.gameType === 'spicy') {
    spicyImages.classList.remove('hidden');
  }
};
