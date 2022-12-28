// get the below snippet using rafce
import React, { useState } from 'react';

import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setisXNext]=useState(false)
  // console.log(board);
  const handleSquareClick = (position) => { 
    if (board[position])
    {
      return; //doing nothing if the square is already filled
    }
    setBoard((prev) => {
      return prev.map( (square,pos)=>{
        if(pos===position)
        {
          if (isXNext===true){
              setisXNext(false);
              return 'X';
          }
          else {
            setisXNext(true);
            return 'O';
          }
        }
        return square;
      })
    }); 
  };
  
  const renderSquare = (position) => {
    return (
      <Square
        value={board[position]}
        onClickF={() => handleSquareClick(position) }
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {/* <Square value={board[0]} onClick={handleSquareClick}/> */}
        {/* the above wont work as onclick function will be immediately executed, so do the following */}
        {/* <Square value={board[0]} onClick={()=>{handleSquareClick(0)}}/> */}
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
