import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  // ? `The winner is ${winner}`
  // : `It's turn of ${current.isXNext ? 'X' : 'O'}`;
  const noMovesLeft = current.board.every(val => val !== null);
  //  if the callback fnction returns true for every element of the array then .every method returns true
  return (
    <div className='status-message'>
      {/* {winner && `The winner is ${winner}`} */}
      {winner && (
      <>
      Winner is {' '}
      <span className={winner==='X'?'text-green':'text-orange'}>{winner}</span>
      </>
      )}
      {/*this will be rendered if it retrns true*/}
      {/* example of conditional rendering */}
      {!winner && !noMovesLeft &&
      <>
      Next Player is <span className={current.isXNext?'text-green':'text-orange'}>{current.isXNext?'X':'O'}</span>
      </>
       }
      {/* {!winner && !noMovesLeft && `It's turn of ${current.isXNext ? 'X' : 'O'}`} */}
      {/*this will be rendered if it retrns true*/}
      {noMovesLeft && !winner &&
      <>
      It's a Draw between <span className="text-green">X</span> and <span className="text-orange">O</span>
      </>
      }
      {/*this will be rendered if it retrns true*/}
    </div>
  );
};

export default StatusMessage;
