import BoardSquare from './BoardSquare.tsx';
import './Board.css'
import Button from '@mui/material/Button';
import { useState } from 'react'; // for file upload


export default function Board() {
   const [file, setFile] = useState<File | null>(null);

  const chooseFile = async () => {
    // Nothing here yet
    console.log("SMACK!");
  };
  
  /*(e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };*/
  
  const uploadFile = async () => {
    // Nothing here yet
    console.log("WHACK!");
  };

  const printFile = async () => {
    // Nothing here yet
    console.log("PRINT!");
  };

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
               <BoardSquare bingoText="HI"/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
            </div>
            <div className='bingo-column'>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText="" isFree/>
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
            <Button variant="contained" onClick={chooseFile}>Choose File</Button>
            <Button variant="contained" onClick={uploadFile}>Upload</Button>
            <Button variant="contained" onClick={printFile}>Print</Button>
         </div>
      </div>
  );
}
