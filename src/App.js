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
      {loading ? <header className="app__header">
        <h1 className='app__title'>
          Snakey
        </h1>
      </header> :
        <header>
          Snakey
        </header>
      }
    </div>
  );
}

export default App;
