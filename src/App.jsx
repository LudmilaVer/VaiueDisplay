import React, { useState } from 'react';
import ValueDisplay from './ValueDisplay';
import './App.css';

function App() {
  const [currentValue, setCurrentValue] = useState('');

  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  };

  return (
    <div className="app-container">
      <h1>Current and Previous Value</h1>
      <input 
        type="text" 
        value={currentValue} 
        onChange={handleChange} 
        placeholder="Enter some text"
      />
      <ValueDisplay currentValue={currentValue} />
    </div>
  );
}

export default App;
