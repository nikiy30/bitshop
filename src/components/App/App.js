import React from "react";
import "./App.css";
import TopNav from "../TopNav/TopNav";
import Catalog from "../Catalog/Catalog";
import SideSheet from "../SideSheet/SideSheet";
import Box from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function SwitchRoutes() {
  return (
    <Switch>
      <Route exact path="/bitworker" component={BitWorker} />
      <Route exact path="/bitcoin-prices" component={BitcoinPrices} />
      <Route exact path="/bit-prime" component={BitPrime} />
      <Route exact path="/atm-finder" component={AtmFinder} />
    </Switch>
  );
}

function App() {
  return (
    <div className="App">
      <TopNav />
      <SideSheet />
      <Box flex={1}>
        <SwitchRoutes />
      </Box>
      <Catalog />
    </div>
  );
}

export default App;
