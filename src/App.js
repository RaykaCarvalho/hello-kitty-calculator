import React from 'react';
import Calculator from './Calculator'; 
import logo from './hellokitty2.png'; 

function App() { 
  return (
    <div className="App">
    <Calculator />
    
    <div class name="hello-kitty-container">  
    <img src={logo} className="App-logo" alt="logo" />
      
    </div>
  </div>
  );
}

export default App; // Exportação correta de App (fora do return)