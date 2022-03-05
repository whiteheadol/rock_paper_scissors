//Global Variables
var currentGame = new Game();

//Query Selectors
var classicImages = document.querySelector('.classic-images');
var spicyImages = document.querySelector('.spicy-images');
var userWins = document.querySelector('.user-wins');
var computerWins = document.querySelector('.computer-wins');
var clearButton = document.querySelector('.clear-button');
var subTitle = document.querySelector('.subtitle');
var fighterText = document.querySelector('.fighter-text');
var winResult = document.querySelector('.win-results');
var classicButton = document.querySelector('.classic-game');
var spicyButton = document.querySelector('.spicy-game');

var tokenButton = document.querySelector('.token-changer');
var userCharacter = document.querySelector('.character1');
var changeButton = document.querySelector('.change-game');

var userImage = document.querySelector('#userChoice');
var computerImage = document.querySelector('#computerChoice');


//Event Listeners
classicButton.addEventListener('click', function() {
  currentGame.determineGameType(event.target.id);
  showGamePage();
});

spicyButton.addEventListener('click', function() {
  currentGame.determineGameType(event.target.id);
  showGamePage();
});

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

tokenButton.addEventListener('click', displayUserToken);

changeButton.addEventListener('click', toggleChangeButton);

//Event Handlers & Functions
function showElement(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('hidden');
  }
};

function hideElement(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('hidden');
  }
}

function showGamePage() {
  showElement([fighterText]);
  hideElement([classicButton, spicyButton, subTitle, tokenButton]);
  if (currentGame.gameType === 'classic') {
    showElement([classicImages]);
  } else if (currentGame.gameType === 'spicy') {
    showElement([spicyImages]);
  }
};

function displayWins() {
  showElement([clearButton, winResult, changeButton]);
  hideElement([fighterText]);
  resetBoard();
  updateWinText();
  updateSidebarWins();
  displayWinIcons();
};

function updateWinText() {
   if (currentGame.winner === 'alien') {
    winResult.innerText = 'You won this round!';
  } else if (currentGame.winner === 'computer') {
    winResult.innerText = 'The computer won this round.';
  } else {
    winResult.innerText = 'This round was a tie, try again!';
  }
  showElement([userImage, computerImage]);
};

//Should this function be in the game class?
function updateWinIcon(choice) {
  if (choice === 'rock') {
    return './assets/happy-rocks.png';
  } else if (choice === 'paper') {
    return './assets/happy-paper.png';
  } else if (choice === 'scissors') {
    return './assets/happy-scissors.png';
  } else if (choice === 'lizard') {
    return './assets/lizard.png';
  } else if (choice === 'alien') {
    return './assets/happy-alien.png';
  }
};

function displayWinIcons() {
  userImage.src = updateWinIcon(currentGame.alienChoice);
  userImage.alt = `happy ${currentGame.alienChoice}`;
  computerImage.src = updateWinIcon(currentGame.computerChoice)
  computerImage.alt = `happy ${currentGame.computerChoice}`;
};

function updateSidebarWins() {
  userWins.innerText = `${currentGame.alien.wins}`;
  computerWins.innerText = `${currentGame.computer.wins}`;
};

function resetBoard() {
  if (currentGame.gameType === 'classic') {
    hideElement([classicImages]);
  } else if (currentGame.gameType === 'spicy') {
    hideElement([spicyImages]);
  }
};

function toggleChooseAgainButton() {
  hideElement([winResult, clearButton]);
  if (currentGame.gameType === 'classic') {
    showElement([classicImages]);
  } else if (currentGame.gameType === 'spicy') {
    showElement([computerImage]);
  }
  hideElement([userImage, computerImage]);
  showGamePage();
};

function displayUserToken() {
  currentGame.alien.changeToken();
  changeTokenAlt();
  userCharacter.src = currentGame.alien.token;
};

function changeTokenAlt() {
  if (currentGame.alien.token === './assets/black-and-white-alien.png') {
    userCharacter.alt = 'little alien head';
  } else if (currentGame.alien.token === './assets/pink-alien.png') {
    userCharacter.alt = 'little pink alien';
  } else if (currentGame.alien.token === './assets/blue-alien.png') {
    userCharacter.alt = 'little alien in ship';
  }
};

function toggleChangeButton() {
  currentGame.switchGameType();
  hideElement([changeButton, userImage, computerImage, clearButton, winResult]);
  showGamePage();
};
