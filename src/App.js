import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Homepage/Home";
import "./App.css";
import Footer from "./components/pages/Footer";
import Sports from "./components/pages/Sports/Sports";
import Culturals from "./components/pages/Culturals/Culturals";
import ScrollToTop from "./components/ScrollToTop";
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sports" exact component={Sports} />
        <Route path="/culturals" exact component={Culturals} />
        <Route path="/culturals/dance" exact component={InfoSection} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
