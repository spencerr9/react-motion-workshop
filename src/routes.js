import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import TheMotion from "./Component/TheMotion/TheMotion";
import TheStaggeredMotion from "./Component/TheStaggeredMotion/TheStaggeredMotion";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Motion" component={TheMotion} />
    <Route path="/StaggeredMotion" component={TheStaggeredMotion} />
  </Switch>
);
