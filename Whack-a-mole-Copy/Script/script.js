// Queries
const startButton = document.querySelector(`#startButton`);
const restartButton = document.querySelector(`#restartButton`);
const gameContainer = document.querySelector(`#gameContainer`);
const score = document.querySelector(`#score`);
const timer = document.querySelector(`#time`);
const hittable = document.querySelector(`.hittable`)


//Mole Holes
    const moles = document.querySelectorAll(`.mole`)
    const moleHill = document.querySelector(`#moleHill`);
    const hole0 = document.querySelector(`#h1Hole`);
    hole0.setAttribute(`draggable`, false)
    const hole1 = document.querySelector(`#h2Hole`);
    hole1.setAttribute(`draggable`, false)
    const hole2 = document.querySelector(`#h3Hole`);
    hole2.setAttribute(`draggable`, false)
    const hole3 = document.querySelector(`#h4Hole`);
    hole3.setAttribute(`draggable`, false)
    const hole4 = document.querySelector(`#h5Hole`);
    hole4.setAttribute(`draggable`, false)
    const hole5 = document.querySelector(`#h6Hole`);
    hole5.setAttribute(`draggable`, false)
    const hole6 = document.querySelector(`#h7Hole`);
    hole6.setAttribute(`draggable`, false)
    const hole7 = document.querySelector(`#h8Hole`);
    hole7.setAttribute(`draggable`, false)
    const hole8 = document.querySelector(`#h9Hole`);
    hole8.setAttribute(`draggable`, false)
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
    countDown: 30,
    points: 0,
    

    timeKeeper: ()=>{
        function tick(){
            game.countDown--;
            timer.textContent = game.countDown
            if(game.countDown>0){
                setTimeout(tick, 1000)
            }else{
                restartButton.classList.add(`button-87`);
                restartButton.classList.remove(`hide`);
                timer.textContent = `Game Over!`
                game.gameOver = true
            };
        };
        tick();
    },
    

    moleRandomizer: ()=>{
        let moleChance = Math.ceil(Math.random()*20).toFixed(0);
        if (moleChance >= 19) {
            game.currentMole = `Images/mole5Point.png`
            // game.currentMole = `Images/mole1Point.png`
        } else if(moleChance <= 18 && moleChance >= 7){
            game.currentMole = `Images/mole1Point.png`
        } else if(moleChance <= 6 && moleChance >= 3){
            game.currentMole = `Images/bunny1Point.png`
            // game.currentMole = `Images/mole1Point.png`
        } else {
            game.currentMole = `Images/bunny3Point.png`
            // game.currentMole = `Images/mole1Point.png`
        };
    },

    holeRandomizer: ()=>{
        let holeChance = Math.ceil(Math.random()*9).toFixed(0);
        if(holeChance <= 9 && holeChance > 8){
            game.currentHole = hole8;
        }else if(holeChance <= 8 && holeChance > 7){
            game.currentHole = hole7;
        }else if(holeChance <= 7 && holeChance > 6){
            game.currentHole = hole6;
        }else if(holeChance <= 6 && holeChance > 5){
            game.currentHole = hole5;
        }else if(holeChance <= 5 && holeChance > 4){
            game.currentHole = hole4;
        }else if(holeChance <= 4 && holeChance > 3){
            game.currentHole = hole3;
        }else if(holeChance <= 3 && holeChance > 2){
            game.currentHole = hole2;
        }else if(holeChance <= 2 && holeChance > 1){
            game.currentHole = hole1;
        }else{
            game.currentHole = hole0;
        };
    },

    swapOut: ()=>{
        game.holeRandomizer();
        game.moleRandomizer();
        game.currentHole.classList.add(`hittable`);
        game.currentHole.src = game.currentMole;
    },

    swapBack: ()=>{
        game.currentHole.classList.remove(`hittable`);
        game.currentHole.src = `Images/moleHole.png`;
    },

    peek: ()=>{
        const popUpTime =(minTime, maxTime)=>{
            return Math.round(Math.random()*(maxTime - minTime)+minTime);
        };
        const randTime = popUpTime(430, 1200);

        if(game.gameOver !== false){
            return
        }else{
            game.swapOut();
            peekTime = setInterval(()=>{
                game.swapBack();
                // console.log(`poof`)
                game.peek();
                clearInterval(peekTime);
            }, randTime);
        };
    },

    targetCheck: ()=>{
        
    },

    hitTracker: (e)=>{
        // console.log(`mole`, e.target.classList.contains(`hittable`))
        if(e.target.classList.contains(`hittable`) === true && game.currentMole === `Images/mole1Point.png`){
            console.log(`hit`);
            game.points++;
            score.textContent = game.points;
        }
        else if(e.target.classList.contains(`hittable`) === true && game.currentMole === `Images/mole5Point.png`){
            console.log(`hit`);
            game.points+=5;
            score.textContent = game.points;
        }else if(e.target.classList.contains(`hittable`) === true && game.currentMole === `Images/bunny1Point.png`){
            console.log(`hit -1`);
            game.points--;
            score.textContent = game.points;
        }else if(e.target.classList.contains(`hittable`) === true && game.currentMole === `Images/bunny3Point.png`){
            console.log(`hit -3`);
            game.points-=3;
            score.textContent = game.points;
        };
        game.swapBack();
    },

    start: ()=>{
        game.timeKeeper();
        game.peek();
    },
};


// Buttons
startButton.addEventListener(`click`, ()=>{
    startButton.classList.add(`hide`);
    startButton.classList.remove(`button-87`);

    game.start();
});

restartButton.addEventListener(`click`, ()=>{
    location.reload()
});

const hitTracker = moles.forEach(mole => mole.addEventListener(`click`, (e)=> game.hitTracker(e) ));
