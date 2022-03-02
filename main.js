//Global Variables
var currentGame = new Game();

//Query Selectors
var gameOptionPage = document.querySelector('.main-page');
var gameOption = document.querySelectorAll('.game-box');

var classicBox = document.querySelector('.classic-game');
var spicyBox = document.querySelector('.spicy-game');
var classicImages = document.querySelector('.classic-images');
var spicyImages = document.querySelector('.spicy-images');

//Event Listeners
gameOptionPage.addEventListener('click', function() {
  event.preventDefault();
  currentGame.determineGameType(event);
  showGamePage();
  }
);

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
