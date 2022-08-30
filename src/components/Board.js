import React, { useEffect, useState } from "react"
import Square from "./Square"

function Board(props) {
    //console.log({props})
    const [squares, setSquares] = useState([]);
    useEffect(() => {
        setSquares(props.squares)
        //console.log(squares)
    }, [props])

    const renderSquare = (i) => {
        return (
            <Square
                value={squares[i]}
                onClick={() => props.onClick(i)}
                classNameProp={props.winline && props.winline.includes(i) ? "squares-won" : "square"}
                key={i}
            />
        );
    }

    const squareRows = (i) => {
        const ar = [0 + i, 1 + i, 2 + i]
        return (
            <div className="board-row">
                {ar.map(x => renderSquare(x))}
            </div>
        );
    }

    // const squareColumns = () => {
    //     const arS = [0, 1, 2]
    //     console.log(arS)
    //     for (let a in arS) {
    //         squareRows(a)
    //     }
    // }

    return (
        <div>
            {/* { renderSquare(0)} */}
            {squareRows(0)}
            {squareRows(3)}
            {squareRows(6)}
        </div>
    )

}

export default Board;


// <div>
// <div className="board-row">
// {this.renderSquare(0)}
// {this.renderSquare(1)}
// {this.renderSquare(2)}
// </div>
// <div className="board-row">
// {this.renderSquare(3)}
// {this.renderSquare(4)}
// {this.renderSquare(5)}
// </div>
// <div className="board-row">
// {this.renderSquare(6)}
// {this.renderSquare(7)}
// {this.renderSquare(8)}
// </div>
// </div>
// }