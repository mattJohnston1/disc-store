import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { redirectTo } from '../../store/watchlistRedirect';
import { openWatchlist } from '../../store/watchlistState';
import './watchlist.css';

export default function Cart({ history }) {
  const dispatch = useDispatch()
  const watchlist = useSelector((state) => state.watchlist)
  const items = Object.values(watchlist)

  return (
    <div className="wl-box">
      <div className="wl-header">{`Your Watchlist (${items.length})`}</div>
      <div className="wl-items">
        {items.map((item) => (
          <div className="wl-item"
            onClick={() => dispatch(redirectTo(item.id))}
          >
            <img src={item.images[0]} className="wl-item-img" />
            <div className="wl-item-details">
              <div className="wl-item-name">{item.name}</div>
              <div>{item.price}</div>
            </div>
            <div className="wl-item-btn">›</div>
          </div>
        ))}
      </div>
    </div>
  )
}
