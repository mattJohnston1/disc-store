import React, { useState } from 'react';
import './Details.css';

export default function DiscDetails({ disc }) {
  const [descriptionOpen, setDescriptionOpen] = useState(true);
  const [specificationsOpen, setSpecificationsOpen] = useState(true);
  const [measurementsOpen, setMeasurementsOpen] = useState(false);
  function getButton() {
    const descriptionPlus = document.querySelectorAll("plus")
    descriptionPlus.innerHTML = "-"
  }
  const handleClickDescription = () => {
    setDescriptionOpen(!descriptionOpen)
    getButton()
  }
  const handleClickSpecification = () => {
    setSpecificationsOpen(!specificationsOpen)
  }
  const handleClickMeasurements = () => {
    setMeasurementsOpen(!measurementsOpen)
  }
  return (
    <div className="detail">
      <div className="tab">
        <div className="product-description-tab" onClick={handleClickDescription}><div>Product Description</div>{!descriptionOpen && <div className="plus" id="description-plus">+</div>}{descriptionOpen && <div className="plus" id="description-plus">-</div>}</div>
        {descriptionOpen &&
          <div className="spec-description spec-anim">{disc.description}</div>
        }
      </div>
      <div>
        <div className="product-description-tab" onClick={handleClickSpecification}><div>Specifications</div>{!specificationsOpen && <div className="plus">+</div>}{specificationsOpen && <div className="plus">-</div>}</div>
        {specificationsOpen &&
          <div className="spec-anim">
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
        }
      </div>
      <div>
        <div className="product-description-tab" onClick={handleClickMeasurements}><div>Measurements</div>{!measurementsOpen && <div className="plus">+</div>}{measurementsOpen && <div className="plus">-</div>}</div>
        {measurementsOpen &&
          <div className="spec-anim">
            <div className="specs">
              <div className="spec">Rim-Depth</div> <div className="spec-num">{disc.rim_depth}c.m.</div>
            </div>
            <div className="specs">
              <div className="spec">Rim-Width</div> <div className="spec-num">{disc.rim_width}</div>
            </div>
            <div className="specs">
              <div className="spec">Diameter</div> <div className="spec-num">{disc.diameter}</div>
            </div>
            <div className="specs">
              <div className="spec">Max Weight</div> <div className="spec-num">{disc.max_weight}</div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
