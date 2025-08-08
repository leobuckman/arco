import React from 'react';

function HeroSection() {
  return (
    <section className='hero-section' aria-labelledby='hero-heading'>
      <img src='/hero.png' alt='Collection of fine string instruments' />
      <div className='hero-content'>
        <h1 id='hero-heading'>Finest String Instruments</h1>
        <p>Browse our collection of some of the most sought after string instruments. We have a range of instruments that are suitable for musicians at the professional level.</p>
        <a href='instruments.html' className='cta-button' tabIndex={0}>View Our Collection</a>
      </div>
    </section>
  );
}

export default HeroSection;
