const guessForm = document.getElementById('guess-form');
const msg = document.getElementById('msg');
const guessNumber = 67; // You can randomize this number if desired

guessForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const userGuess = parseInt(document.getElementById('number').value);

    if (isNaN(userGuess)) {
        msg.textContent = "Please enter a valid number.";
        msg.style.color = "red";
        return;
    }

    if (userGuess < guessNumber) {
        msg.textContent = "Enter a number bigger than this.";
        msg.style.color = "red";
    } else if (userGuess > guessNumber) {
        msg.textContent = "Enter a number lesser than this.";
        msg.style.color = "red";
    } else {
        msg.textContent = "Congratulations! You guessed the number ";
        msg.style.color = "blue";
    }
});
