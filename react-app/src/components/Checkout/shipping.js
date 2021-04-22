import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import './Checkout.css';
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


  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      maxWidth: "220px",
      height: "45px",
      border: "1px solid rgb(172, 172, 172)",
      borderRadius: "0",
      minWidth: "300px",
      gridRowStart: "4",
      gridColumn: "2 / span3",
      margin: "7px"
      // width: state.selectProps.width,
      // color: state.selectProps.menuColor,
      // padding: 20,
    }),
    menu: (provided, state) => ({
      ...provided,
      maxWidth: "210px"
    }),
    menuList: (provided, state) => ({
      ...provided,
      maxHeight: "200px"
    }),
    // control: (_, { selectProps: { width } }) => ({
    //   width: '500px',
    // }),
    option: (provided, state) => ({
      ...provided,
      padding: 5,
    }),
  }

  return (
    <div className="checkout">
      <div className="checkout-form">
        <div className="checkout-nav">Cart  ›  <b>Information</b>  ›  Shipping  ›  Payment</div>
        <div className="checkout-login">
          <div className="checkout-buttons">
            <div className="express-checkout">
              <div className="express-btn checkout-form-header">EXPRESS CHECKOUT</div>

              <div className="buttons">
                <img src="https://i.imgur.com/9T9dE75.png" />
                <img src="https://i.imgur.com/dOEWWjj.png" />
                <img src="https://i.imgur.com/SLKggHs.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="checkout-form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="breaker">━━━━━━━━━━━━━━━━ OR ━━━━━━━━━━━━━━━━</div>
            <button className="checkout-login-btn checkout-continue-btn">LOGIN</button>
            <div className="checkout-form-header">CONTACT INFORMATION</div>
            <input type="text" className="form-email checkout-field" placeholder="Email" />
            <div className="checkout-form-header">SHIPPING ADDRESS</div>
            {/* <div className="checkout-form-name"> */}
            <input className="form-fname checkout-field" type="text" placeholder="First Name" />
            <input className="form-lname checkout-field" type="text" placeholder="Last Name" />
            {/* </div> */}
            <input className="form-address checkout-field" type="text" placeholder="Address" />
            <input className="form-city checkout-field" type="text" placeholder="City" />
            <div className="checkout-form-location">
              <Select className="form-region"
                value={country}
                options={countries}
                onChange={(value) => { setCountry(value) }}
                styles={customStyles}
                placeholder="Country/Region"
              />
              <Select className="form-state"
                value={state}
                options={states}
                onChange={(value) => { setState(value) }}
                styles={customStyles}
                placeholder="State"
              />
            </div>
            <input className="form-zip-code checkout-field" type="text" placeholder="ZIP code" />
            <input className="form-phone-number checkout-field" type="text" placeholder="Phone Number" />
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
