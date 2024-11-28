/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseContext from './UseContext';

const ThemeContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.title = `Current Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(`Theme has been changed to ${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`container text-center mt-5 bg-${theme} text-${theme === 'light' ? 'dark' : 'light'}`}>
        <h1 className={`mb-4 text-${theme === 'light' ? 'primary' : 'warning'}`}>
          React Hooks Example: Work App
        </h1>

        <div className="mb-4">
          <p className="h4 text-info">Current Count: {count}</p>
          <button 
            className={`btn btn-${theme === 'light' ? 'success' : 'danger'}`}
            onClick={() => setCount(count + 1)}
            >
            Increment Count
          </button>
          <button 
            className={`btn btn-${theme === 'light' ? 'secondary' : 'light'} ml-3`}
            onClick={() => setCount(count - 1)}
            >
            Decrement Count
          </button>
        </div>

        <div className="mb-4">
          <label className="form-label text-warning">Enter Your Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className={`alert alert-${theme === 'light' ? 'primary' : 'dark'} mt-3`}>
          <p><strong>Current Theme:</strong> {theme === 'light' ? 'Light' : 'Dark'}</p>
        </div>

        <div className="mb-4">
          <button 
            className={`btn btn-${theme === 'light' ? 'dark' : 'light'}`}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
            Toggle Theme
          </button>
        </div>
      <UseContext/>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
