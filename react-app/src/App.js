import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/Navbar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Browse from "./components/Browse";
import Disc from "./components/Disc";
import Checkout from "./components/Checkout";
import { authenticate } from "./services/auth";
import BrowseBrands from "./components/BrowseBrands";
import BrowseStabilities from "./components/BrowseStabilities";
import Cart from './components/Cart';


function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const bagOpen = useSelector((state) => state.bagState.open);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <Route path="/" exact={true} authenticated={authenticated}>
          <h1>My Home Page</h1>
        </Route>
        <Route path="/browse" exact={true}>
          <Browse />
        </Route>
        <Route path="/browse/:type/:id">
          <Browse />
        </Route>
        {/* <Route path="/browse/stabilities/:id">
          <Browse />
        </Route> */}
        <Route path="/discs/:id">
          <Disc />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
      {bagOpen && <Cart />}
    </BrowserRouter>
  );
}

export default App;
