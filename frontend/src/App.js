import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Blank from "./components/Blank/Blank";

import Blank1 from "./components/Blank1/Blank1";

import Blank2 from "./components/Blank2/Blank2";

import Blank3 from "./components/Blank3/Blank3";

import Blank4 from "./components/Blank4/Blank4";

import Grid from "./components/Grid/Grid";

import Blank5 from "./components/Blank5/Blank5";

import Blank6 from "./components/Blank6/Blank6";

import Grid10 from "./components/Grid10/Grid10";

import Grid11 from "./components/Grid11/Grid11";

import Blank7 from "./components/Blank7/Blank7";

import Blank8 from "./components/Blank8/Blank8";

import Blank9 from "./components/Blank9/Blank9";

import Blank10 from "./components/Blank10/Blank10";

import Blank11 from "./components/Blank11/Blank11";

import Blank12 from "./components/Blank12/Blank12";

import Blank13 from "./components/Blank13/Blank13";

import Blank14 from "./components/Blank14/Blank14";

import Blank15 from "./components/Blank15/Blank15";

import Blank16 from "./components/Blank16/Blank16";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = { Blank } />
          <Route path = "/Blank1" component = { Blank1 } />
          <Route path = "/Blank2" component = { Blank2 } />
          <Route path = "/Blank3" component = { Blank3 } />
          <Route path = "/Blank4" component = { Blank4 } />
          <Route path = "/Grid" component = { Grid } />
          <Route path = "/Blank5" component = { Blank5 } />
          <Route path = "/Blank6" component = { Blank6 } />
          <Route path = "/Grid10" component = { Grid10 } />
          <Route path = "/Grid11" component = { Grid11 } />
          <Route path = "/Blank7" component = { Blank7 } />
          <Route path = "/Blank8" component = { Blank8 } />
          <Route path = "/Blank9" component = { Blank9 } />
          <Route path = "/Blank10" component = { Blank10 } />
          <Route path = "/Blank11" component = { Blank11 } />
          <Route path = "/Blank12" component = { Blank12 } />
          <Route path = "/Blank13" component = { Blank13 } />
          <Route path = "/Blank14" component = { Blank14 } />
          <Route path = "/Blank15" component = { Blank15 } />
          <Route path = "/Blank16" component = { Blank16 } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
}

export default App;
