const Square = ({value, handleClick, id}) => {
    return (
        <button className='game-board_square' id={id} key={`square-${id*Math.random()}`} onClick={handleClick}>{value}</button>
    )
}

export default Square;