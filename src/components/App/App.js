import React from "react";
import "./App.css";
import Box from "@material-ui/core/Box";

/**
 * Components
 */
import TopNav from "../TopNav/TopNav";
import Catalog from "../Catalog/Catalog";
import SideSheet from "../SideSheet/SideSheet";
import Footer from "../Footer/Footer";
/**
 * Pages
 */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BitWorker } from "../../Pages/BitWorker/BitWorker";
import { BitcoinPrices } from "../../Pages/BitcoinPrices/BitcoinPrices";
import { BitPrime } from "../../Pages/BitPrime/BitPrime";
import { AtmFinder } from "../../Pages/AtmFinder/AtmFinder";

function SwitchRoutes() {
  return (
    <Switch>
      {/* Pages */}
      <Route exact path="/bitworker" component={BitWorker} />
      <Route exact path="/bitcoin-prices" component={BitcoinPrices} />
      <Route exact path="/bit-prime" component={BitPrime} />
      <Route exact path="/atm-finder" component={AtmFinder} />
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <SideSheet />
        <SwitchRoutes />
        <Box p={7}>
          <Catalog />
        </Box>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
