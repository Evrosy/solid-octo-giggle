import React from 'react';

function Buttons({ handleClick }) {
  return (
    <div id="Przyciski">
      <button onClick={() => handleClick('Zaufanie')}>Zaufanie</button>
      <button onClick={() => handleClick('Walka')}>Walka</button>
      <button onClick={() => handleClick('Wzajemnie')}>Wzajemnie</button>
      <button onClick={() => handleClick('Zmiana')}>Zmiana</button>
      <button onClick={() => handleClick('Zgoda')}>Zgoda</button>
      <button onClick={() => handleClick('Losowo')}>Losowo</button>
    </div>
  );
}

export default Buttons;