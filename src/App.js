import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [count, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
				div
				<div
					onClick={() => setCounter(prevCount => prevCount + 1)}
					data-testid="addCount"
				>
					+
				</div>
        <div data-testid="count">
          {count}
        </div>
				<div
					onClick={() => setCounter(prevCount => prevCount - 1)}
					data-testid="minusCount"
				>
					-
				</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
