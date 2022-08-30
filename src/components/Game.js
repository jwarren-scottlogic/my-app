import React, {useState} from "react"
import Board from "./Board"
import calculateWinner from "./CalculateWinner"


function Game() {


    // const [state, setState] = useState({
    //     history: [{ squares: Array(9).fill(null) }],
    //     stepNumber: 0,
    //     xIsNext: true,
    //     draw: false
    //     //winLine: []
    // });

    const [History, setHistory] = useState([{ squares: Array(9).fill(null) }])
    const [draw, setDraw] = useState(false)
    
    let stepNumber = History.length
    let xIsNext = (stepNumber % 2) === 0
    //console.log(xIsNext)

    const handleClick = (i) => {
        const history = History.slice(0, stepNumber + 1);
        let current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
    
        squares[i] = xIsNext ? "X" : "O";
        //   setState ({
            //     history: history.concat([{squares: squares}]),
            //     stepNumber: history.length,
            //     xIsNext: !state.xIsNext
            //   });
            

            ////////////////////////////////////////////////////////////below is not working, the history is not changing
            
            
            setHistory(History.concat([{ squares: squares }])
            )


            //setState({...state, stepNumber :history.length})
            //setState({...state, xIsNext: !state.xIsNext})
            if (!squares.includes(null)) {
                setDraw(true)
            };
        
    }
        const jumpTo = (step) => {
            // setState({
            stepNumber = step
            xIsNext = (step % 2) === 0
                // });
            }
        
            // render() {
                //const history = History;
                if (History){    
                const current = History[stepNumber];
                console.log(History)
                const winner = calculateWinner(current.squares);
                }
                //console.log(current.squares)
                
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