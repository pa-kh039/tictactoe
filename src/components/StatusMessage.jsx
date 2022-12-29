import React from 'react';

const StatusMessage = ({winner,current}) => {

    // const message = winner
    // ? `The winner is ${winner}`
    // : `It's turn of ${current.isXNext ? 'X' : 'O'}`;
 const noMovesLeft=current.board.every((val)=> (val!==null));
//  if the callback fnction returns true for every element of the array then .every method returns true
  return (<h2>{winner && `The winner is ${winner}`}{/*this will be rendered if it retrns true*/}
  {/* example of conditional rendering */}
  {!winner && !noMovesLeft && `It's turn of ${current.isXNext ? "X" : "O"}`}{/*this will be rendered if it retrns true*/}
  {noMovesLeft && "It's a Draw "}{/*this will be rendered if it retrns true*/}
  </h2>);
};

export default StatusMessage;
