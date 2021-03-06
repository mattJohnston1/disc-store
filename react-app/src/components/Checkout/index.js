import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { saveInfo } from '../../store/checkoutInfo';
import { setCurrentUser, setUser } from '../../store/currentUser';
import { authenticate, logout } from "../../services/auth";
import './Checkout.css';
import { states } from './states'
import { savePage } from '../../store/redirect';

export default function Checkout({ setAuthenticated, authenticated }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const products = useSelector((state) => state.products.products)
  const amounts = useSelector((state) => state.products.amounts)
  const countries = useMemo(() => countryList().getData(), [])
  const total = useSelector((state) => state.products.total);
  const checkoutInfo = useSelector((state) => state.checkoutInfo)

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zipCode, setZipCode] = useState('');

  const [errors, setErrors] = useState([""])

  const user = useSelector((state) => state.currentUser.user)

  const logoutUser = async () => {
    await logout();
    dispatch(setUser(null))
    setAuthenticated(false)
  }

  useEffect(() => {
    dispatch(setCurrentUser())
  }, [dispatch])

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName)
      setLastName(user.lastName)
      setEmail(user.email)
    } else {
      setFirstName("")
      setEmail("")
      setLastName("")
    }
  }, [user])

  useEffect(() => {
    if (checkoutInfo) {
      setCountry(checkoutInfo.country)
      setState(checkoutInfo.state)
      setFirstName(checkoutInfo.firstName)
      setLastName(checkoutInfo.lastName)
      setAddress(checkoutInfo.address)
      setEmail(checkoutInfo.email)
      setCity(checkoutInfo.city)
      setPhoneNumber(checkoutInfo.phoneNumber)
      setZipCode(checkoutInfo.zipCode)
    }
    if (user) {
      setFirstName(user.firstName)
      setLastName(user.lastName)
      setEmail(user.email)
    }
  }, [checkoutInfo])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const checkoutInfo = {
      country,
      state,
      firstName,
      lastName,
      address,
      email,
      city,
      phoneNumber,
      zipCode,
    }
    dispatch(saveInfo(checkoutInfo))
    setCountry('')
    setState('')
    setFirstName('')
    setLastName('')
    setAddress('')
    setEmail('')
    setCity('')
    setPhoneNumber('')
    setZipCode('');
    history.push('/shipping')
  }


  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      maxWidth: "220px",
      height: "45px",
      border: "1px solid rgb(172, 172, 172)",
      borderRadius: "0",
      minWidth: "321px",
      gridRowStart: "4",
      gridColumn: "2 / span3",
      margin: "7px",
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
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(savePage("/checkout"))
    history.push('/login')
  }

  return (
    <div className="checkout">

      <div className="checkout-form">
        <div className="checkout-nav">Cart  ???  <b>Information</b>  ???  Shipping  ???  Payment</div>
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
            <div className="breaker">???????????????????????????????????????????????? OR ????????????????????????????????????????????????</div>

            {!user && (<button type="button" onClick={handleLogin} className="checkout-login-btn checkout-continue-btn">LOGIN</button>)}
            {user && (<div className="checkout-logged-in-div">
              <div className="checkout-form-header">USER INFORMATION</div>
              <div className="checkout-form-user">
                <div>{user.firstName} {user.lastName} ({user.email})</div>
                <div onClick={logoutUser} className="checkout-form-user-logout">Log Out</div>
              </div>
            </div>)}

            <div className="checkout-form-header">CONTACT INFORMATION</div>
            <input value={email} required={true} onChange={(e) => { setEmail(e.target.value) }} type="text" className="form-email checkout-field" placeholder="Email" />
            <div className="checkout-form-header">SHIPPING ADDRESS</div>
            {/* <div className="checkout-form-name"> */}
            <input value={firstName} required={true} onChange={(e) => { setFirstName(e.target.value) }} className="form-fname checkout-field" type="text" placeholder="First Name" />
            <input value={lastName} required={true} onChange={(e) => { setLastName(e.target.value) }} className="form-lname checkout-field" type="text" placeholder="Last Name" />
            {/* </div> */}
            <input value={address} required={true} onChange={(e) => { setAddress(e.target.value) }} className="form-address checkout-field" type="text" placeholder="Address" />
            <input value={city} required={true} onChange={(e) => { setCity(e.target.value) }} className="form-city checkout-field" type="text" placeholder="City" />
            <div className="checkout-form-location">
              <Select className="form-region"
                value={country}
                options={countries}
                onChange={(value) => { setCountry(value) }}
                styles={customStyles}
                placeholder="Country/Region"
                required={true}
              />
              <Select className="form-state"
                value={state}
                options={states}
                onChange={(value) => { setState(value) }}
                styles={customStyles}
                placeholder="State"
                required={true}
              />
            </div>
            <input value={zipCode} required={true} onChange={(e) => { setZipCode(e.target.value) }} className="form-zip-code checkout-field" type="text" placeholder="ZIP code" />
            <input value={phoneNumber} required={true} onChange={(e) => { setPhoneNumber(e.target.value) }} className="form-phone-number checkout-field" type="text" placeholder="Phone Number" />
            <button className="checkout-continue-btn" type="submit" >CONTINUE TO SHIPPING</button>
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
              <div className="checkout-product-item-details a">
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
          <div className="checkout-product-price">${total.toFixed(2)} USD</div>
        </div>
        <div className="Shipping sub">
          <div className="sub-header">Shipping</div>
          <div className="checkout-shipping-price">Calculated at next step</div>
        </div>

        <div className="totals-break"></div>

        <div className="Total">
          <div className="sub-header">Total</div>
          <div className="checkout-total-price">${total.toFixed(2)} USD</div>
        </div>

      </div>
    </div >
  )
}
