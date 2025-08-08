import React from 'react';

function TestimonialsSection() {
  return (
    <section className='testimonials-section' aria-labelledby='testimonials-heading'>
      <h2 id='testimonials-heading'>Testimonials</h2>
      <div className='testimonials-grid'>
        <blockquote tabIndex={0}>
          <p>"I don't know how else I would have found my violin. The whole process was so seamless the whole way."</p>
          <footer>- John Doe, Violinist</footer>
        </blockquote>
        <blockquote tabIndex={0}>
          <p>"Very grateful I found this company to connect me with my cello. The instrument and service was top-notch."</p>
          <footer>- Jane Smith, Cellist</footer>
        </blockquote>
      </div>
    </section>
  );
}

export default TestimonialsSection;
