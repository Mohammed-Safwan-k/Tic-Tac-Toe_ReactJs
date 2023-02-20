import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Square from "./components/Square";

const defaultSquares = () => new Array(9).fill(null);

function App() {
  const [squares, setSquares] = useState(defaultSquares());

  function handleSquareClick(index) {
    let newSquares = squares;
    newSquares[index] = "X";
    setSquares([...newSquares]);
  }

  return (
    <main>
      <Board>
        {squares.map((square, index) => (
          <Square
            X={square === "X" ? 1 : 0}
            O={square === "O" ? 1 : 0}
            onClick={() => handleSquareClick(index)}
          />
        ))}
      </Board>
    </main>
  );
}

export default App;
