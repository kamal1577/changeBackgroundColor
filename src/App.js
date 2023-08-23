import React, { useState } from "react";
import './App.css';

function App() {

  const [background, setBackground] = useState('#f0f0f0');
  const [text, setText]= useState('Primary Text');

  const changeStyles = ()=>{
    //generate random color
    const randomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    setBackground(randomColor);

    const randomText =`Happy Coding! ${Math.floor(Math.random() * 100)+1}`;
    setText(randomText);

  }
  return (
    <div className="App" style = {{backgroundColor: background}}>
      <header className="App-header">
        
        <h1>{text}</h1>
        <button onClick = {changeStyles}>Change Styles</button>
        
      </header>
    </div>
  );
}

export default App;
