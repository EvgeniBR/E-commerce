import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import "./App.css";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import Header from "./components/Header/Header.component";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp.component";
import { auth } from "./firebase/firebase.utils";


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount = () =>{
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      console.log(user)
      this.setState({currentUser:user});
    });
  }

  componentWillUnmount = () =>{
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
