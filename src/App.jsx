import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helpers';

import './styles/root.scss';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [isXNext, setisXNext]=useState(false);
  // console.log(board);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  console.log('history', history);
  const winner = calculateWinner(current.board);
  // console.log(winner);
  

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return; //doing nothing if the square is already filled or if the winner has been found
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          if (last.isXNext === true) {
            // setisXNext(false);
            return 'X';
          } else {
            // setisXNext(true);
            return 'O';
          }
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
    };
    
    
  // };
  const moveTo = move => setCurrentMove(move) ;
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      {/* <h2>{message}</h2>  */}
      {/* for declaring winner */}
      <StatusMessage winner={winner} current={current}/>
      <Board handleSquareClick={handleSquareClick} board={current.board} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
