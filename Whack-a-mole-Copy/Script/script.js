// Queries
const startButton = document.querySelector(`#startButton`);
const restartButton = document.querySelector(`#restartButton`);
const gameContainer = document.querySelector(`#gameContainer`);
const score = document.querySelector(`#score`);
const timer = document.querySelector(`#time`);


//Mole Holes
    const moles = document.querySelectorAll(`.mole`)
    const moleHill = document.querySelector(`#moleHill`);
    const hole0 = document.querySelector(`#h1Hole`);
    const hole1 = document.querySelector(`#h2Hole`);
    const hole2 = document.querySelector(`#h3Hole`);
    const hole3 = document.querySelector(`#h4Hole`);
    const hole4 = document.querySelector(`#h5Hole`);
    const hole5 = document.querySelector(`#h6Hole`);
    const hole6 = document.querySelector(`#h7Hole`);
    const hole7 = document.querySelector(`#h8Hole`);
    const hole8 = document.querySelector(`#h9Hole`);
    const moleHillArr = [
        hole0, hole1, hole2, 
        hole3, hole4, hole5, 
        hole6, hole7, hole8
    ];

// Variables 
let lastPopUp = null;


// Game

const game = {
    gameOver: false,
    currentHole: hole0,
    currentMole: `Images/moleHole.png`,
    countDown: 5,
    points: 0,
    

    timeKeeper: ()=>{
        function tick(){
            game.countDown--;
            timer.textContent = game.countDown
            if(game.countDown>0){
                setTimeout(tick, 1000)
            }else{
                timer.textContent = `Game Over!`
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

    holeRandomizer: ()=>{
        let holeChance = Math.ceil(Math.random()*9).toFixed(0);
        if(holeChance <= 9 && holeChance > 8){
            game.currentHole = hole8
        }else if(holeChance <= 8 && holeChance > 7){
            game.currentHole = hole7
        }else if(holeChance <= 7 && holeChance > 6){
            game.currentHole = hole6
        }else if(holeChance <= 6 && holeChance > 5){
            game.currentHole = hole5
        }else if(holeChance <= 5 && holeChance > 4){
            game.currentHole = hole4
        }else if(holeChance <= 4 && holeChance > 3){
            game.currentHole = hole3
        }else if(holeChance <= 3 && holeChance > 2){
            game.currentHole = hole2
        }else if(holeChance <= 2 && holeChance > 1){
            game.currentHole = hole1
        }else{
            game.currentHole = hole0
        };
    },

    swapOut: ()=>{
        game.holeRandomizer()
        game.moleRandomizer()
        game.currentHole.src = game.currentMole
    },

    swapBack: ()=>{
        game.currentHole.src = `Images/moleHole.png`
    },
    
    peek: ()=>{
        if(game.gameOver !== false){
            return
        }else{
            game.swapOut();
            peekTime = setInterval(()=>{
                game.swapBack()
                console.log(`poof`)
                game.peek()
                clearInterval(peekTime)
            }, 1000);
        };
    },

    hitTracker: ()=>{
        game.swapBack();
        console.log(`point`);
    },

    start: ()=>{
        game.timeKeeper();
        game.scoreTracker();
        game.peek();
    },
};

console.log(game.currentMole)
console.log(game.currentHole.src)


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

let hitTracker = moles.forEach(mole => mole.addEventListener(`click`, game.hitTracker));