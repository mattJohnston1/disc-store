import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDiscByIndex, removeByIndex } from '../../store/bag';
import { closeBag } from '../../store/checkoutState';
import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.bag.products)
  const amounts = useSelector((state) => state.bag.amounts)
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (
    <div className="modal-bg">
      <div className="cart">
        <div className="exit">
          <div onClick={() => dispatch(closeBag())} class="exit-modal"><b>X</b>Close</div>
        </div>
        <div className="items">
          {amounts.length == 0 && (
            <div>
              <div className="bag-count">Your Bag (0)</div>
              <div className="no-items">You have no items in your bag.</div>
            </div>
          )}
          {amounts.length >= 1 && (
            <div className="yes-items">
              <div className="bag-count-items">Your Bag ({amounts.reduce(reducer)})</div>
              {products.map((product, idx) => (
                <div className="bag-item">
                  {console.log("amounts", amounts)}
                  <div className="cart-product-remove" onClick={() => dispatch(removeByIndex(idx))}>x</div>
                  <img className="cart-product-img a" src={product.images[0]} />
                  <div className="cart-product-items-details a">
                    <div className="cart-product-name">{product.name}</div>
                    <div className="cart-product-brand">{product.brand_id === 1 ? "Discraft" : product.brand_id === 2 ? "Innova" : "Dynamic Discs"} / {product.type_id === 1 ? "Distance Driver" : product.type_id === 2 ? "Fairway Driver" : product.type_id === 1 ? "Midrange" : "Putter"}</div>
                  </div>
                  <div className="cart-product-counter a">
                    <button className="counter-down counter">-</button>
                    <div className="cart-product-count counter">
                      <div className="div-count">{amounts[idx]}</div>
                    </div>
                    <button className="counter-up counter" onClick={() => { dispatch(addDiscByIndex(idx)) }}>+</button>
                  </div>
                  <div className="cart-product-price a">
                    <div className="cart-product-price">$ {product.price}</div>
                  </div>
                </div>
              ))}
              <Link to="/checkout" style={{ textDecoration: 'none', color: 'black', width: "250px", margin: "100px 0px" }} activeClassName="checkout-btn" className="checkout-btn">Continue to Checkout</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
