import BoardSquare from './BoardSquare';
import './Board.css'

export default function Board() {
  return (
      <div>
         <h1>BINGO</h1>
         <div className='bingo-board'>
            <div className='bingo-column'>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
            </div>
            <div className='bingo-column'>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
            </div>
            <div className='bingo-column'>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare className='free-space' bingoText="FREE SPACE"/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
            </div>
            <div className='bingo-column'>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
            </div>
            <div className='bingo-column'>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
            </div>
         </div>
      </div>
  );
}
