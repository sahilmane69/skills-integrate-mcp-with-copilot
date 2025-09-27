
let min = 1;
let max = 10;
let secretNumber;
let attempts = 0;
let previousGuesses = [];
const minInput = document.getElementById('minInput');
const maxInput = document.getElementById('maxInput');
const startBtn = document.getElementById('startBtn');
const rangeSetup = document.getElementById('rangeSetup');
const gameArea = document.getElementById('gameArea');
const rangeText = document.getElementById('rangeText');
const guessBtn = document.getElementById('guessBtn');
const guessInput = document.getElementById('guessInput');
const feedback = document.getElementById('feedback');
const restartBtn = document.getElementById('restartBtn');
const attemptsDisplay = document.getElementById('attempts');
const prevGuessesDisplay = document.getElementById('prevGuesses');



startBtn.addEventListener('click', () => {
    min = Number(minInput.value);
    max = Number(maxInput.value);
    if (isNaN(min) || isNaN(max) || min >= max) {
        alert('Please enter valid min and max values (min < max).');
        return;
    }
    secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    guessInput.min = min;
    guessInput.max = max;
    rangeText.textContent = `Guess a number between ${min} and ${max}:`;
    rangeSetup.style.display = 'none';
    gameArea.style.display = 'block';
    attempts = 0;
    previousGuesses = [];
    attemptsDisplay.textContent = '';
    prevGuessesDisplay.textContent = '';
    feedback.textContent = '';
    guessInput.value = '';
    guessBtn.disabled = false;
    restartBtn.style.display = 'none';
});

guessBtn.addEventListener('click', () => {
    const guess = Number(guessInput.value);
    if (!guess || guess < min || guess > max) {
        feedback.textContent = `Please enter a number between ${min} and ${max}.`;
        return;
    }
    attempts++;
    previousGuesses.push(guess);
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    prevGuessesDisplay.textContent = `Previous guesses: ${previousGuesses.join(', ')}`;
    if (guess === secretNumber) {
        feedback.textContent = 'Correct! You guessed the number!';
        guessBtn.disabled = true;
        restartBtn.style.display = 'inline-block';
    } else if (guess < secretNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else {
        feedback.textContent = 'Too high! Try again.';
    }
});


restartBtn.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    attempts = 0;
    previousGuesses = [];
    attemptsDisplay.textContent = '';
    prevGuessesDisplay.textContent = '';
    feedback.textContent = '';
    guessInput.value = '';
    guessBtn.disabled = false;
    restartBtn.style.display = 'none';
});
