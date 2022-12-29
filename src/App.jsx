import React , {useState} from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";

import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setisXNext]=useState(false);
  console.log(board);

  const winner = calculateWinner(board);
  // console.log(winner);
  const message=  winner ? `The winner is ${winner}` : `It's turn of ${isXNext?"X":"O"}` ;

  const handleSquareClick = (position) => { 
    if (board[position] || winner)
    {
      return; //doing nothing if the square is already filled or if the winner has been found
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
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>  {/* for declaring winner */}
      <Board handleSquareClick={handleSquareClick} board={board}/>
    </div>
  );
};

export default App;
