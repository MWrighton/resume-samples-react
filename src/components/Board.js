import React, { Component } from 'react';
import BoardSquare from './BoardSquare';

class Board extends Component{
   render(){
      return(
         <div>
            <h1>Game grid goes here.</h1>
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
         </div>
      );
   }
}
export default Board;