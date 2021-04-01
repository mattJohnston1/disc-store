import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscs } from '../../store/discs';
import DiscPanel from '../DiscPanel';

export default function Browse() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const discsObj = useSelector((state) => state.discs);
  const discs = Object.values(discsObj)
  console.log(discs)
  useEffect(async () => {
    await dispatch(getDiscs());
    setIsLoaded(true);
  }, [])
  return (isLoaded && (
    <div className="browse">
      <div className="browse-sidebar">SideBar, yay</div>
      {discs.map((disc) => (
        <DiscPanel disc={disc} />
      ))}
    </div>
  )
  )
}
