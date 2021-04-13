import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import "./App.css";

const HatPage = () => {
  return (
    <div>
      <h1>Hats!!</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
