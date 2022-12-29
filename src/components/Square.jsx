import React from 'react';

// import './Square.style.css';

const Square = ({ value, onClickF , isWinningSquare}) => {
  // console.log(props);
  return <button type="button"  onClick={onClickF} 
  className={`square ${isWinningSquare?'winning':''}${value==='X'?'text-green':'text-orange'}`}
  //style={{fontWeight: isWinningSquare?'bold':'normal'}}
  >
    {value}
    </button>;
};

export default Square;
