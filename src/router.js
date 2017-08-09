import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import Details from './components/Details/Details';
import Landing from './components/Landing/Landing';


export default (
  <Switch>

    <Route component={ Landing } exact path="/" />
    <Route component={ Cart } path="/cart" />
    <Route component={ Shop } path="/shop" />
    <Route component={ Details } path="/details/:name" />

  </Switch>
)
