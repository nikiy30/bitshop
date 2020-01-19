import React from "react";
import "./App.css";

/**
 * Components
 */
import TopNav from "../TopNav/TopNav";
import SideSheet from "../SideSheet/SideSheet";
import Footer from "../Footer/Footer";
import Checkout from "../../Pages/Checkout/Checkout";
import Catalog from "../Catalog/Catalog";
/**
 * Pages
 */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BitWorker } from "../../Pages/BitWorker/BitWorker";
import { BitcoinPrices } from "../../Pages/BitcoinPrices/BitcoinPrices";
import { BitPrime } from "../../Pages/BitPrime/BitPrime";
import { AtmFinder } from "../../Pages/AtmFinder/AtmFinder";
import Pricing from "../../Pages/Pricing/Pricing";
import Landing from "../../Pages/Landing/Landing";

function SwitchRoutes() {
  return (
    <Switch>
      {/* Pages */}
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/bitworker" component={BitWorker} />
      <Route exact path="/bitcoin-prices" component={BitcoinPrices} />
      <Route exact path="/bit-prime" component={BitPrime} />
      <Route exact path="/atm-finder" component={AtmFinder} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/home" component={Landing} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/pricing" component={Pricing} />
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <SwitchRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
