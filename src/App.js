import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage'
import Header from './components/Header/Header'
import SignInAndSignUp from './pages/SignIn-and-SignUp/SignIn-and-SignUp'
import HomePage from './pages/homepage/homepage';
import { auth } from './Firebase/firebase.utils'


class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Router>
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUp} />
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;

