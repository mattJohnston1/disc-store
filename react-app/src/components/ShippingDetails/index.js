import React from 'react';
import './ShippingDetails.css'

export default function ShippingDetails() {
  return (
    <div className="boxes">
      <div className="box">
        <img src="https://i.imgur.com/b1LdkfA.png" />
        <div className="shipping-header">
          Free Shipping
        </div>
        <div>
          on all orders over $75 worldwide
        </div>
      </div>
      <div className="box">
        <img src="https://i.imgur.com/UfrW3WG.png" />
        <div className="shipping-header">
          Easy Returns
        </div>
        <div>
          within 14 days (sale items excluded)
        </div>
      </div>
      <div className="box">
        <img src="https://i.imgur.com/hmc4Wtr.png" />
        <div className="shipping-header">
          One Year Warranty
        </div>
        <div>
          on all discs
        </div>
      </div>
    </div>
  )
}
