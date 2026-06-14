import BoardSquare from './BoardSquare.tsx';
import './Board.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react'; // for file upload


export default function Board() {
   const [file, setFile] = useState <Blob | null> (null);
   const [boardData, setBoardData] = useState <Array> ([]);
   let fileReader: FileReader;

   const chooseFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // Make sure the target exists
   if (event && event.target && event.target.files) {
      //console.log(event.target.files[0]);
      setFile(event.target.files[0]);
    } else {
      // Display an error if there is no file to upload
      console.log("No file found!");
    }
  };
  
  const generateBoard = (event: ProgressEvent<FileReader>) => {
    const content = fileReader.result;
    // If the file has sufficient content set it to the board
    if (content) {
      const newData = content.toString().split("\n");
      if (newData.length >= 24) { // We technically only need 24 slots since one is a free space
         setBoardData(newData);
      }
    } else {
      // Display an error if there is no file to upload
      console.log("Error - empty file");
    }
  };

  const printFile = async () => {
    // Nothing here yet
    console.log("PRINT!");
  };

  // Extract the contents from the file
  const readFile = () => {
    fileReader = new FileReader();
    fileReader.onloadend = generateBoard;
    if (file !== null){
      fileReader.readAsText(file);
    }
  };

  return (
      <div>
         <h1>BINGO</h1>
         <div className='bingo-board'>
            <div className='bingo-column'>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[0] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[1] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[2] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[3] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[4] : ""}/>
            </div>
            <div className='bingo-column'>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[5] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[6] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[7] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[8] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[9] : ""}/>
            </div>
            <div className='bingo-column'>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[10] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[11] : ""}/>
               <BoardSquare bingoText="" isFree/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[12] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[13] : ""}/>
            </div>
            <div className='bingo-column'>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[14] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[15] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[16] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[17] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[18] : ""}/>
            </div>
            <div className='bingo-column'>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[19] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[20] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[21] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[22] : ""}/>
               <BoardSquare bingoText={boardData.length > 0 ? boardData[23] : ""}/>
            </div>
         </div>
         <div>
            <Button component="label" variant="contained">
               Choose File
               <TextField
                  type="file"
                  onChange={chooseFile}
                  className='hide-input' // Hide the actual input field so it matches the other buttons
               />
            </Button>
            <Button
               variant="contained"
               onClick={readFile}
               disabled={!file} // If there is no file selected the user should not be able to generate a board
            >
               Generate Board
            </Button>
            <Button variant="contained" onClick={printFile}>Print</Button>
         </div>
      </div>
  );
}
