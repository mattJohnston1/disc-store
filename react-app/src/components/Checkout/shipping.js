import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import './Checkout.css';
import './Shipping.css';
import { states } from './states'
export default function Shipping() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.bag.products)
  const amounts = useSelector((state) => state.bag.amounts)

  const countries = useMemo(() => countryList().getData(), [])
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  console.log(states)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(country.value, state.value)
  }


  return (
    <div className="checkout">
      <div className="checkout-form">

        <div className="checkout-nav">Cart  ›  <b>Information</b>  ›  Shipping  ›  Payment</div>

        <div className="checkout-form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="checkout-form-header">CONTACT INFORMATION</div>
            <input type="text" className="form-email checkout-field" placeholder="Email" />
            <div className="checkout-form-header">SHIPPING METHOD</div>
            <div className="checkout-form-location">


              <div className="form-shipping-free">
                <div className="ship">
                  <div className="round check">
                    <input type="checkbox" id="checkbox" />
                    <label for="checkbox"></label>
                  </div>
                  <div className="shipping-type">Free Shipping</div>
                </div>
                <div className="shipping-price">Free</div>
              </div>


              <div className="form-shipping-ups">
                <div className="ship">
                  <div className="round check">
                    <input type="checkbox" id="checkbox" />
                    <label for="checkbox"></label>
                  </div>
                  <div className="shipping-type">UPS 2-day Shipping</div>
                </div>
                <div className="shipping-price">$6.78</div>
              </div>
            </div>
            <button className="checkout-continue-btn" type="submit">CONTINUE TO SHIPPING</button>
          </form>
        </div>

      </div>


      <div className="checkout-info">
        <div className="ps">
          {products.map((product, idx) => (
            (idx <= 3 && <div className="checkout-item">
              <div className="checkout-product-img-div">
                <img className="checkout-product-img" src={product.images[0]} />
                <div className="checkout-item-count">
                  <div className="c-item-count">
                    {amounts[idx]}
                  </div>
                </div>
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
        </div>

        <div className="Subtotal sub">
          <div className="sub-header">Subtotal</div>
          <div className="checkout-product-price">$300.00 USD</div>
        </div>
        <div className="Shipping sub">
          <div className="sub-header">Shipping</div>
          <div className="checkout-shipping-price">Calculated at next step</div>
        </div>

        <div className="totals-break"></div>

        <div className="Total">
          <div className="sub-header">Total</div>
          <div className="checkout-total-price">$1009.35 USD</div>
        </div>
        {/* {products.length > 3 && (<div className="extra-items">{products.length - 4} more item(s)</div>)} */}

      </div>
    </div >
  )
}
