import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from 'Pages/Home';
import {AdminDashboard} from 'Pages/AdminDashbord';
import {ErrorNotFound} from 'Pages/Errors';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/admin" component={AdminDashboard} />

        <Route component={ErrorNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
