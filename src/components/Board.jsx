import Squares from "./Squares";

function Board({ square_limits, squareClick }) {
  return (
    <div className="board">
      <Squares value={square_limits[0]} onClick={() => squareClick(0)} />
      <Squares value={square_limits[1]} onClick={() => squareClick(1)} />
      <Squares value={square_limits[2]} onClick={() => squareClick(2)} />
      <Squares value={square_limits[3]} onClick={() => squareClick(3)} />
      <Squares value={square_limits[4]} onClick={() => squareClick(4)} />
      <Squares value={square_limits[5]} onClick={() => squareClick(5)} />
      <Squares value={square_limits[6]} onClick={() => squareClick(6)} />
      <Squares value={square_limits[7]} onClick={() => squareClick(7)} />
      <Squares value={square_limits[8]} onClick={() => squareClick(8)} />
    </div>
  );
}

export default Board;
