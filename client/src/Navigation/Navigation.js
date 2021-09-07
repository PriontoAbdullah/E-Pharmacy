import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from '../Components/Home/Login/LoginForm';
import Header from '../Components/Home/NavBar/Header';
import NavBar from '../Components/Home/NavBar/NavBar';
import Home from '../Pages/Home/Home';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';


const Navigation = () => {
    return (
        <div>
            <Router>
                <Header />
                <NavBar/>
                <Switch>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/login">
                        <LoginForm/>
                    </Route>
                    <Route exact path="/registration">
                        <LoginForm/>
                    </Route>
                    <Route exact path="/product">
                        <ProductDetails/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Navigation;
