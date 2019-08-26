import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from 'Pages/Home';
import Dashboard from 'Pages/Dashboard';
import Help from 'Pages/Help';
import Settings from 'Pages/Settings';
import Timeline from 'Pages/Timeline';
import UserImages from 'Pages/UserImages';
import Cards from 'Pages/Cards';
import ErrorNotFound from 'Pages/ErrorNotFound';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/settings" component={Settings} />
        <Route path="/admin/help" component={Help} />
        <Route path="/admin/timeline" component={Timeline} />
        <Route path="/admin/images" component={UserImages} />
        <Route path="/admin/cards" component={Cards} />

        <Route component={ErrorNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
