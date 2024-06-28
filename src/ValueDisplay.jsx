import React, { useRef, useEffect } from 'react';
import './ValueDisplay.css';

function ValueDisplay({ currentValue }) {
  const prevValueRef = useRef();

  useEffect(() => {
    prevValueRef.current = currentValue;
  }, [currentValue]);

  const prevValue = prevValueRef.current;

  return (
    <div className="value-display">
      <p>Current Value: {currentValue}</p>
      <p>Previous Value: {prevValue}</p>
    </div>
  );
}

export default ValueDisplay;
