import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import './Checkout.css';
import './Shipping.css';

export default function Shipping() {
  const dispatch = useDispatch()
  const history = useHistory()
  const products = useSelector((state) => state.products.products)
  const amounts = useSelector((state) => state.products.amounts)
  const total = useSelector((state) => state.products.total)
  const checkoutInfo = useSelector((state) => state.checkoutInfo)

  const [free, setFree] = useState(true)
  const [ups, setUps] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleFree = (e) => {
    if (ups) {
      setUps(false)
      setFree(!free)
    } else {
      // setFree(!free)
    }
  }

  const handleUps = (e) => {
    if (free) {
      setFree(false)
      setUps(!ups)
    } else {
      // setUps(!ups)
    }
  }
  let upsCost = null;
  useEffect(async () => {
    // const res = await fetch('https://api.shipengine.com/v1/rates/estimate',
    //   // {
    //   //   method: 'POST',
    //   //   headers: {
    //   //     "API-Key": "TEST_iPmnup93FWjleO2PGg1XmKdle+tKRcYLU+SEJlUQnz0",
    //   //     'Content-Type': 'application/json'
    //   //   },
    //   //   body: JSON.stringify({
    //   //     "carrier_ids": [
    //   //       "se-596789",
    //   //       "se-596790",
    //   //       "se-596791"
    //   //     ],
    //   //     "from_country_code": "US",
    //   //     "from_postal_code": "78756",
    //   //     "to_country_code": "US",
    //   //     "to_postal_code": "91521",
    //   //     "weight": {
    //   //       "value": 17,
    //   //       "unit": "pound"
    //   //     }
    //   //   }
    //   //   )

    //   // }
    // )
    // const data = res.json();
  })

  const handlePay = () => {

  }
  return (products.length ? (
    <div className="checkout">
      <div className="checkout-form">

        <div className="checkout-nav">Cart  ???  Information  ???  <b>Shipping</b>  ???  Payment</div>

        <div className="checkout-form">
          <form className="form shipping-form" onSubmit={handleSubmit}>
            <div className="checkout-form-header">CONTACT INFORMATION</div>
            <div className="user-details">
              <div className="details-list">
                <div className="details-header">
                  <div className="details-name">{checkoutInfo.firstName} {checkoutInfo.lastName}</div>
                  <div onClick={() => history.push('/checkout')} className="details-header-edit">edit</div>
                </div>
                {checkoutInfo && (
                  <div className="new-detail">
                    <div className="detail-title">Address</div>
                    <div className="detail-detail">{checkoutInfo.address}, {checkoutInfo.city}, {checkoutInfo.state.value}, {checkoutInfo.zipCode}, {checkoutInfo.country.label}</div>
                  </div>
                )}
                <div className="new-detail">
                  <div className="detail-title">Email</div>
                  <div className="detail-detail">{checkoutInfo.email}</div>
                </div>
                <div className="new-detail">
                  <div className="detail-title">Phone Number</div>
                  <div className="detail-detail">{checkoutInfo.phoneNumber}</div>
                </div>
              </div>
            </div>
            <div className="checkout-form-header">SHIPPING METHOD</div>
            <div className="checkout-form-location shipping-info">


              <div className="form-shipping-free">
                <div className="ship">
                  <div className="round check">
                    <input checked={free} onChange={handleFree} type="checkbox" id="checkbox" />
                    <label for="checkbox"></label>
                  </div>
                  <div className="shipping-type">Free Shipping</div>
                </div>
                <div className="shipping-price">Free</div>
              </div>


              <div className="form-shipping-ups">
                <div className="ship">
                  <div className="round2 check">
                    <input checked={ups} onChange={handleUps} type="checkbox" id="checkbox2" />
                    <label for="checkbox2"></label>
                  </div>
                  <div className="shipping-type">UPS 2-day Shipping</div>
                </div>
                <div className="shipping-price">$6.78</div>
              </div>
            </div>
            <a href="/browse" className="checkout-continue-btn" type="submit">CONTINUE TO PAYMENT</a>
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
          <div className="checkout-product-price">${total.toFixed(2)} USD</div>
        </div>
        <div className="Shipping sub">
          <div className="sub-header">Shipping</div>
          <div className="checkout-shipping-price">{free ? "Free" : "$6.78"}</div>
        </div>

        <div className="totals-break"></div>

        <div className="Total">
          <div className="sub-header">Total</div>
          {free && (
            <div className="checkout-total-price">${total.toFixed(2)} USD</div>
          )}
          {ups && (
            <div className="checkout-total-price">${(total + 6.78).toFixed(2)} USD</div>
          )}
        </div>
      </div>
    </div >
  ) : (<Redirect to="/" />)
  )
}
