import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDisc } from '../../store/disc';
import { useParams } from 'react-router-dom';
import AvailableColors from '../AvailableColors';
import DiscDetails from '../DiscDetails';
import ShippingDetails from '../ShippingDetails';
import Cart from '../Cart';
import './Disc.css'
import { setImage } from '../../store/currentImage';
import { addDisc } from '../../store/bag';
import { openBag } from '../../store/checkoutState';

export default function Disc() {
  const dispatch = useDispatch()
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  const currentImage = useSelector((state) => state.currentImage.image)
  const disc = useSelector((state) => state.disc.disc);
  const bagOpen = useSelector((state) => state.bagState.open)

  useEffect(async () => {
    await dispatch(getDisc(id))
    setIsLoaded(true)
  }, [dispatch])

  const handleClick = () => {
    dispatch(addDisc(disc))
    dispatch(openBag())
  }

  return (isLoaded &&
    <div className="outer">
      <div className="disc">
        <div className="disc-product-images-div">
          {disc.images.map((imageUrl, idx) => (
            <img onClick={() => dispatch(setImage(idx))} className="product-side-image" src={imageUrl} />
          ))}
        </div>
        <div className="disc-product-image-div">
          <img className="disc-product-image" src={disc.images[currentImage]} />
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
            <button onClick={handleClick} className="disc-product-add-btn detail">ADD TO BAG</button>
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
      {bagOpen && <Cart />}
    </div>
  )
}
