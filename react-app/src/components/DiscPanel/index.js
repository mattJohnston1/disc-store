import React, { useEffect, useState } from 'react';
import './DiscPanel.css';

export default function DiscPanel({ disc }) {
  return (
    <div className="disc-panel">
      <div className="product-image">
        <img src={disc.images[0]}></img>
      </div>
      <div className="product-title">
        {disc.name}
      </div>
      <div className="product-specs">
        Speed: {disc.speed} | Glide: {disc.glide} | Turn: {disc.turn} | Fade: {disc.fade}
      </div>
    </div>
  )
}
