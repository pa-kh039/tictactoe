// get the below snippet using rafce
import React from 'react';

import Square from './Square';

const Board = ({handleSquareClick,board, winningSquares}) => {
  
  const renderSquare = (position) => {
    const isWinningSquare=winningSquares.includes(position);
    return (
      <Square
        value={board[position]}
        onClickF={() => handleSquareClick(position) }
        isWinningSquare={isWinningSquare}
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
