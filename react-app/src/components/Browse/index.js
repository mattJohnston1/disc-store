import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscs } from '../../store/discs';
import DiscPanel from '../DiscPanel';
import { useHistory, useParams } from 'react-router-dom';
import './Browse.css';

export default function Browse() {
  let history = useHistory();
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  const discsObj = useSelector((state) => state.discs);
  const discs = Object.values(discsObj)

  const { type, id } = useParams()
  console.log(discs)
  console.log(type)
  console.log(id)

  useEffect(async () => {
    if (type === undefined) {
      dispatch(getDiscs());
    } else if (type === "stabilities") {
      dispatch(getDiscs(false, true, id)) //maybe add a -1 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    } else if (type === "brands") {
      dispatch(getDiscs(true, false, id))
    }
    setIsLoaded(true);
  }, [useParams()])
  return (isLoaded && (
    <div className="browse">
      <div className="browse-sidebar">
        <div className="sidebar-title"></div>
        <div className="sidebar-selections">
          <div className="sidebar-category">Sort By</div>
          <div className="sidebar-category">Featured</div>
          <div className="sidebar-category">Brand</div>
          <div className="sidebar-category">Color</div>
          <div className="sidebar-category">Plastic</div>
          <div className="sidebar-category">Speed</div>
          <div className="sidebar-category">Glide</div>
          <div className="sidebar-category">Turn</div>
          <div className="sidebar-category">Fade</div>

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
  )
  )
}
