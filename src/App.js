import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav'
import Body from './Components/Body'
import About from './Components/About';
import Product from './Components/Product';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
       
       <Nav/>
       
      
       <Body/>
       <About/>
       
       <Product/>
       <Contact/>
       
    </div>
  );
}

export default App;
