import React from "react";
import { HashRouter, Route } from "react-router-dom";
import TradingPlatform from "./components/trading-platform";
import LandingPage from "./components/landing-page";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route
          path={process.env.PUBLIC_URL + "/"}
          exact
          component={LandingPage}
        />
        <Route
          path={process.env.PUBLIC_URL + "/platform"}
          exact
          component={TradingPlatform}
        />
      </HashRouter>
    </div>
  );
}

export default App;
