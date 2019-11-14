import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import CardList from "./CardList";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={CardList} />
            <Route exact path="/blog/:id" component={Body} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}
