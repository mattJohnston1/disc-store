import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscs } from '../../store/discs';
import { filterDiscs, getFilterDiscs, setFilteredDiscs } from '../../store/filteredDiscs';
import DiscPanel from '../DiscPanel';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import './Browse.css';

export default function Browse() {
  let history = useHistory();
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  const [filterLoaded, setFilterLoaded] = useState(false);

  const filteredObjs = useSelector((state) => state.filteredDiscs)
  const filteredDiscs = Object.values(filteredObjs)  //keep this and have a filtered one beneath
  const discsObj = useSelector((state) => state.discs);
  const discs = Object.values(discsObj)  //keep this and have a filtered one beneath

  let unfilteredDiscs = []
  for (let i = 0; i < discs.length; i++) {
    unfilteredDiscs.push(JSON.parse(JSON.stringify(discs[i])))
  }


  const { type, id } = useParams()

  // let query = new URLSearchParams(useLocation().search);

  const [brandFilter, setBrandFilter] = useState([])
  const [typeFilter, setTypeFilter] = useState([])
  const [speedFilter, setSpeedFilter] = useState([])
  const [glideFilter, setGlideFilter] = useState([])
  const [turnFilter, setTurnFilter] = useState([])
  const [fadeFilter, setFadeFilter] = useState([])

  useEffect(() => {
    if (type === undefined) {
      dispatch(getDiscs());
      dispatch(getFilterDiscs());
    } else if (type === "stabilities") {
      dispatch(getDiscs(false, true, id))
      dispatch(getFilterDiscs(false, true, id));
    } else if (type === "brands") {
      dispatch(getDiscs(true, false, id))
      dispatch(getFilterDiscs(true, false, id))
    }
    setIsLoaded(true);
  }, [useParams()])

  useEffect(() => {
    if (filteredDiscs) {
      setFilterLoaded(true)
    }
  }, [filteredDiscs])

  useEffect(() => {
    dispatch(filterDiscs(discs, brandFilter, typeFilter, speedFilter, glideFilter, turnFilter, fadeFilter, discs))
  }, [brandFilter, typeFilter, speedFilter, glideFilter, turnFilter, fadeFilter])

  const handleClick = (e, filter, value) => {
    if (filter === 'speed') {
      if (speedFilter.includes(value)) {
        setSpeedFilter(speedFilter.filter((speed) => speed !== value))
        e.target.className = e.target.className.split(" ")[0]
      } else {
        setSpeedFilter((prev) => [...prev, value])
        e.target.className += ' category-filter-active';
      }
    } else if (filter === 'brand') {
      if (brandFilter.includes(value)) {
        setBrandFilter(brandFilter.filter((brand) => brand !== value))
        e.target.className = e.target.className.split(" ")[0]
      } else {
        setBrandFilter((prev) => [...prev, value])
        e.target.className += ' category-filter-active';
      }
    } else if (filter === 'type') {
      if (typeFilter.includes(value)) {
        setTypeFilter(typeFilter.filter((type) => type !== value))
        e.target.className = e.target.className.split(" ")[0]
      } else {
        setTypeFilter((prev) => [...prev, value])
        e.target.className += ' category-filter-active';
      }
    } else if (filter === 'glide') {
      if (glideFilter.includes(value)) {
        setGlideFilter(glideFilter.filter((glide) => glide !== value))
        e.target.className = e.target.className.split(" ")[0]
      } else {
        setGlideFilter((prev) => [...prev, value])
        e.target.className += ' category-filter-active';
      }
    } else if (filter === 'turn') {
      if (turnFilter.includes(value)) {
        setTurnFilter(turnFilter.filter((turn) => turn !== value))
        e.target.className = e.target.className.split(" ")[0]
      } else {
        setTurnFilter((prev) => [...prev, value])
        e.target.className += ' category-filter-active';
      }
    } else if (filter === 'fade') {
      if (fadeFilter.includes(value)) {
        setFadeFilter(fadeFilter.filter((fade) => fade !== value))
        e.target.className = e.target.className.split(" ")[0]
      } else {
        setFadeFilter((prev) => [...prev, value])
        e.target.className += ' category-filter-active';
      }
    }
  }

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
              <div className="sidebar-category-header">
                <div className="category-name">Sort By</div>
                <div className="category-arrow">˅</div>
              </div>
              <div className="category-list">
                <div onClick={(e) => { handleClick(e, 'brand', 1) }} className="category-filter">Discraft</div>
                <div onClick={(e) => { handleClick(e, 'brand', 2) }} className="category-filter">Innova</div>
                <div onClick={(e) => { handleClick(e, 'brand', 3) }} className="category-filter">Dynamic Discs</div>
              </div>
            </div>
            <div className="sidebar-category">
              <div className="sidebar-category-header">
                <div className="category-name">Disc Type</div>
                <div className="category-arrow">˅</div>
              </div>
              <div className="category-list">
                <div onClick={(e) => { handleClick(e, 'type', 1) }} className="category-filter">Distance Driver</div>
                <div onClick={(e) => { handleClick(e, 'type', 2) }} className="category-filter">Midrange</div>
                <div onClick={(e) => { handleClick(e, 'type', 3) }} className="category-filter">Putter</div>
              </div>
            </div>
            <div className="sidebar-category">
              <div className="sidebar-category-header">
                <div className="category-name">Speed</div>
                <div className="category-arrow">˅</div>
              </div>
              <div className="category-list">
                <div onClick={(e) => { handleClick(e, 'speed', 4) }} className="category-filter">4</div>
                <div onClick={(e) => { handleClick(e, 'speed', 5) }} className="category-filter">5</div>
                <div onClick={(e) => { handleClick(e, 'speed', 7) }} className="category-filter">7</div>
                <div onClick={(e) => { handleClick(e, 'speed', 9) }} className="category-filter">9</div>
                <div onClick={(e) => { handleClick(e, 'speed', 12) }} className="category-filter">12</div>
                <div onClick={(e) => { handleClick(e, 'speed', 13) }} className="category-filter">13</div>
              </div>
            </div>
            <div className="sidebar-category">
              <div className="sidebar-category-header">
                <div className="category-name">Glide</div>
                <div className="category-arrow">˅</div>
              </div>
              <div className="category-list">
                <div onClick={(e) => { handleClick(e, 'glide', 3) }} className="category-filter">3</div>
                <div onClick={(e) => { handleClick(e, 'glide', 4) }} className="category-filter">4</div>
                <div onClick={(e) => { handleClick(e, 'glide', 5) }} className="category-filter">5</div>
                <div onClick={(e) => { handleClick(e, 'glide', 6) }} className="category-filter">6</div>
              </div>
            </div>
            <div className="sidebar-category">
              <div className="sidebar-category-header">
                <div className="category-name">Turn</div>
                <div className="category-arrow">˅</div>
              </div>
              <div className="category-list">
                <div onClick={(e) => { handleClick(e, 'turn', 0) }} className="category-filter">0</div>
                <div onClick={(e) => { handleClick(e, 'turn', -1) }} className="category-filter">-1</div>
                <div onClick={(e) => { handleClick(e, 'turn', -2) }} className="category-filter">-2</div>
                <div onClick={(e) => { handleClick(e, 'turn', -3) }} className="category-filter">-3</div>
              </div>
            </div>
            <div className="sidebar-category">
              <div className="sidebar-category-header">
                <div className="category-name">Fade</div>
                <div className="category-arrow">˅</div>
              </div>
              <div className="category-list">
                <div onClick={(e) => { handleClick(e, 'fade', 2) }} className="category-filter">2</div>
                <div onClick={(e) => { handleClick(e, 'fade', 3) }} className="category-filter">3</div>
                <div onClick={(e) => { handleClick(e, 'fade', 4) }} className="category-filter">4</div>
              </div>
            </div>
            {/* <div className="sidebar-category">
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
            </div> */}
          </div>
        </div>
        {filterLoaded && (
          <div className="browse-discs">
            {filteredDiscs.map((disc) => (
              <div onClick={() => history.push(`/discs/${disc.id}`)}>
                <DiscPanel disc={disc} />
              </div>
            ))}
          </div>
        )
        }
      </div>
    </div>
  )
  )
}
