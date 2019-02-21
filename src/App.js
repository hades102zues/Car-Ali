import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";

import PageLayout from "./pages/app-level/PageLayout/PageLayout";

import HomePage from "./pages/HomePage/HomePage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import SignupPage from "./pages/SignupPage/SignupPage.js";
import ResultsPage from "./pages/ResultsPage/ResultsPage.js";
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage.js";
import BidDisplayPage from "./pages/BidDisplayPage/BidDisplayPage.js";

import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <PageLayout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/results" component={ResultsPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/bid-view/:listingId" component={BidDisplayPage} />
              <Route path="/user/dashboard" component={DashBoardPage} />
              <Redirect to="/" />
            </Switch>
          </PageLayout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
