import { useEffect, useState } from 'react';
import './Board.css'
import Button from './Button'
import { calculateWinner } from './Result'
const state = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
function Board() {
     const [logo, setlogo] = useState(state);
     const [turn, setturn] = useState(true);
     const [winner, setwinner] = useState(null);
     const [count, setcount] = useState(0);
     let print = (idx) => {
          const dummy = [...logo];
          if (dummy[idx] === '-' && winner === null) {
               dummy[idx] = turn ? 'X' : 'O';
               setturn(!turn);
               setlogo(dummy)
          }

     }
     useEffect(() => {
          const ans = calculateWinner(logo);
          setwinner(ans);
          setcount((prev) => prev + 1);
          console.log('count= ', count, winner);
     }, [logo])
     return (
          <div className='game'>
               <span><h1 className='heading'>Rahul's Tic-Tac-Toe</h1></span>
               {
                    turn ? <span><h2 className='turn'>play : player {1}</h2></span> :
                         <span><h2 className='turn'>play : player {2}</h2></span>
               }

               <div className='board'>
                    <tr>
                         <td><Button value={logo[0]} onClick={() => print(0)}></Button></td>
                         <td><Button value={logo[1]} onClick={() => print(1)}></Button></td>
                         <td><Button value={logo[2]} onClick={() => print(2)}></Button></td>
                    </tr>
                    <tr>
                         <td><Button value={logo[3]} onClick={() => print(3)}></Button></td>
                         <td><Button value={logo[4]} onClick={() => print(4)}></Button></td>
                         <td><Button value={logo[5]} onClick={() => print(5)}></Button></td>
                    </tr>
                    <tr>
                         <td><Button value={logo[6]} onClick={() => print(6)}></Button></td>
                         <td><Button value={logo[7]} onClick={() => print(7)}></Button></td>
                         <td><Button value={logo[8]} onClick={() => print(8)}></Button></td>
                    </tr>
                    {/* <span ><h2 className='result'>Winner : Player {1} !!!!</h2></span> */}
               </div>
               {
                    winner !== null ? <span>
                         {winner === 'X' ? <span ><h2 className='result'>Winner : Player {1} !!!!</h2></span> :
                              <span ><h2 className='result'>Winner : Player {2} !!!!</h2></span>}
                    </span> :
                         count === 9 ? <span ><h2 className='result'> Its a Draw !!!!</h2></span> :
                              <span></span>
               }


          </div>
     );
}

export default Board;