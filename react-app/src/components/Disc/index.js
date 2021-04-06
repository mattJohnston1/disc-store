import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDisc } from '../../store/disc';
import { useParams } from 'react-router-dom';
import AvailableColors from '../AvailableColors';
import DiscDetails from '../DiscDetails';
import ShippingDetails from '../ShippingDetails'
import './Disc.css'

export default function Disc() {
  const dispatch = useDispatch()
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const disc = useSelector((state) => state.disc.disc);
  console.log(disc)
  useEffect(async () => {
    await dispatch(getDisc(id))
    setIsLoaded(true)
  }, [dispatch])
  return (isLoaded &&
    <div className="outer">
      <div className="disc">
        <div className="disc-product-images-div">
          {disc.images.map((imageUrl) => (
            <img className="product-side-image" src={imageUrl} />
          ))}
        </div>
        <div className="disc-product-image-div">
          <img className="disc-product-image" src={disc.images[0]} />
        </div>
        <div className="disc-product-details">
          <div className="disc-product-title detail">
            {disc.name}
          </div>
          <div className="disc-product-rating detail">
            ★★★★★
        </div>
          <div className="disc-product-price detail">
            USD${disc.price}
          </div>
          <div className="disc-product-colors detail">
            <AvailableColors />
          </div>
          <div className="disc-product-btns">
            <button className="watchlist-button detail">ADD TO WATCHLIST</button>
            <button className="disc-product-add-btn detail">ADD TO BAG</button>
          </div>
          <div className="disc-product-details">
            <DiscDetails disc={disc} />
          </div>
        </div>
      </div>
      <div className="shipping-details">
        <div>
          <ShippingDetails />
        </div>
      </div>
    </div>
  )
}
