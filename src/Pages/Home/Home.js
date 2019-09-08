import React from "react";
import "./Home.scss";
import * as constants from "constants.js";
import { withRouter } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-wrapper">
      <h1>WOW Classic</h1>
    </div>
  );
};

export default withRouter(Home);
