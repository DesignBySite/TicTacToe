import { useState } from 'react';
import './App.scss';
import Square from './Square/Square';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const nextSquares = squares.slice();
    if (nextSquares[i] === "X") {
      nextSquares[i] = null;
      setSquares(nextSquares);
      return;
    }
    nextSquares[i] = "X";
    setSquares(nextSquares);
    
  }

  return (
    <section className='game-board'>
        <div className='game-board_three-squares'>
          <Square value={squares[0]} handleClick={() => handleClick(0)}/>
          <Square value={squares[1]} handleClick={() => handleClick(1)}/>
          <Square value={squares[2]} handleClick={() => handleClick(2)}/>
        </div>
        <div className='game-board_three-squares'>
          <Square value={squares[3]} handleClick={() => handleClick(3)}/>
          <Square value={squares[4]} handleClick={() => handleClick(4)}/>
          <Square value={squares[5]} handleClick={() => handleClick(5)}/>
        </div>
        <div className='game-board_three-squares'>
          <Square value={squares[6]} handleClick={() => handleClick(6)}/>
          <Square value={squares[7]} handleClick={() => handleClick(7)}/>
          <Square value={squares[8]} handleClick={() => handleClick(8)}/>
        </div>
    </section>
  );
}

export default App;
