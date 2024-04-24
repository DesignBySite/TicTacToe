import { useState } from 'react';
import './App.scss';
import Square from './Square/Square';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
    const sqArr = []
    const rows = []
    let num = 1;

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

    squares.forEach((val, i) => {
        sqArr.push(
          <Square
            value={val}
            id={i}
            key={`sqaure-component-${i*Math.random()}`}
            handleClick={() => handleClick(i)}
          />
        )
        if (num%3 === 0) {
            rows.push(
                <div className='game-board_three-squares' key={`square-list-${num*Math.random()}`}>
                    {sqArr.splice(0, 3)}
                </div>
            )
        }
        num++;
    });

  return (
    <section className='game-board'>
        {rows}
    </section>
  );
}

export default App;
