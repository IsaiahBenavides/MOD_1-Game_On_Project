// Quereies
const startBtn = document.querySelector(`#startButton`);
const gameField = document.querySelector(`#gameContainer`);
const restartBtn = document.querySelector(`#restartButton`);

// Event listeners
startBtn.addEventListener(`click`, ()=>{
    startBtn.classList.add(`hide`);
    startBtn.classList.remove(`button-87`);

    restartBtn.classList.add(`button-87`);
    restartBtn.classList.remove(`hide`);
    
});

restartBtn.addEventListener(`click`, ()=>{
    location.reload()
});

// The game itself
const gameParams = {
    rows: 8,
    columns:8,
    bombs: 10,
    bombImg: `💥`,
    lose: false,
    warnings: {1: `blue`, 2: `yellow`, 3: `red`, 4: `orange`, 5: `green`, 6: `purple`, 7: `aqua`, 8: `chartreuse`}
};

const game = {
    
};
