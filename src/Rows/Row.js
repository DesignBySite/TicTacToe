import { useState } from "react";
import Square from "../Square/Square";

const Row = () => {
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
    
   
    squares.forEach((el, i) => {
        sqArr.push(<Square value={squares[i]} id={i} key={`square-${num}`}handleClick={() => handleClick(i)}/>)
        if (num%3 === 0) {
            rows.push(
                <div className='game-board_three-squares'>
                    {sqArr.splice(0, 3)}
                </div>
            )
        }
        num++;
    });
    
    return (
        rows
    )
}

export default Row;