import React, { useDebugValue, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDiscByIndex, removeByIndex } from '../../store/bag';
import { closeBag } from '../../store/checkoutState';
import { Link, useHistory } from 'react-router-dom';
import BagProduct from '../BagProduct'
import './Cart.css';

export default function Cart() {
  const dispatch = useDispatch();
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const products = useSelector((state) => state.bag.products)
  const amounts = useSelector((state) => state.bag.amounts)
  const history = useHistory();
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
                <BagProduct product={product} idx={idx} />
              ))}
              <button onClick={() => { history.push('/checkout'); dispatch(closeBag()) }} className="checkout-btn">Continue to Checkout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
