import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeBag } from '../../store/checkoutState';
import './Cart.css';

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.bag.products)
  const amounts = useSelector((state) => state.bag.amounts)
  const [amount, setAmount] = useState(1);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (
    <div className="modal-bg">
      <div className="cart">
        <div className="exit">
          <i onClick={() => { dispatch(closeBag()) }} class="far fa-times-circle"></i>
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
              {products.map((product) => (
                <div className="bag-item">
                  <div className="cart-product-remove">x</div>
                  <img className="cart-product-img a" src={product.images[0]} />
                  <div className="cart-product-items-details a">
                    <div className="cart-product-name">{product.name}</div>
                    <div className="cart-product-brand">Innova / Distance Driver</div>
                  </div>
                  <div className="cart-product-counter a">
                    <button className="counter-down counter">-</button>
                    <div className="cart-product-count counter">
                      <div className="div-count">1</div>
                    </div>
                    <button className="counter-up counter">+</button>
                  </div>
                  <div className="cart-product-price a">
                    <div className="cart-product-price">$ {product.price}</div>
                  </div>
                </div>
              ))}
              <button className="checkout-btn">Continue to Checkout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
