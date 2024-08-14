import { useState } from "react";
import Board from "./components/Board";

function App() {
  // Variables
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  //  functions
  function handSquareClick(index) {
    const newSquare = [...squares];
    // is meant for items that have already been clicked
    if (squares[index] !== null) return;
    newSquare[index] = player;
    setSquares(newSquare);
    // Switching the player based on the player
    setPlayer(player == "X" ? "O" : "X");
  }
  return (
    <>
      <Board square_limits={squares} squareClick={handSquareClick} />
    </>
  );
}

export default App;
