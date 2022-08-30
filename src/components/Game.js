import React, {useState} from "react"
import Board from "./Board"
import calculateWinner from "./CalculateWinner"


function Game() {


    const [History, setHistory] = useState([{ squares: Array(9).fill(null) }])
    const [draw, setDraw] = useState(false)
    // eslint-disable-next-line no-use-before-define
    
    let stepNumber = History.length
    let xIsNext = (stepNumber % 2) === 0
    let current = History[stepNumber-1];

    const winner = calculateWinner(current.squares);
    //console.log(xIsNext)

    const handleClick = (i) => {
        console.log("test");
        const history = History.slice(0, stepNumber + 1);
        let current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
    
        squares[i] = xIsNext ? "X" : "O"; 
        setHistory(History.concat([{ squares: squares }])
        )
        if (!squares.includes(null)) {
            setDraw(true)
        }else {
            setDraw(false)
        }
    
        }

        const jumpTo = (step) => {
            stepNumber = step
            xIsNext = (step % 2) === 0;
            setHistory(History.slice(0,step+1));
           // current=History[stepNumber];
           console.log('hello')
            }
        
       
       
        
        const moves = History.map((step, move) => {
            const desc = move ?
            'Go to move # ' + move :
            'Go to game start';
            return (
                <li key={move}>
                <button className="btn" onClick={() => jumpTo(move)}>{desc}</button>
                </li>
        );
    });
    
    let status;
    if (winner) {
        status = "Winner: " + winner[0];
    } else if (draw) {
        status = "It's a draw!"
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    
    return (
        <div className="game">
            <div className="game-board">
                {console.log(current)}

                <Board
                    squares={current.squares}
                    onClick={i => handleClick(i)}
                    winline={winner && winner[1] ? winner[1] : null}
                />
            </div>
            
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}




export default Game;