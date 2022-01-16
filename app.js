let min=1,
    max=10,
    winningNum=getWinningNum(min,max),
    guessesLeft=3;

const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num')
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {
    //console.log(1);
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

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
        gameOver();
    }
    //wrong answer
    guessesLeft -= 1;
    if (guessesLeft === 0) {
        setMessage('Guesses over you lost!','red');
        guessInput.disabled = true;
        guessInput.style.borderColor = 'red';
        gameOver();
    }
    else{
        setMessage(`${guessesLeft} Chances left!`, 'red');
        guessInput.value = "";
        guessInput.style.borderColor = 'red';
    }
    e.preventDefault();
})

function setMessage(msg,color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(e) {
    guessBtn.value = "Play Again";
    guessBtn.className += 'play-again';
}

function getWinningNum(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

