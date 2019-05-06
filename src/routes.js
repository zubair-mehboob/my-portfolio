import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home/home";
import Layout from "./hoc/Layout/layout";
class Routes extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
