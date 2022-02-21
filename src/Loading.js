import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Loading() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }, [])
    return (
      <div className="app">
        <header className="app__header">
          {loading ?
            <h1 className='app__title'>
              SNAKEY
            </h1>
            :
            <Link className="start__button" to="/game">
              START GAME
            </Link>
          }
        </header>
      </div>
    );
}

export default Loading