import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VendorLayout from './Components/Admin/Vendor/VendorLayout';
import LoginForm from './Components/Home/Login/LoginForm';
import Home from './Pages/Home/Home';

const Navigation = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/registration">
            <LoginForm />
          </Route>
          <Route exact path="/vendor/:panel">
            <VendorLayout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Navigation;
