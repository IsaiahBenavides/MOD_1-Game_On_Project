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
let lastMole = null;

// Game

const game = {
    gameOver: false,

    //Problem: How do I keep track of the time elapsed during the game? How do I force the game to stop as soon as the timer reaches zero?
    timeKeeper: ()=>{
        let countDown = 60;
        function tick(){
            countDown--;
            timer.textContent = countDown
            if(countDown>0){
                setTimeout(tick, 1000)
            }else{
                timer.textContent = `00`
                gameOver = true
            }
        };
        tick()
    },

    // Problem: I need a way to track all of the different point values of the moles and bunnies hit
    scoreTracker: ()=>{

    },

    // Problem: I need to have a way to select a random mole hole. 
    // Solution: By using math random and multiplying it by the length of the moleHill array and tieing the output to a variable I can have a random mole hole selected every time the function is ran.
    // Problem 2: How to stop recursion?
    randomMoleHole: (moleHillArr)=>{
        const popUpChance = Math.floor(Math.random()*moleHillArr.length);
        const popUpMole = moleHillArr[popUpChance];
        // Solution 2: By making a variable for the last popUpChance to be stored in I can check to see if it repeats, and if it does I run the randomeMoleHole function again until it doesn't. This should help prevent recursion.
        if (popUpChance === lastPopUp){
            console.log(`Repeat, try again`);
            game.randomMoleHole(moleHillArr);
        };
        lastPopUp = popUpChance;
        // console.log(popUpMole);
        return popUpChance, popUpMole
    },
    

    // Problem: I have to figure out how to get the moles and bunnies to pop up with their respective images.
    moleRandomizer: ()=>{
        let moleChance = Math.ceil(Math.random()*20).toFixed(0);

        let popUp = game.randomMoleHole(moleHillArr)

        const popUpTime =(minTime, maxTime)=>{
            return Math.round(Math.random()*(maxTime - minTime)+minTime);
        };

        const randTime = popUpTime(300, 1000)

        // The lower the value the worse the pop up, 1-2 = minusThree, 3-8 = minusOne, 9-18 = onePoint, 19-20 = fivePoint
        if (moleChance >= 3 && moleChance <= 6){
            
            moleHillArr.forEach(hole => {
                if(hole.id === popUp.id){
                    const swapOut = ()=>{
                        setTimeout(()=>{
                            hole.src = `Images/moleHole.png`
                        }, randTime)
                    }
                    console.log(hole.src)
                    hole.src = `Images/bunny1Point.png`
                    swapOut()
                }
            });
            console.log(`3-6,`, moleChance)
        }


        // }else if(moleChance >= 7 && moleChance <= 18){
        //     let popUp = game.randomMoleHole(moleHillArr)
        //     console.log(`7-18`)
        // }else if (moleChance >= 19){
        //     let popUp = game.randomMoleHole(moleHillArr)
        //     console.log(`19+`)
        // }else{
        //     let popUp = game.randomMoleHole(moleHillArr)
        //     console.log(`2-`)
        // };

        // do {
            
        // } while (game.gameOver = false);
    },

    start: ()=>{
        game.timeKeeper();
        game.scoreTracker();
        game.moleRandomizer();
    },
};


game.moleRandomizer()
game.moleRandomizer()
game.moleRandomizer()
game.moleRandomizer()


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