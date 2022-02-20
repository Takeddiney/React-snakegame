import { useEffect, useState } from 'react';
import './App.css';

function App() {
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
          <button>
            START GAME
          </button>
        }
      </header>
    </div>
  );
}

export default App;
