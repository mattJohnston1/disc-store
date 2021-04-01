import React, { useState } from 'react';
import './Colors.css';

export default function AvailableColors() {
  const colors = ["Pink", "Powder-blue", "Sage-green", "Lilac", "White", "Buttermilk-Yellow", "Navy", "Black"]
  const [activeColor, setActiveColor] = useState(colors[0])
  const [prevColor, setPrevColor] = useState(null);

  const handleClick = (e) => {
    if (prevColor !== null) {
      prevColor.className = prevColor.className.split(" ")[0]
    }
    setActiveColor(colors[e.target.id])
    setPrevColor(e.target);
    e.target.className += " active";
  }
  return (
    <div>
      <b>Color</b> {activeColor}
      <div className="colors">
        <div className="Pink" id={0} onClick={handleClick}></div>
        <div className="Powder-blue" id={1} onClick={handleClick}></div>
        <div className="Sage-green" id={2} onClick={handleClick}></div>
        <div className="Lilac" id={3} onClick={handleClick}></div>
        <div className="White" id={4} onClick={handleClick}></div>
        <div className="Buttermilk-yellow" id={5} onClick={handleClick}></div>
        <div className="Navy" id={6} onClick={handleClick}></div>
        <div className="Black" id={7} onClick={handleClick}></div>
      </div>
    </div>
  )
}
