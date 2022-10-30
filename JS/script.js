// Quereies
const startBtn = document.querySelector(`#startButton`);
const gameField = document.querySelector(`#gameContainer`);
const restartBtn = document.querySelector(`#restartButton`);
const gameBoard = document.querySelector(`#gameBoard`)

// Event listeners
startBtn.addEventListener(`click`, ()=>{
    startBtn.classList.add(`hide`);
    startBtn.classList.remove(`button-87`);

    restartBtn.classList.add(`button-87`);
    restartBtn.classList.remove(`hide`);

    gameBoard.classList.add(`center`);
    gameBoard.classList.remove(`hide`);

    game.start();
});

restartBtn.addEventListener(`click`, ()=>{
    location.reload()
});

// The game itself
// const gameParams = {
//     rows: 8,
//     columns:8,
//     bombs: 10,
//     bombImg: `💥`,
//     lose: false,
//     warnings: {1: `blue`, 2: `yellow`, 3: `red`, 4: `orange`, 5: `green`, 6: `purple`, 7: `aqua`, 8: `chartreuse`}
// };

const makeBoard = (size, bombs)=>{
    const board = [];
    
    for (let x = 0; x < size; x++){
        const row = [];
        for (let y = 0; y < size; y++){
            const tile = {
                xAxis,
                yAxis,
            };
            row.push(tile);
        };
        board.push(row);
    };
    return board
};

const game = {
    start: ()=>{
        makeBoard()
    }
};
