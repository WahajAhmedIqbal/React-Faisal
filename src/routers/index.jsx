import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { About, ContactUs, Home, PageNotFound } from "../containers";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contactUs" component={ContactUs} />

      <Route exact path="/404" component={PageNotFound} />
      <Route exact path="/*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default Router;
