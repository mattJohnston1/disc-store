import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../services/auth";
import { setUser } from "../../store/currentUser";

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await logout();
    dispatch(setUser(null))
    setAuthenticated(false);
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
