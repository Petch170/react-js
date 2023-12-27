import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [temperature, setTemperature] = useState(40);
  return (
    <div id="app">
      <Header temp={temperature} />
      <Content tempContent={temperature} />
      <Footer temperature={temperature} setTemperature={setTemperature}/>
    </div>
  );
  }

function Header(props) {
  const tempInHeader = props.temp;
  return (
    // Code for Header
    // <Header />
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {tempInHeader}</p>
    </header>
  );
}

function Content(props) {
  const tempInContent = props.tempContent;
  return (
    // Code for Content
    // <Content />
    <div>
      <Temperature tempTemperature={tempInContent} />
    </div>
  );
}

function Temperature(props) {
  const tempInTemperature = props.tempTemperature;
  return (
    // Code for Temperature
    // <Temperature />
    <div id="temperature">
      <span>{tempInTemperature} Oc</span>
    </div>
  );
}

function Footer({setTemperature,temperature}) {
  return (
    // Code for Footer
    // <Footer />
    <footer>
      <button onClick={()=>setTemperature(
        ++temperature //ใช้เป็น temperature+1 ก็ได้
      )}>Up</button>
      <button onClick={()=>setTemperature(
        (prevTemperature)=>prevTemperature-1) // prev คือค่าเก่า
      }>Down</button>
    </footer>
  );
}

export default App;
