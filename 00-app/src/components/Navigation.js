import React from 'react';
import '../styles/Navigation.css';

const navBarStyles = {
    background: '386641',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
};

const liStyle = {
  listStyleType: 'none'  
}

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav style={navBarStyles} className="navbar">
      <a href="/">Portfolio of Carrie Jensen</a>
        <ul className="nav nav-tabs" style={navBarStyles}>
        <li style={liStyle} className="nav-item" >
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li style={liStyle} className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li style={liStyle} className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
          <li style={liStyle} className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
          </li>
      </ul>
    </nav>  
  );
}

export default Navigation;
