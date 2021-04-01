import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDisc } from '../../store/disc';
import { useParams } from 'react-router-dom';
import AvailableColors from '../AvailableColors'
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
      </div>
    </div>
  )
}
