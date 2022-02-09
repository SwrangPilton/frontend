import React from "react";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Home from './pages/Home'
import Error from './pages/Error'
import ProfileCard from './pages/profile-card/ProfileCard'
import StatsCard from './pages/stats-preview-card/index'
import Summary from './pages/summary/index'
import Ecom from './pages/ecom/index'
// import EasyBank from './pages/easy-bank/index2'
import EasyBank from './pages/easy-bank/index'
import LoopStudio from './pages/loop-studio/index'
import SunnySide from './pages/sunny-side/index'
import CrowdFund from './pages/crowd-funding/index'
import Testimonial from './pages/testimonial/index'
import PriceComponent from './pages/price-component/index'
import Room from './pages/room/index'
import InsuranceLanding from './pages/insurance/index'
import Todo from './pages/todo/index'
import ClipboardLanding from './pages/clipboard-landing/index'
import Launch from './pages/launch/index'
import ManageLanding from './pages/manage/index'
import About from "./pages/About";

export default function App() {
  return (
    <Router basename="/frontend">
      <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/crowd-fund" component={CrowdFund} />
        <Route exact path="/testimonial" component={Testimonial} />
        <Route exact path="/summary" component={Summary} />
        <Route exact path="/room-homepage" component={Room} />
        <Route exact path="/ecommerce" component={Ecom} />
        <Route exact path="/sunny-side" component={SunnySide} />
        <Route exact path="/easy-bank2" component={EasyBank} />
        <Route exact path="/easy-bank" component={EasyBank} />
        <Route exact path="/loop-studios" component={LoopStudio} />
        <Route exact path="/profile-card" component={ProfileCard} />
        <Route exact path="/stats-preview-card" component={StatsCard} />
        <Route exact path="/price-component" component={PriceComponent} />
        <Route exact path="/insurance-landing" component={InsuranceLanding} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/clipboard-landing" component={ClipboardLanding} />
        <Route exact path="/launch" component={Launch} />
        <Route exact path="/manage-landing" component={ManageLanding} />
        <Route exact path="/about" component={About} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}
