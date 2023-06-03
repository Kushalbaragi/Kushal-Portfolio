import React, { useEffect } from "react";
import "./style/index.scss";
import Homepage from "./components/homepage";
import {gsap} from 'gsap';

function App() {
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         } else {
//           entry.target.classList.remove("show");
//         }
//       });
//     });

//     let hiddenElement = document.querySelectorAll(".slide");
//     hiddenElement.forEach((el) => observer.observe(el));
// gsap.to(hiddenElement,{
//   opacity:1,
//   stagger:0.2
// })
    
//   });

  return (
    <div className="container">
      <Homepage />
    </div>
  );
}

export default App;
