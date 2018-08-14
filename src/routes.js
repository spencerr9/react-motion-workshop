import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import TheMotion from "./Component/TheMotion/TheMotion";
import TheStaggeredMotion from "./Component/TheStaggeredMotion/TheStaggeredMotion";
import MenuPop from "./Component/MenuPop/MenuPop";
import WeMake from "./Component/WeMake/WeMake";
import IMake from "./Component/IMake/IMake";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Motion" component={TheMotion} />
    <Route path="/StaggeredMotion" component={TheStaggeredMotion} />
    <Route path="/MenuPop" component={MenuPop} />
    <Route path="/WeMake" component={WeMake} />
    <Route path="/IMake" component={IMake} />
  </Switch>
);
