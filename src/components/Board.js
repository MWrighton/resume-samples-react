import BoardSquare from './BoardSquare';
import './Board.css'
import Button from '@mui/material/Button';

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
               <BoardSquare className='free-space' bingoText="FREE SPACE" isFree/>
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
         <div>
            <Button variant="contained">Upload</Button>
            <Button variant="contained">Print</Button>
         </div>
      </div>
  );
}
