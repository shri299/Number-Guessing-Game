let min=1,
    max=10,
    winningNum=2,
    guessesLeft=3;

const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num')
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click',function (e) {
    let guess = parseInt(guessInput.value);
    // console.log(guess);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`,'red')
    }

    //check if won
    if (guess===winningNum) {
        //disable the input
        guessInput.disabled = true;
        //change the border color
        guessInput.style.borderColor = 'green';
        //display message
        setMessage('wohoo you wonn!!! Click to play again','green');
        //change to play again button
        guessBtn.value = 'Play Again';
    }
    e.preventDefault();
})

function setMessage(msg,color) {
    message.style.color = color;
    message.textContent = msg;
}