import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDiscByIndex, removeByIndex } from '../../store/bag';
import './Checkout.css';
export default function Checkout() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.bag.products)
  const amounts = useSelector((state) => state.bag.amounts)
  return (
    <div>
      <div className="checkout-form">
        <div className="checkout-nav"></div>
        <div className="checkout-login"></div>

      </div>
      <div className="checkout-info">
        {products.map((product, idx) => (
          (idx <= 3 && <div className="checkout-item">
            {console.log("amounts", amounts)}
            <div className="checkout-product-img-div">
              <img className="checkout-product-img" src={product.images[0]} />
              <div className="checkout-item-count">{amounts[idx]}</div>
            </div>
            <div className="checkout-product-items-details a">
              <div className="checkout-product-name">{product.name}</div>
              <div className="checkout-product-brand">{product.brand_id === 1 ? "Discraft" : product.brand_id === 2 ? "Innova" : "Dynamic Discs"} / {product.type_id === 1 ? "Distance Driver" : product.type_id === 2 ? "Fairway Driver" : product.type_id === 1 ? "Midrange" : "Putter"}</div>
            </div>
            <div className="checkout-product-price a">
              <div className="checkout-product-price">$ {(product.price * amounts[idx]).toFixed(2)} USD</div>
            </div>
          </div>)
        ))}
        {products.length > 3 && (<div className="extra-items">{products.length - 4} more item(s)</div>)}
      </div>
    </div>
  )
}
