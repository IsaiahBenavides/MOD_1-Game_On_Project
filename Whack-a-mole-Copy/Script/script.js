// Queries
const startButton = document.querySelector(`#startButton`);
const restartButton = document.querySelector(`#restartButton`);
const gameContainer = document.querySelector(`#gameContainer`);
const score = document.querySelector(`#score`);
const timer = document.querySelector(`#time`);


//Mole Holes
    const moleHill = document.querySelector(`#moleHill`);
    const hole1 = document.querySelector(`#h1Hole`);
    const hole2 = document.querySelector(`#h2Hole`);
    const hole3 = document.querySelector(`#h3Hole`);
    const hole4 = document.querySelector(`#h4Hole`);
    const hole5 = document.querySelector(`#h5Hole`);
    const hole6 = document.querySelector(`#h6Hole`);
    const hole7 = document.querySelector(`#h7Hole`);
    const hole8 = document.querySelector(`#h8Hole`);
    const hole9 = document.querySelector(`#h9Hole`);
    const moleHillArr = [
        hole1, hole2, hole3, 
        hole4, hole5, hole6, 
        hole7, hole8, hole9
    ];

// Variables 
let lastPopUp = null;


// Game

const game = {
    gameOver: false,
    currentHole: hole1,
    currentMole: `Images/mole1Point.png`,
    timeKeeper: ()=>{
        let countDown = 5;
        function tick(){
            countDown--;
            timer.textContent = countDown
            if(countDown>0){
                setTimeout(tick, 1000)
            }else{
                timer.textContent = `00`
                game.gameOver = true
            };
        };
        tick()
    },
    
    moleRandomizer: ()=>{
        let moleChance = Math.ceil(Math.random()*20).toFixed(0);
        if (moleChance >= 19) {
            game.currentMole = `Images/mole5Point.png`
        } else if(moleChance <= 18 && moleChance >= 7){
            game.currentMole = `Images/mole1Point.png`
        } else if(moleChance <= 6 && moleChance >= 3){
            game.currentMole = `Images/bunny1Point.png`
        } else {
            game.currentMole = `Images/bunny3Point.png`
        }
    },

    swapOut: ()=>{
        game.moleRandomizer()
        game.currentHole.src = game.currentMole
    },

    swapBack: ()=>{
        game.currentHole.src = `Images/moleHole.png`
    },
    
    peek: ()=>{
        game.swapOut();
        setInterval(()=>{
            game.swapBack()
        }, 3000);
    },



    start: ()=>{
        game.timeKeeper();
        game.scoreTracker();
    },
};
game.peek()

// Buttons
startButton.addEventListener(`click`, ()=>{
    startButton.classList.add(`hide`);
    startButton.classList.remove(`button-87`);

    restartButton.classList.add(`button-87`);
    restartButton.classList.remove(`hide`);

    game.start();
});

restartButton.addEventListener(`click`, ()=>{
    location.reload()
});