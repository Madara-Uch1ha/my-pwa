// src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [clickCount, setClickCount] = useState(0);

  // Load the click count from localStorage on component mount
  useEffect(() => {
    const storedClickCount = localStorage.getItem('clickCount');
    if (storedClickCount) {
      setClickCount(parseInt(storedClickCount));
    }
  }, []);

  // Update the click count and save to localStorage when the button is clicked
  const handleButtonClick = () => {
    const updatedClickCount = clickCount + 1;
    setClickCount(updatedClickCount);
    localStorage.setItem('clickCount', updatedClickCount.toString());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Click Counter PWA</h1>
        <p>Number of Clicks: {clickCount}</p>
        <button onClick={handleButtonClick}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
