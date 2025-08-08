import React from 'react';

function FontControls({ show, fontSize, fontFamily, onIncreaseFontSize, onDecreaseFontSize, onChangeFontFamily }) {
  return (
    <div className={`font-controls ${show ? 'show' : ''}`} role='region' aria-label='Font accessibility controls'>
      <h3>Font Controls</h3>
      <div className='font-control-group'>
        <label htmlFor='font-size'>Size:</label>
        <div>
          <button onClick={onDecreaseFontSize} aria-label='Decrease font size'>A-</button>
          <button onClick={onIncreaseFontSize} aria-label='Increase font size'>A+</button>
        </div>
      </div>
      <div className='font-control-group'>
        <label htmlFor='font-family'>Font Family:</label>
        <select id='font-family' value={fontFamily} onChange={(e) => onChangeFontFamily(e.target.value)} aria-label='Select font family'>
          <option value='Arial, Helvetica, sans-serif'>Sans-serif</option>
          <option value='Georgia, serif'>Serif</option>
          <option value='Courier New, monospace'>Monospace</option>
        </select>
      </div>
    </div>
  );
}

export default FontControls;
