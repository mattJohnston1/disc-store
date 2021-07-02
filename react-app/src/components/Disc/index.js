import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDisc } from '../../store/disc';
import { useHistory, useParams } from 'react-router-dom';
import AvailableColors from '../AvailableColors';
import DiscDetails from '../DiscDetails';
import ShippingDetails from '../ShippingDetails';
import './Disc.css'
import { setImage } from '../../store/currentImage';
import { openBag } from '../../store/checkoutState';
import { addProduct } from '../../store/products';
import { addDiscToWatchlist, removeDiscFromWatchlist } from '../../store/watchlist';
import { openWatchlist } from '../../store/watchlistState';

export default function Disc() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  const currentImage = useSelector((state) => state.currentImage.image);
  const currentUser = useSelector((state) => state.currentUser.user);
  const watchlist = useSelector((state) => state.watchlist)

  let isIn = false;
  const watchlistArr = Object.values(watchlist)
  watchlistArr.forEach((disc) => {
    if (disc.id == id) {
      isIn = true;
    }
  })

  const disc = useSelector((state) => state.disc.disc);

  useEffect(async () => {
    dispatch(openWatchlist(false))
    await dispatch(getDisc(id))
    setIsLoaded(true)
  }, [dispatch])

  const handleClick = () => {
    dispatch(addProduct(disc))
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
            {isIn && (
              <button onClick={() => dispatch(removeDiscFromWatchlist(currentUser.id, id))} className="watchlist-button detail">ADDED TO WATCHLIST</button>
            )}
            {!isIn && (
              <button onClick={() => {
                if (currentUser !== null) {
                  dispatch(addDiscToWatchlist(currentUser.id, id))
                } else {
                  history.push('/login')
                }
              }} className="watchlist-button detail">ADD TO WATCHLIST</button>
            )}
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
    </div>
  )
}
