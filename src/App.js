import React, { useEffect } from "react";
import "./style/index.scss";
import Homepage from "./components/homepage";
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function App() {
  return (
    <div className="container">
      <Homepage />
    </div>
  );
}

export default App;
