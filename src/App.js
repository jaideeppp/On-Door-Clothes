import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage'

import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
