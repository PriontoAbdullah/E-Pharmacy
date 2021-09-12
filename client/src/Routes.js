import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VenderDashboardPage from './Pages/Admin/Vendor/VenderDashboardPage';
import LoginPage from './Pages/Authentication/LoginPage';
import RegistrationPage from './Pages/Authentication/RegistrationPage';
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import Home from './Pages/Home/Home';
import OrderHistory from './Pages/OrderHistory/OrderHistory';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import AllShop from './Pages/Shop/AllShop';
import ShopDetailsPage from './Pages/Shop/ShopDetailsPage';

const Navigation = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/registration">
            <RegistrationPage />
          </Route>
          <Route path="/shopDetails/:vendorId">
            <ShopDetailsPage />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route exact path="/productDetails">
            <ProductDetails />
          </Route>
          <Route exact path="/vendor/:panel">
            <VenderDashboardPage />
          </Route>
          <Route path="/allShop">
              <AllShop></AllShop>
          </Route>
          <Route path="/orderHistory">
            <OrderHistory></OrderHistory>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Navigation;
