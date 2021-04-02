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
      dispatch(getDiscs(true, false, id))
    } else if (type === "brands") {
      dispatch(getDiscs(false, true, id))
    }
    setIsLoaded(true);
  }, [useParams()])
  return (isLoaded && (
    <div className="browse">
      <div className="browse-sidebar">SideBar, yay</div>
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
