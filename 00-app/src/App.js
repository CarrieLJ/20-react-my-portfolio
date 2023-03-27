import React, { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header />
      <Project />
      <Footer />
    </div>
  );
}


export default App;

