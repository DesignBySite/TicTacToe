const Square = ({value, handleClick, id}) => {

    return (
        <button className='game-board_square' id={id} onClick={handleClick}>{value}</button>
    )
}

export default Square;