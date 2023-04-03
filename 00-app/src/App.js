import React, { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
// import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
// import Resume from "./components/pages/resume";


function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Header>         
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </Header>
      <main>
            <Project currentPage={currentPage} handlePageChange={handlePageChange} />
      </main>
      <Footer />
    </div>
    // <div>
    //   <About />
    //   <Contact />
    //   <Resume />
    // </div>
  );
}


export default App;

