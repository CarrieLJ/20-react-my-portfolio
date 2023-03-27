import React from 'react';
import '../styles/Footer.css';

const footerStyle = {
    background: '386641',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
};

function Footer() {
  return (
    <footer style={footerStyle} className="footer">
      <a href="https://github.com/CarrieLJ">GitHub</a>
      <a href="https://www.linkedin.com/in/carrie-jensen-b184a991/">LinkedIn</a>
    </footer>
  )
};

export default Footer;

