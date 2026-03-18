import './Board.css'

export default function BoardSquare({bingoText}) {
  return (
    <div className='bingo-box'>
        {bingoText}
    </div>
  );
}
