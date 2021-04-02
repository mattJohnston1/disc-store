import React from 'react';
import './Details.css';

export default function DiscDetails({ disc }) {
  return (
    <div className="detail">
      <div>
        <div>Product Description</div>
        <div>{disc.description}</div>
      </div>
      <div>
        <div>Specifications</div>

        <div className="specs">
          <div className="spec">Speed</div> <div className="spec-num">{disc.speed}</div>
        </div>
        <div className="specs">
          <div className="spec">Glide</div> <div className="spec-num">{disc.glide}</div>
        </div>
        <div className="specs">
          <div className="spec">Turn</div> <div className="spec-num">{disc.turn}</div>
        </div>
        <div className="specs">
          <div className="spec">Fade</div> <div className="spec-num">{disc.fade}</div>
        </div>
      </div>
    </div>
  )
}
