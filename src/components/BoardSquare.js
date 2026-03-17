import React, { Component } from 'react';
import './Board.css'

class BoardSquare extends Component{
   render(){
      return(
         <div className='bingo-box'>
            This is a box in the bingo board.
         </div>
      );
   }
}
export default BoardSquare;
