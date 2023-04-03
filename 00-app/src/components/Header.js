import React from 'react';
import '../styles/Header.css';
// import Navigation from "./components/Navigation";
// import Nav from "./components/Nav";



const styles = {
  headerStyle: {
    background: 'f2e8cf',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Carrie Jensen</h1>
    </header>
  );
};

export default Header;
