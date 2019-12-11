import React from "react";
import { HashRouter, Route } from "react-router-dom";
import TradingPlatform from "./components/trading-platform";
import LandingPage from "./components/landing-page";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={LandingPage} />
        <Route path="/platform" exact component={TradingPlatform} />
      </HashRouter>
    </div>
  );
}

export default App;
