import './Board.css'

export default function BoardSquare(bingoText: string, isFree: boolean) {
  return (
    <div className='bingo-box'>
        {isFree ? "FREE SPACE" : bingoText}
    </div>
  );
}
