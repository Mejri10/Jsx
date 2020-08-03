import React from 'react';
import logo from './logo.svg';
import './App.css';
import image from "./mignon.jpg";

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:"100vw"}}>
            <h1 className="title red">Your name here</h1>
            <br />
            <img src={image} /> <br/>
            <img src="/imageInpublic.jpg"/>
            </div>
            <video width="320" height="240" controls >
            <source src="./react.mp4" type="video/mp4" />
            </video>
            </div>

  );
}

export default App;
