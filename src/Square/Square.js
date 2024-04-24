const Square = ({value, handleClick}) => {

    return (
        <button className='game-board_square' onClick={handleClick}>{value}</button>
    )
}

export default Square;