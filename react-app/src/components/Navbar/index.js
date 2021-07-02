import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { openBag } from '../../store/checkoutState';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { script } from './script'
import { authenticate, logout } from '../../services/auth';
import { setCurrentUser, setUser } from '../../store/currentUser';
import { getWatchlistDiscs } from '../../store/watchlist';

const NavBar = ({ setAuthenticated }) => {
  const dispatch = useDispatch();

  const [authorized, setAuthorized] = useState(false);
  const user = useSelector((state) => state.currentUser.user)
  dispatch(getWatchlistDiscs(1))
  useEffect(() => {
    script()
  }, [])

  useEffect(() => {
    const auth = async () => {
      const res = await authenticate()
      if (res.email === undefined) {
        setAuthorized(false)
      } else {
        setAuthorized(true)
      }
    }
    const user = auth()
  })

  const handleLogoutClick = async () => {
    await logout();
    dispatch(setUser(null))
    setAuthenticated(false)
  }
  return (
    <div className="navbar" id="navbar">


      <div className="navbar-top">

        <div className="navbar-top-text">
          FREE DOMESTIC SHIPPING ON ALL ORDERS OVER $300
        </div>
        <div className="navbar-top-logo">
          {/* <img className="logo-img" src="https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/270x70/alogo_black1000_1455102483__18572_copy270x70_1534906618.original.png" /> */}
          {/* <img className="logo-img" src="https://i.imgur.com/afqddMp.png" /> */}
          <img className="logo-img" src="https://i.imgur.com/yeD2Aaq.png" />
          {/* <img className="logo-img" src="https://i.imgur.com/HNq2nDS.png" /> */}
        </div>
        <div className="navbar-top-controls">
          {/* <div className="navbar-search-bar">
            <i class="fas fa-search"></i>
            <form>
              <textarea className="search-bar"></textarea>
            </form>
          </div> */}
          <div className="spacer"></div>
          {/* {authorized && (
            <div className="watchlist-btn">
              <img src="https://img.icons8.com/material-outlined/48/000000/wish-list.png" />
              <div className="watchlist-btn-text">Watchlist</div>
            </div>
          )} */}
          <div className="sign-in-btn">
            {!authorized && (
              <>
                <i class="fab fa-500px"></i>
                <NavLink className="login" to="/login" exact={true}>
                  Login
                </NavLink>
              </>
            )}
            {authorized && (
              <div className="logout-btn-div" onClick={handleLogoutClick}>
                <i class="fab fa-500px"> Logout</i>
                {/* <div className="login" to="/login" exact={true}>
                  Logout
                </div> */}
              </div>
              // <LogoutButton setAuthenticated={setAuthenticated} />
            )}
          </div>
          <div className="view-cart-btn" onClick={() => { dispatch(openBag()) }}>
            <i class="fas fa-shopping-cart"></i> View Cart
          </div>
        </div>

      </div>


      <div className="navbar-bottom" id="navbar-bottom">
        <nav>
          <ul className="nav-list">
            {/* <li>
              <NavLink to="/" exact={true} activeClassName="active">
                Home
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/browse" exact={true} activeClassName="active">
                Browse
              </NavLink>
            </li>
            <li>
              <NavLink to={`/browse/brands/${1}`} exact={true} activeClassName="active">
                Discraft
              </NavLink>
            </li>
            <li>
              <NavLink to={`/browse/brands/${2}`} exact={true} activeClassName="active">
                Innova
              </NavLink>
            </li>
            <li>
              <NavLink to={`/browse/brands/${3}`} exact={true} activeClassName="active">
                Dynamic Discs
              </NavLink>
            </li>
            <li>
              <NavLink to={`/browse/types/${1}`} exact={true} activeClassName="active">
                Drivers
              </NavLink>
            </li>
            <li>
              <NavLink to={`/browse/types/${2}`} exact={true} activeClassName="active">
                Midranges
              </NavLink>
            </li>
            <li>
              <NavLink to={`/browse/types/${3}`} exact={true} activeClassName="active">
                Putters
              </NavLink>
            </li>
            {/* <li>
              <LogoutButton setAuthenticated={setAuthenticated} />
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
