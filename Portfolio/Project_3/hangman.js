// Array of words to choose from
const words = ['javascript', 'hangman', 'programming', 'computer', 'internet', 'algorithm', 'function', 'variable', 'array', 'object', 'loop', 'conditional', 'developer', 'keyboard', 'mouse', 'monitor', 'database', 'server', 'client'];

// Select a random word from the array
let randomWord = '';
let hiddenWord = '';
let guessedLetters = [];

// Initialize the game state
let correctGuesses = 0;
let incorrectGuesses = 0;
const maxIncorrectGuesses = 10;

// Function to initialize the game
function initializeGame() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  hiddenWord = '_'.repeat(randomWord.length);
  guessedLetters = [];
  correctGuesses = 0;
  incorrectGuesses = 0;
  displayWord();
  displayGuessesLeft();
}

// Function to display the current state of the word with underscores for unguessed letters
function displayWord() {
  document.getElementById('word-display').textContent = hiddenWord.split('').join(' ');
}

// Function to display the remaining guesses count
function displayGuessesLeft() {
  const guessesLeft = maxIncorrectGuesses - incorrectGuesses;
  document.getElementById('guesses-left').textContent = `Guesses Left: ${guessesLeft}`;
}

// Function to process a guessed letter
function guessLetter() {
  const guessInput = document.getElementById('guess-input');
  const guess = guessInput.value.toLowerCase().trim();
  guessInput.value = '';

  if (guess === '') {
    alert('Please pick one letter to begin.')
    return;
  }

  if (guess.length >= 2) {
    alert('Please only pick one letter!')
    return;
  }

  if (guessedLetters.includes(guess)) {
    alert('You already guessed that letter!');
    return;
  }

  guessedLetters.push(guess);

  if (randomWord.includes(guess)) {
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === guess) {
        hiddenWord = hiddenWord.substr(0, i) + guess + hiddenWord.substr(i + 1);
        correctGuesses++;
      }
    }
  } else {
    incorrectGuesses++;
  }

  displayWord();
  displayGuessesLeft();

  if (correctGuesses === randomWord.length) {
    alert('Congratulations! You won the game.');
    endGame();
  } else if (incorrectGuesses === maxIncorrectGuesses) {
    alert('You lose! Better luck next time.\nThe word was: ' + randomWord);
    endGame();
  }
}

// Function to end the game
function endGame() {
  // Disable guess input and button
  document.getElementById('guess-input').disabled = true;
  document.getElementById('guess-button').disabled = true;
}

// Function to restart the game
function restartGame() {
  // Enable guess input and button
  document.getElementById('guess-input').disabled = false;
  document.getElementById('guess-button').disabled = false;
  
  // Clear word display
  document.getElementById('word-display').textContent = '';

  // Reset game variables and start a new game
  initializeGame();
}

// Initialize the game on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeGame();

  const guessButton = document.getElementById('guess-button');
  guessButton.addEventListener('click', guessLetter);

  const guessInput = document.getElementById('guess-input');
  guessInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      guessLetter();
    }
  });

  const restartButton = document.getElementById('restart-button');
  restartButton.addEventListener('click', restartGame);
});
