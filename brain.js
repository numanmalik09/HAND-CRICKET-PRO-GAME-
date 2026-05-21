
let playerScore = 0;
let computerScore = 0;
let playerturn = true;
let target = 0;
const startButton = document.getElementById('start-button');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const startbutton = document.getElementById('start-button');
const msg = document.getElementById('msg');
const numButtons = document.querySelectorAll('.num-btn');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
 const restartButton = document.getElementById('restart-button')
startbutton.addEventListener('click', startGame);
numButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const playernumber = parseInt(button.innerText)
        const computernumber = Math.floor(Math.random() * 6) + 1;
        if (playernumber === computernumber) {
            msg.innerText = "OUT Computer is batting now!Target: " + (playerScore + 1)
            target = playerScore 
            playerturn = false
            gameScreen.querySelectorAll('.num-btn').forEach
            (function (btn) {
                btn.disabled = "none";
            })
            computerbat()
        
        } else {
            playerScore += playernumber
            msg.innerText = "you scored" + playernumber + "runs"
            playerScoreDisplay.innerText = "your Score: " + playerScore
        }
    })
});


function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    gameScreen.style.display = 'block';
    msg.textContent = 'CHOOSE A NUMBER';
}
 
function computerbat() {
    let interval = setInterval(function () {
        const computerPick = Math.floor(Math.random() * 6) + 1
        const playerPick = Math.floor(Math.random() * 6) + 1
        if(computerPick===playerPick){
            clearInterval(interval)
            resultScreen.style.display = 'block';
            gameScreen.style.display = 'none';
            document.getElementById('final-message').innerText = "Computer Is Out You Win!"
            msg.innerText = "Computer is OUT! You win!"
        } else{ 
            computerScore += computerPick
            computerScoreDisplay.innerText = "Computer Score:" + computerScore
            if(computerScore>target){
                clearInterval(interval)
                resultScreen.style.display = 'block';
                gameScreen.style.display = 'none';
                document.getElementById('final-message').innerText = "Computer Wins!"
                msg.innerText = "Computer wins!"
            }
        }
    }, 3000)
   
}
restartButton.addEventListener('click', function () {
    playerScore = 0;
    computerScore = 0;
    playerturn = true;
    target = 0;
    playerScoreDisplay.innerText = "Your Score: 0";
    computerScoreDisplay.innerText = "Computer Score: 0";
    msg.innerText = "CHOOSE A NUMBER";
    resultScreen.style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
    numButtons.forEach(function (btn) {
        btn.style.display = "none";
    } )
});