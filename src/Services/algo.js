/*const numbers = [34, 343434, 34, 54,12, 84, 34];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers.reduce(reducer));
const modulo=(nb1, nb2)=> nb1 % nb2



*/




export const generateInitialGrid = size =>
    Array.from({ length: size }, () =>
        Array.from({ length: size }, () => Math.floor(Math.random() * 10 + 1) >= 8)
    );

export const renderALine = arr =>
    arr.reduce((acc, curr) => {
        acc += curr ? "X" : ".";
        return acc;
    }, "");

export const render = arr => arr.map(renderALine).join("\n");


export const isOutOfBound = ({ length }, { x, y }) =>
    x < 0 || y < 0 || x >= length || y >= length;

export const countAliveNeighbour = (grid, { x, y }) =>
    [
        [x - 1, y - 1],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y - 1],
        [x, y + 1],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1]
    ].filter(([i, j]) => !isOutOfBound(grid, { x: i, y: j }) && grid[i][j])
        .length;

export const getNextState = (isAlive, numberOfAliveNeighbours) =>
    isAlive
        ? numberOfAliveNeighbours === 2 || numberOfAliveNeighbours === 3
        : numberOfAliveNeighbours === 3;


export const step = grid => {
    let newGrid = JSON.parse(JSON.stringify(grid));
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            newGrid[i][j] = getNextState(
                grid[i][j],
                countAliveNeighbour(grid, { x: i, y: j })
            );
        }
    }
    return newGrid;
};



/*

module.exports = {
  render,
  renderALine,
  generateInitialGrid,
  countAliveNeighbour,
  isOutOfBound,
  step
}




console.log(render(generateInitialGrid(10)));
*/