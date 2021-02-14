import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';

// layouts

// import Admin from "layouts/Admin.js";
import Auth from "./layouts/Auth";

// views without layouts

import Home from './views/Home';
// import Profile from "views/Profile.js";
// import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      {/* <Route path="/admin" component={Admin} /> */}
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/Home" exact component={Home} />
      {/* <Route path="/profile" exact component={Profile} /> */}
      {/* <Route path="/" exact component={Index} /> */}
      {/* add redirect for first page */}
      <Redirect from="*" to="/Home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

