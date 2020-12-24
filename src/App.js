import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage'
import Header from './components/Header/Header'
import SignInAndSignUp from './pages/SignIn-and-SignUp/SignIn-and-SignUp'
import HomePage from './pages/homepage/homepage';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils'
import { setCurrentUser } from './Redux/User/userAction'
import Checkout from './pages/checkout/Checkout';


class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route
              exact
              path='/signin'
              render={() => this.props.currentUser ?
                (<Redirect to='/' />) :
                (<SignInAndSignUp />)} />
            <Route exact path='/checkout' component={Checkout} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispactchToProps = (dispactch) => ({
  setCurrentUser: user => dispactch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispactchToProps)(App);

