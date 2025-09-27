let secretNumber = Math.floor(Math.random() * 10) + 1;
const guessBtn = document.getElementById('guessBtn');
const guessInput = document.getElementById('guessInput');
const feedback = document.getElementById('feedback');
const restartBtn = document.getElementById('restartBtn');

guessBtn.addEventListener('click', () => {
    const guess = Number(guessInput.value);
    if (!guess || guess < 1 || guess > 10) {
        feedback.textContent = 'Please enter a number between 1 and 10.';
        return;
    }
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
    secretNumber = Math.floor(Math.random() * 10) + 1;
    feedback.textContent = '';
    guessInput.value = '';
    guessBtn.disabled = false;
    restartBtn.style.display = 'none';
});
