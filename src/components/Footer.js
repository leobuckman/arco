import React from 'react';

function Footer() {
  return (
    <footer role='contentinfo'>
      <p>Contact Us: <a href='mailto:strings@gmail.com' tabIndex={0}>strings@gmail.com</a></p>
      <p>Social Media: <a href='https://instagram.com' target='_blank' rel='noreferrer' tabIndex={0}>Instagram</a></p>
      <a href='#' tabIndex={0}>ToS</a>
    </footer>
  );
}

export default Footer;
