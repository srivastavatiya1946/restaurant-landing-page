import React from 'react';
import Footer from './components/Footer';
import About from './components/About';
import Testimonial from './components/testimonial'
import Menu from './components/Menu'
import Order from './components/Order'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App(){
  return(
    <div className="app">
        <Navbar/>
        <div id="Home" >
          <Home/>
        </div>
        <div id="Menu" >
          <Menu/>
        </div>
        <div id="Order" >
          <Order/>
        </div>
        <div id="About" >
          <About/>
        </div> 
        <div id="Testimonial" >
          <Testimonial/>
        </div>
        <div id="Footer">
          <Footer/>
        </div>
        
      
    </div>
  );
}
export default App;