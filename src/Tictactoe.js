import { useState } from "react";
import "./Tictactoe.css";


export function Tictactoe() {
  const [board, setboard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  // useState([0,1,2,3,4,5,6,7,8])

  const decidewinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (var i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      //  console.log(a,b,c);
      if (
        (board[a] !== null) & (board[a] === board[b]) &&
        board[b] === board[c]
      ) {
        //  console.log("winner is ",board[a])
        return board[a];
      }
    }
    return null;
  };
  const winner = decidewinner(board);

  const [isXturn, setXturn] = useState(true);

  const handleclick = (index) => {
    // console.log(index);
    if (winner === null && board[index] === null) {
      const boardcopy = [...board];
      boardcopy[index] = isXturn ? "x" : "o";
      //   boardcopy[index] = isXturn ? "x" : "o";
      // console.log(boardcopy);
      setboard(boardcopy);
      setXturn(!isXturn);
    }
  };
  return (
    <div className="App">
      <div className="container" id="tttgame-container">
        <div class="x-o-button">
          <button
            className="btn  player-x-button"
            onClick={() => {
              setXturn(true);
            }}>player X</button>
          <button
            className="btn  player-o-button"
            onClick={() => {
              setXturn(false);
            }}>player O</button>
             <div>
              <button
                className="btn btn-success restart-button"
                onClick={() => {
                  setboard([
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                      null,
                    null,
                    null,
                 ]);
             }}><i className="bi bi-arrow-repeat mr-1"></i>Restart</button>
            </div>
        </div>
        <div className="row" id="gamebox-row">
          <div class="full-game">
            <div className="board">
              {board.map((val, index) => (
                <Tictactoegame val={val} onplayerclick={() => handleclick(index)} />
              ))}
            </div>

            <div className="result">{winner ? <h2>winner is: {winner}🎉💥</h2> : ""}</div>
           
          </div>
        </div>
      </div>
    </div>
  );
}


function Tictactoegame({ val, onplayerclick }) {
    const styles = {
      color: val === "x" ? "green" : "red",
    };
    // const [val,setval]=useState(null)
    return (
      <div>
        <div style={styles} onClick={() => onplayerclick()} className="colorbox">
          {val}
        </div>
      </div>
    );
  }

