import Homepage from './pages/Homepage';
import Navbar from './pages/Navbar';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './pages/footer';


function App() {
  return (
    <div Style= " width :100%; overflow:hidden;">
      <Navbar/>
      <Homepage />
      <Footer/>

    </div>
    
  );
}

export default App;
