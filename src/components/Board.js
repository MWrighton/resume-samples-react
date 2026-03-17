import React, { Component } from 'react';
import BoardSquare from './BoardSquare';
import './Board.css'

class Board extends Component{
   render(){
      return(
         <div>
            <h1>Game grid goes here.</h1>
            <div className='bingo-board'>
               <div className='bingo-row'>
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
               </div>
               <div className='bingo-row'>
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
               </div>
               <div className='bingo-row'>
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
               </div>
               <div className='bingo-row'>
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
               </div>
               <div className='bingo-row'>
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
                  <BoardSquare />
               </div>
            </div>
         </div>
      );
   }
}
export default Board;
