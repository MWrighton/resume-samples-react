import BoardSquare from './BoardSquare.tsx';
import './Board.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react'; // for file upload


export default function Board() {
   const [file, setFile] = useState <Blob | null> (null);
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
    console.log("WHACK!");
    const content = fileReader.result;
    console.log(content)
  };

  const printFile = async () => {
    // Nothing here yet
    console.log("PRINT!");
  };

  // Extract the contents from the file
  const readFile = () => {
    console.log("FILE!");
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
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText=""/>
            </div>
            <div className='bingo-column'>
               <BoardSquare bingoText=""/>
               <BoardSquare bingoText="HI"/>
               <BoardSquare bingoText="PUTTING IN LOTS AND LOTS OF TEXT SO THE OVERFLOW CSS CAN BE TESTED!"/>
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
