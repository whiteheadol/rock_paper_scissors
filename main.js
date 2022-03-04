//Global Variables
var currentGame = new Game();

//Query Selectors
//I don't think I need to use these after all, but will not delete them until I've added
//game changing functionality:
// var gameOptionPage = document.querySelector('.game-options');
// var gameOption = document.querySelectorAll('.game-box');
var classicImages = document.querySelector('.classic-images');
var spicyImages = document.querySelector('.spicy-images');
var userWins = document.querySelector('.user-wins');
var computerWins = document.querySelector('.computer-wins');
var clearButton = document.querySelector('.clear-button');
var subTitle = document.querySelector('.subtitle');
var fighterText = document.querySelector('.fighter-text');
var winResults = document.querySelector('.win-results');
var classicButton = document.querySelector('.classic-game');
var spicyButton = document.querySelector('.spicy-game');

var tokenButton = document.querySelector('.token-changer');
var userCharacter = document.querySelector('.character1');
var changeButton = document.querySelector('.change-game');

var userImage = document.querySelector('#userChoice');
var computerImage = document.querySelector('#computerChoice');

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
  setTimeout(displayWins,600);
});

spicyImages.addEventListener('click', function() {
  currentGame.assignAlienChoiceSpicy(event);
  currentGame.assignComputerChoiceSpicy();
  currentGame.determineWinner();
  setTimeout(displayWins, 600);
});

clearButton.addEventListener('click', function() {
  setTimeout(toggleChooseAgainButton, 300);
});

window.addEventListener('load', function() {
  currentGame.assignPlayerTokens();
})

tokenButton.addEventListener('click', changeToken);

//Event Handlers & Functions
function showGamePage() {
  classicButton.classList.add('hidden');
  spicyButton.classList.add('hidden');
  subTitle.classList.add('hidden');
  fighterText.classList.remove('hidden');
  tokenButton.classList.add('hidden');
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
    changeButton.classList.remove('hidden');
    resetBoard();
    updateWinText();
    updateSidebarWins();
  };

function updateWinText() {
   if (currentGame.winner === 'alien') {
    winResults.innerText = 'You won this round!';
  } else if (currentGame.winner === 'computer') {
    winResults.innerText = 'The computer won this round.';
  } else {
    winResults.innerText = 'This round was a tie, try again!';
  }
  userImage.classList.remove('hidden');
  computerImage.classList.remove('hidden');
};

function updateSidebarWins() {
  userWins.innerText = `${currentGame.alien.wins}`;
  computerWins.innerText = `${currentGame.computer.wins}`;
}

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
  userImage.classList.add('hidden');
  computerImage.classList.add('hidden');
  showGamePage();
};

//I want to ask about this function
//It is only updating the content of something in the game and player classes,
//Should I move this to the game.js file? Or leave it here?
//Main.js is specifically for the DOM
function changeToken() {
  if (currentGame.alien.token === './assets/black-and-white-alien.png') {
    currentGame.alien.token = './assets/pink-alien.png';
  } else if (currentGame.alien.token === './assets/pink-alien.png') {
    currentGame.alien.token = './assets/blue-alien.png';
  } else if (currentGame.alien.token === './assets/blue-alien.png') {
    currentGame.alien.token = './assets/black-and-white-alien.png';
  }
  changeTokenAlt();
  displayUserToken();
};

function displayUserToken() {
  userCharacter.src = currentGame.alien.token;
}

function changeTokenAlt() {
  if (currentGame.alien.token === './assets/black-and-white-alien.png') {
    userCharacter.alt = 'little alien head';
  } else if (currentGame.alien.token === './assets/pink-alien.png') {
    userCharacter.alt = 'little pink alien';
  } else if (currentGame.alien.token === './assets/blue-alien.png') {
    userCharacter.alt = 'little alien in ship';
  }
};
