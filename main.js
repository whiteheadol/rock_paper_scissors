//Global Variables
var currentGame = new Game();

//Query Selectors
var gameOptionPage = document.querySelector('.game-options');
var gameOption = document.querySelectorAll('.game-box');

var classicBox = document.querySelector('.classic-game');
var spicyBox = document.querySelector('.spicy-game');
var classicImages = document.querySelector('.classic-images');
var spicyImages = document.querySelector('.spicy-images');

var classicWeapons = document.querySelectorAll('.weapon1');
var spicyWeapons = document.querySelectorAll('weapon2');

var userWins = document.querySelector('.user-wins');
var computerWins = document.querySelector('.computer-wins');

var clearButton = document.querySelector('.clear-button');

//Event Listeners
gameOptionPage.addEventListener('click', function() {
  event.preventDefault();
  currentGame.determineGameType(event);
  showGamePage();
  });

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

//Event Handlers & Functions
function showGamePage() {
  classicBox.classList.add('hidden');
  spicyBox.classList.add('hidden');
  if (currentGame.gameType === 'classic') {
    classicImages.classList.remove('hidden');
  } else if (currentGame.gameType === 'spicy') {
    spicyImages.classList.remove('hidden');
  }
};
