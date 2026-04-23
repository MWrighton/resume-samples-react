import './Board.css'

export default function BoardSquare(props: {bingoText: string, isFree?: boolean}) {
  return (
    <div className='bingo-box'>
        {props.isFree ? "FREE SPACE" : props.bingoText}
    </div>
  );
}
