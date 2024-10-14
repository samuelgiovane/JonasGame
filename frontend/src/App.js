import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Blank from "./components/Blank/Blank";
import Blank1 from "./components/Blank1/Blank1";
import Blank2 from "./components/Blank2/Blank2";
import Blank3 from "./components/Blank3/Blank3";

const paths = {
  blank: "/a1b2c3d4e5f6g7h8i9j0k1m2n",
  blank1: "/z9y8x7w6v5u4t3s2r1q0p9o8n",
  blank2: "/m2n3b4v5c6x7z8a9s0d1f2g3h",
  blank3: "/j0i9u8y7t6r5e4w3q2l1k0o9m8"
};

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Blank} />
        <Route path={paths.blank} component={Blank} />
        <Route path={paths.blank1} component={Blank1} />
        <Route path={paths.blank2} component={Blank2} />
        <Route path={paths.blank3} component={Blank3} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
