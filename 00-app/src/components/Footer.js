import React from 'react';
import '../styles/Footer.css';

const footerStyle = {
    background: '386641',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  };

const footerContainer = {
  alignItems: 'bottom',
}

function Footer() {
  return (
    <div style={footerContainer}>
    <footer style={footerStyle} className="footer">
      <a href="https://github.com/CarrieLJ">GitHub</a>
      <a href="https://www.linkedin.com/in/carrie-jensen-b184a991/">LinkedIn</a>
    </footer>
    </div>
  )
};

export default Footer;

