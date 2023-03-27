import React from 'react';
import '../styles/Footer.css';

const footerStyle = {
    background: '386641',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
};

function Footer({ currentPage, handlePageChange }) {
  return (
    <footer style={footerStyle} className="footer">
      <a href="/">Portfolio of Carrie Jensen</a>
    </footer>
  )
};

export default Footer;