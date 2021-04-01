import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './Navbar.css';

const NavBar = ({ setAuthenticated }) => {
  return (
    <div className="navbar">


      <div className="navbar-top">

        <div className="navbar-top-text">
          FREE DOMESTIC SHIPPING ON ALL ORDERS OVER $300
        </div>
        <div className="navbar-top-logo">
          <img src="https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/270x70/alogo_black1000_1455102483__18572_copy270x70_1534906618.original.png" />
        </div>
        <div className="navbar-top-controls">
          <div className="navbar-search-bar">
            <i class="fas fa-search"></i>
            <form>
              <textarea className="search-bar"></textarea>
            </form>
          </div>
          <div className="sign-in-btn">
            <i class="fab fa-500px"></i>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
          </NavLink>
          </div>
          <div className="checkout-btn">
            <i class="fas fa-shopping-cart"></i>
            <NavLink to="/checkout" exact={true} activeClassName="active">
              View Cart
          </NavLink>
          </div>
        </div>

      </div>


      <div className="navbar-bottom">
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink to="/" exact={true} activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse" exact={true} activeClassName="active">
                Browse
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse/innova" exact={true} activeClassName="active">
                Innova
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse/discraft" exact={true} activeClassName="active">
                Discraft
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse/dynamic-discs" exact={true} activeClassName="active">
                Dynamic Discs
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse/drivers" exact={true} activeClassName="active">
                Drivers
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse/midranges" exact={true} activeClassName="active">
                Midranges
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse/putters" exact={true} activeClassName="active">
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
