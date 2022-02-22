import React from 'react'
import './Game.css'

function Game() {
  return (
    <div className="game">
        <header className="app__header">
          <div className="game__container">
            <div className="snake__dot"></div>
            <div className="snake__dot sec"></div>
            <div className="snake__dot th"></div>
          </div>
        </header>
      </div>
  )
}

export default Game