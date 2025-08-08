import React from 'react';

function Header({ onToggleFontControls }) {
  return (
    <header>
      <nav role='navigation' aria-label='Main navigation' id='navigation'>
        <a href='index.html' tabIndex={0}>Home</a>
        <a href='instruments.html' tabIndex={0}>Instruments</a>
        <a href='faq.html' tabIndex={0}>FAQ</a>
        <a href='about.html' tabIndex={0}>About</a>
      </nav>
      <button className='font-toggle' onClick={onToggleFontControls} aria-label='Toggle font controls' aria-expanded='false'>Aa</button>
    </header>
  );
}

export default Header;
