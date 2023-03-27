import React from 'react';
import '../styles/Footer.css';

const styles = {
  footerStyle: {
    background: 'f2e8cf',
  },
  footerStyle: {
    fontSize: '100px',
  },
};

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <h1 style={styles.footerStyle}>Carrie Jensen</h1>
    </footer>
  );
}

export default Footer;