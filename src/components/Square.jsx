import React from 'react';

// import './Square.style.css';

const Square = ({ value, onClickF }) => {
  // console.log(props);
  return <button type="button" className='square' onClick={onClickF}>
    {value}
    </button>;
};

export default Square;
