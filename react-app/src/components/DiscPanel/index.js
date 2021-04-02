import React, { useEffect, useState } from 'react';
import './DiscPanel.css';

export default function DiscPanel({ disc, idx, amount }) {
  return (
    <div className="disc-panel">
      <div className="product-image-div">
        <img className="product-image" src={disc.images[0]}></img>
      </div>
      <h2 className="product-title">
        {disc.name}
      </h2>
      <div className="product-specs">
        Speed: {disc.speed} / Glide: {disc.glide} / Turn: {disc.turn} / Fade: {disc.fade}
      </div>
      <div className="product-price">
        USD ${disc.price}
      </div>
    </div>
  )
}
