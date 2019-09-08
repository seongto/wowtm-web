import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = props => {
  const isLogin = window.localStorage.getItem("token");

  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      {isLogin ? (
        <li>Logout</li>
      ) : (
        <Link to="/login">
          <li>Login</li>
        </Link>
      )}
      <Link to="/signup">
        <li>Signup</li>
      </Link>
    </ul>
  );
};

export default Navigation;
