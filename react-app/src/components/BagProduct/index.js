import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDiscByIndex, removeByIndex, reduceDiscByIndex } from '../../store/products';

import '../Cart/Cart.css';


export default function BagProduct({ product, idx }) {
  const dispatch = useDispatch();
  // const amounts = useSelector((state) => state.bag.amounts)
  const amount = useSelector((state) => state.products.amounts[idx])
  const handleDownClick = () => {
    if (amount === 1) {
      dispatch(removeByIndex(idx))
    } else {
      dispatch(reduceDiscByIndex(idx))
    }
  }
  return (
    <div className="bag-item">
      <div className="cart-product-remove" onClick={() => dispatch(removeByIndex(idx))}>x</div>
      <img className="cart-product-img a" src={product.images[0]} />
      <div className="cart-product-items-details a">
        <div className="cart-product-name">{product.name}</div>
        <div className="cart-product-brand">{product.brand_id === 1 ? "Discraft" : product.brand_id === 2 ? "Innova" : "Dynamic Discs"} / {product.type_id === 1 ? "Distance Driver" : product.type_id === 2 ? "Fairway Driver" : product.type_id === 1 ? "Midrange" : "Putter"}</div>
      </div>
      <div className="cart-product-counter a">
        <button className="counter-down counter" onClick={handleDownClick}>-</button>
        <div className="cart-product-count counter">
          <div className="div-count">{amount}</div>
        </div>
        <button className="counter-up counter" onClick={() => { dispatch(addDiscByIndex(idx)) }}>+</button>
      </div>
      <div className="cart-product-price a">
        <div className="cart-product-price">$ {product.price}</div>
      </div>
    </div>
  )
}
