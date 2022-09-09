import React from 'react';
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import { setIndex, setWinner } from '../store/action'
import Block from './block';
import { combination } from '../utils';


const Board = ({index, setGame, game}: any) => {
  const dispatch = useDispatch()
  const [marks,setMarks] = useState([0,0,0,0,0,0,0,0,0]);
  const [player, setPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [gridWinner, setGridWinner] = useState('');
  const [showWin, setShowWin] = useState(false);

  useEffect(()=>{
    if(showWin){
    alert(`Player ${gridWinner} wins the Game` );
    alert('New game begins in a moment');
    window.location.reload();}
    // eslint-disable-next-line
  },[showWin])

  const checkGrid =(index :any, winner :any) => {
      let grid = [...game];
      grid[index-1] = winner;
      setGame(grid);
  
    for(let c of combination){
      if(grid[c[0]] === 1 && grid[c[1]] === 1 && grid[c[2]] === 1){
        console.log('player 1 wins the grid');
        setGridWinner('1');
        return true;
      } 
      if(grid[c[0]] === 2 && grid[c[1]] === 2 && grid[c[2]] === 2){
        console.log('player 2 wins the grid');
        setGridWinner('2');
        return true;
      }
    }

  }

  useEffect(()=>{
    dispatch(setIndex(index))
    // eslint-disable-next-line
  },[index]);

  useEffect(()=>{
    for(let c of combination){
      if(marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1){
        console.log('player 1 wins');
        dispatch(setWinner({index: index,
        winner : 1}));
        setGameOver(true);
        const data = checkGrid(index,1)
        if(data){
        setShowWin(true);
        }
      } 
      if(marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2){
        console.log('player 2 wins');
        dispatch(setWinner({index: index,
          winner : 2}));
        setGameOver(true);
        const data=checkGrid(index,2)
        if(data){
        setShowWin(true);}
      }
    }
    // eslint-disable-next-line
  }, [marks])
  
  const changeMark = (i : any) => {
    if(!gameOver){
       const m = [...marks];
       if(m[i]===0 ){
       m[i] = player;
       setMarks(m);
       setPlayer(player === 1 ? 2 :1)
       }else{
         alert('click on blank box')
       }}
       else
       alert(`GameOver play another game`)
  }
  return(
  <div className="Board ">
    <div className='mt-5 d-flex'>
      <Block mark={marks[0]} position={0} changeMark={changeMark}></Block>
      <Block mark={marks[1]} position={1} changeMark={changeMark}></Block>
      <Block mark={marks[2]} position={2} changeMark={changeMark}></Block>
    </div>
    <div className='d-flex'>
      <Block mark={marks[3]} position={3} changeMark={changeMark}></Block>
      <Block mark={marks[4]} position={4} changeMark={changeMark}></Block>
      <Block mark={marks[5]} position={5} changeMark={changeMark}></Block>
    </div>
    <div className='d-flex'>
      <Block mark={marks[6]} position={6} changeMark={changeMark}></Block>
      <Block mark={marks[7]} position={7} changeMark={changeMark}></Block>
      <Block mark={marks[8]} position={8} changeMark={changeMark}></Block>
    </div>

  </div>
  )
}


export default Board