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

// The board is a grid with an x and y axis so I made a function that uses foor loops to push an empty tile object into an empty row array into an empty board array that houses all the tiles and rows
const makeBoard = (size, bombs)=>{
    const board = [];
    let bombTiles = 0

    for (let x = 0; x < size; x++){
        const row = [];
        for (let y = 0; y < size; y++){
            const tile = {
                x,
                y,
            }; // I need to randomly place bombs into tiles so long as there are still bombs needing to be placed
            do {
                let randomNum = Math.random()*1
                // Still need a way to check if all bombs are placed
                    // if (){
                        if(randomNum>0.5){
                            tile.x = `!Boom!`
                            bombTiles++
                            console.log(randomNum)
                            console.log(bombTiles)
                        }else{
                            tile.y = `!Boom!`
                            bombTiles++
                            console.log(randomNum)
                            console.log(bombTiles)
                        };
                    // };
            } while (bombs >= bombTiles);
        row.push(tile);
    };
    board.push(row);
};
    return board
};

const game = {
    start: ()=>{
        console.log(makeBoard(2,1))
    }
};
