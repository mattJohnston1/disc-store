import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../services/auth";
import './Auth.css';

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const page = useSelector((state) => state.redirectPage.page)
  console.log("REDIRECT PAGE", page)
  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated && page === null) {
    return <Redirect to="/browse" />;
  } else if (authenticated && page) {
    return <Redirect to={page} />
  } else if (authenticated){
    return <Redirect to="/browse" />;
  }

  return (
    <div className="login-page">
      <div className="login-header">
        Sign in
      </div>
      <div className="login-bottom">

        <form className="login-form" onSubmit={onLogin}>
          <div>
            {errors.map((error) => (
              <div className="login-error">{error}</div>
            ))}
          </div>


          <div>
            <div className="pass-label">Email Address:</div>
            <input
              name="email"
              type="text"
              value={email}
              className="login-input"
              onChange={updateEmail}
            />
          </div>
          <div>
            <div className="pass-label">Password:</div>
            <input
              name="password"
              type="password"
              value={password}
              className="login-input"
              onChange={updatePassword}
            />
          </div>
          <button className="sign-in-button" type="submit">Sign In</button>
        </form>
        <div className="other-login">
          <div className="other-header">New Customer?</div>
          <div className="other-text-header">Create and account with us and you'll be able to</div>
          <ul className="other-text-list">
            <li className="other-text-bullet">Check out faster</li>
            <li className="other-text-bullet">Save your shipping addresses</li>
            <li className="other-text-bullet">Access your order history</li>
            <li className="other-text-bullet">Save items to your wish list</li>
          </ul>
          <button onClick={() => history.push('/sign-up')} className="sign-in-button">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
