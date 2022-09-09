

import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Board from './component/board';

const App = () => {
  const [game,setGame] = useState([0,0,0,0,0,0,0,0,0]);
  let gridSize = 3;
  let boardIndex = 0;

  return (
    <div >
     {new Array(gridSize).fill(null).map((item, index) => {
               return  (
                <div className='App d-flex-app' key={index}>
                  {new Array(gridSize).fill(null).map((item, index) => {
                    boardIndex++
                    return(
                      <Board game={game} setGame={setGame} index={boardIndex} key={boardIndex}></Board>
                      )
                      ;
                      })}
                </div>
               )
          })}
    </div>
  );
}


export default App;
