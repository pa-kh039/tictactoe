import React from 'react';

// import './Square.style.css';

const Square = ({ value, onClickF , isWinningSquare}) => {
  // console.log(props);
  return <button type="button" className='square' onClick={onClickF} style={{fontWeight: isWinningSquare?'bold':'normal'}}>
    {value}
    </button>;
};

export default Square;
