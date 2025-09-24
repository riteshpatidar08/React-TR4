import React from 'react';
import { useState } from 'react';
function App() {
  const [color, setColors] = useState(['Red', 'Orange']);

  const [bgColor, setBgColor] = useState('');
  const handleClick = (color) => {
    setBgColor(color);
  };
  return (
    <div>
      {color.map((color) => (
        <button
          style={{ backgroundColor: bgColor }}
          onClick={() => handleClick(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
