// Queries
const startButton = document.querySelector(`#startButton`);
const restartButton = document.querySelector(`#restartButton`);
const gameContainer = document.querySelector(`#gameContainer`);
const score = document.querySelector(`#score`);
const timer = document.querySelector(`#time`);
const onePoint = document.querySelectorAll(`.onePoint`);
const fivePoint = document.querySelectorAll(`.fivePoint`);
const minusOnePoint = document.querySelectorAll(`.minusOnePoint`);
const minusThreePoint = document.querySelectorAll(`.minusThreePoint`);
const moleHoles = document.querySelectorAll(`.moleHole`)

    //Mole Holes
    const hole1 = document.querySelector(`#holeOne`);
    const hole2 = document.querySelector(`#holeTwo`);
    const hole3 = document.querySelector(`#holeThree`);
    const hole4 = document.querySelector(`#holeFour`);
    const hole5 = document.querySelector(`#holeFive`);
    const hole6 = document.querySelector(`#holeSix`);
    const hole7 = document.querySelector(`#holeSeven`);
    const hole8 = document.querySelector(`#holeEight`);
    const hole9 = document.querySelector(`#holeNine`);
    const moleHill = [
        hole1, hole2, hole3, 
        hole4, hole5, hole6, 
        hole7, hole8, hole9
    ];


// Game

const game = {
    gameOver: false,

    //Problem: How do I keep track of the time elapsed during the game? How do I force the game to stop as soon as the timer reaches zero?
    timeKeeper: ()=>{

    },

    // Problem: I need a way to track all of the different point values of the moles and bunnies hit
    scoreTracker: ()=>{

    },

    // Problem: I need to have a way to select a random mole hole. 
    // Solution: By using math random and multiplying it by the length of the moleHill array and tieing the output to a variable I can have a random mole hole selected every time the function is ran.
    randomMoleHole: (moleHill)=>{
        const popUpChance = Math.floor(Math.random()*moleHill.length);
        const popUpMole = moleHill[popUpChance];
        console.log(popUpMole)
    },

    // Problem: I have to figure out how to get the moles and bunnies to pop up with their respective images.
    moleRandomizer: ()=>{
        let moleChance = Math.ceil(Math.random()*4).toFixed(0);

        const popUpTime =(maxTime, minTime)=>{
            Math.round(Math.random()*(maxTime - minTime)+minTime);
        };

        do {
            
        } while (game.gameOver = false);
    },

    start: ()=>{
        timeKeeper()
        scoreTracker()
        moleRandomizer()
    },
};


game.randomMoleHole(moleHill)


// Buttons
startButton.addEventListener(`click`, ()=>{
    startButton.classList.add(`hide`);
    startButton.classList.remove(`button-87`);

    restartButton.classList.add(`button-87`);
    restartButton.classList.remove(`hide`);

    game.start()
});

restartButton.addEventListener(`click`, ()=>{
    location.reload()
});