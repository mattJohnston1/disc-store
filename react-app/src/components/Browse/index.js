import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscs } from '../../store/discs';
import DiscPanel from '../DiscPanel';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import './Browse.css';

export default function Browse() {
  let history = useHistory();
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  const discsObj = useSelector((state) => state.discs);
  const discs = Object.values(discsObj)  //keep this and have a filtered one beneath

  const { type, id } = useParams()

  let query = new URLSearchParams(useLocation().search);
  console.log(query.get("asdf"))


  useEffect(() => {
    if (type === undefined) {
      dispatch(getDiscs());
    } else if (type === "stabilities") {
      dispatch(getDiscs(false, true, id))
    } else if (type === "brands") {
      dispatch(getDiscs(true, false, id))
    }
    setIsLoaded(true);
  }, [useParams()])
  return (isLoaded && (
    <div className="browse">
      <div className="browse-top">
        <img className="browse-image" src="https://cdn.buttercms.com/UaR6hXbxSGi4pXwiAWEN" />
        {/* <div className="centered-text">Innova</div> */}
      </div>
      <div className="browse-bottom">
        <div className="browse-sidebar">
          <div className="sidebar-title">Disc General</div>
          <div className="sidebar-description">Pick from any of our selections from the most popular and the most widely used discs.</div>
          <div className="sidebar-selections">
            <div className="sidebar-category">
              <div className="category-name">Sort By</div>
              <div className="category-arrow">˅</div>
            </div>
            <div className="sidebar-category">
              <div className="category-name">Brand</div>
              <div className="category-arrow">˅</div>
            </div>
            <div className="sidebar-category">
              <div className="category-name">Disc Type</div>
              <div className="category-arrow">˅</div>
            </div>
            <div className="sidebar-category">
              <div className="category-name">Speed</div>
              <div className="category-arrow">˅</div>
            </div>
            <div className="sidebar-category">
              <div className="category-name">Glide</div>
              <div className="category-arrow">˅</div>
            </div>
            <div className="sidebar-category">
              <div className="category-name">Turn</div>
              <div className="category-arrow">˅</div>
            </div>
            <div className="sidebar-category">
              <div className="category-name">Fade</div>
              <div className="category-arrow">˅</div>
            </div>
          </div>
        </div>
        <div className="browse-discs">
          {discs.map((disc) => (
            <div onClick={() => history.push(`/discs/${disc.id}`)}>
              <DiscPanel disc={disc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  )
}
