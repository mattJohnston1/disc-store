import React, { useState } from "react";
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../services/auth';

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const history = useHistory()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password, firstName, lastName);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const updateLastName = (e) => {
    setLastName(e.target.value)
  }

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-page">
      <div className="login-header">
        Sign up
      </div>
      <div className="login-bottom">

        <form onSubmit={onSignUp}>
          <div>
            <div className="pass-label">Username:</div>
            <input
              type="text"
              name="username"
              className="login-input"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <div className="pass-label">Email Address:</div>
            <input
              type="text"
              name="email"
              className="login-input"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <div className="pass-label">First Name:</div>
            <input
              type="text"
              name="firstName"
              className="login-input"
              onChange={updateFirstName}
              value={firstName}
            ></input>
          </div>
          <div>
            <div className="pass-label">Last Name:</div>
            <input
              type="text"
              name="lastName"
              className="login-input"
              onChange={updateLastName}
              value={lastName}
            ></input>
          </div>
          <div>
            <div className="pass-label">Password:</div>
            <input
              type="password"
              name="password"
              className="login-input"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <div className="pass-label">Repeat Password:</div>
            <input
              type="password"
              name="repeat_password"
              className="login-input"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button className="sign-in-button" type="submit">Sign Up</button>
        </form>
        <div className="other-login">
          <div className="other-header">Returning Customer?</div>
          <div className="other-text-header">Login with your account and you'll be able to</div>
          <ul className="other-text-list">
            <li className="other-text-bullet">Check out faster</li>
            <li className="other-text-bullet">Save your shipping addresses</li>
            <li className="other-text-bullet">Access your order history</li>
            <li className="other-text-bullet">Save items to your wish list</li>
          </ul>
          <button onClick={() => history.push('/login')} className="sign-in-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
