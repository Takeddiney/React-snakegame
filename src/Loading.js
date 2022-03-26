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
          {loading ?
            <h1 className='app__title'>
              SNAKEY
            </h1>
            :
            <div>
            <Link className="start__button" to="/game">
              Jouer seul
            </Link>
            <a href="https://google.com" className="start__button">
             Multijoueur
            </a>
            </div>
          }
      </div>
    );
}

export default Loading