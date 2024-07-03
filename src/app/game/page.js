import React from 'react'
import GameBoard from '@/components/Gameboard';

const Game = () => {
  return (
    <div className='flex flex-col items-center justify-between min-h-screen overflow-x-clip w-1/2'><GameBoard /></div>
  )
}

export default Game;