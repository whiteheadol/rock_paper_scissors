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
  displayWins();
});

spicyImages.addEventListener('click', function() {
  currentGame.assignAlienChoiceSpicy(event);
  currentGame.assignComputerChoiceSpicy();
  currentGame.determineWinner();
  displayWins();
});

clearButton.addEventListener('click', function() {
  toggleChooseAgainButton();
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

function displayWins() {
    clearButton.classList.remove('hidden');
    fighterText.classList.add('hidden');
    winResults.classList.remove('hidden');
    resetBoard();
    updateWinText();
  };

function updateWinText() {
   if (currentGame.winner === 'alien') {
    winResults.innerText = 'You won this round!';
  } else if (currentGame.winner === 'computer') {
    winResults.innerText = 'The computer won this round.';
  } else {
    winResults.innerText = 'This round was a tie, try again!';
  }
};

function resetBoard() {
  if (currentGame.gameType === 'classic') {
    classicImages.classList.add('hidden');
  } else if (currentGame.gameType === 'spicy') {
    spicyImages.classList.add('hidden');
  }
};

function toggleChooseAgainButton() {
  winResults.classList.add('hidden');
  clearButton.classList.add('hidden');
  if (currentGame.gameType === 'classic') {
    classicImages.classList.remove('hidden');
  } else if (currentGame.gameType === 'spicy') {
    spicyImages.classList.remove('hidden');
  }
};
