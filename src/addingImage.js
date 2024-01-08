import React from "react";
import "./day1.css";
import img1 from "./images/coffee_01.jpeg";
import img2 from "./images/coffee_02.jpeg";
import img3 from "./images/coffee_03.jpeg";
import svg from "./images/9612660.png";
export default function AddImage() {
  return (
    <div className="main">
      <div className="header">
        <h1>cafeteria</h1>
      </div>
      <div className="main">
        <div className="Day01div1 ">
          <img src={img1} alt="coffe01" />
          <p>Espresso</p>

          <button>Buy now</button>
        </div>
        <div className="Day01div2 ">
          <img src={img2} alt="coffe02" />
          <p>Latte</p>
          <button>Buy now</button>
        </div>
        <div className="Day01div2">
          <img src={img3} alt="coffe03" />
          <p>Cappuccino</p>
          <button>Buy now</button>
        </div>
      </div>
    </div>
  );
}
