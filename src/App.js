import React, { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/resume";


function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Project currentPage={currentPage} handlePageChange={handlePageChange} />
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>,
    <div>
      <About />
      <Contact />
      <Resume />
    </div>
  );
}


export default App;

