import React from 'react';

import Navbar from"./components/Navbar";
import HomePage from "./components/HomePage";
import Bottombar from "./components/Bottombar";


 function App() {
  return (
    <>
      <div >
        
      <Navbar/>
      <HomePage/>
      </div>
    
     <Bottombar/>
     </>
  );
}export default App;
