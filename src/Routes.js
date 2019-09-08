import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Pages/Home";
import AdminDashboard from "Pages/AdminDashboard";
import ErrorNotFound from "Pages/Errors";
import Login from "Pages/Login";
import Signup from "Pages/Signup";

import Navigation from "Components/Navigation";

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        <Route component={ErrorNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
