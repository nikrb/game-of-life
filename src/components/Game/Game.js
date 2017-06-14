
export default function Game( init) {
  const clear = () => {
    return Array(rows).fill(0).map( row => Array(cols).fill(0))
  };
  const setCell = (row, col, alive) => {
    cells[row][col] = alive;
  };
  const getNeighbours = ( row, col) => {
    let ret = [];
    // prev row, next row, prev col, next col
    let pr = ( row > 0)? row -1: rows-1;
    let nr = ( row < rows-1)? row + 1: 0;
    let pc = ( col > 0)? col -1: cols -1;
    let nc = ( col < cols-1)? col + 1: 0;
    ret.push( cells[pr][pc],  cells[pr][col],  cells[pr][nc],
              cells[row][pc], /*target cell*/  cells[row][nc],
              cells[nr][pc],  cells[nr][col],  cells[nr][nc]);
    return ret;
  };
  const countLive = ( arr) => {
    return arr.reduce( ( c, v) => {
      return (v)? c+1: c;
    });
  };
  const tick = () => {
    let new_cells = clear();
    for( let i=0; i < rows; i += 1 ){
      for( let j=0; j < cols; j += 1){
        const neighbours = getNeighbours( i, j);
        const alive_count = countLive( neighbours);
        if( cells[i][j] === 1){
          if( alive_count === 2 || alive_count === 3) new_cells[i][j] = 1;
        } else {
          if( alive_count === 3) new_cells[i][j] = 1;
        }
      }
    }
    cells = new_cells;
  };
  const getBoard = () => {
    return cells;
  };

  // private init
  const that = {};
  const { cols, rows} = init;
  let cells = clear();
  if( init.cells){
    init.cells.forEach( (cell) => {
      setCell( cell[0], cell[1], 1);
    });
  }

  // public exports
  that.clear = clear;
  that.getBoard = getBoard;
  that.setCell = setCell;
  that.nextGeneration = tick;
  that.getNeighbours = getNeighbours;
  that.countLive = countLive;
  return that;
}
