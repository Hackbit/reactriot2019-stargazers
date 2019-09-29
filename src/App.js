import React, { Component } from "react";
import "./App.css";

//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import LandingPage from './jsx-components/LandingPage';
import MainPage from './jsx-components/MainPage';
import PageNotFound from './jsx-components/404';
import ZodiacSigns from './jsx-components/ZodiacSigns';
import AllZodiacBooks from './jsx-components/zodiacBooks/AllZodiacBooks';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/*All our Routes goes here!*/}
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/MainPage" component={MainPage} />
          <Route exact path="/ZodiacSigns" component={ZodiacSigns} />
          <Route exact path="/AllZodiacBooks" component={AllZodiacBooks} />
          <Route exact path="/404" component={PageNotFound} />
          <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}

export default App;