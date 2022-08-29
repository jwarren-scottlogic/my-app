import React from "react"
import Square from "./Square"

function Board (props){


    function renderSquare(i) {
      return (
        <Square
          value={props.squares[i]}
          onClick={() => props.onClick(i)}
          classNameProp={props.winline && props.winline.includes(i)?"squares-won":"square"}
        />
      );
    } 
  

    function squareRows(i){
        const ar = [0+i,1+i,2+i]
        return(
        <div className="board-row">
        {ar.map(x => renderSquare(x))}
        </div>
        );
    }

    function squareColumns(){
        const ar = 3*[0,1,2]
        for (let a in ar){
            {squareRows(a)}
        }
    }

        return (
            <div>
                {squareColumns()}
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