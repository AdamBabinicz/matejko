import React from "react";
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./pages/Start";
import Zyciorys from "./pages/Zyciorys";
import Malarstwo from "./pages/Malarstwo";
// import AboutSection from "./components/AboutSection";
import Kontakt from "./pages/Kontakt";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/zyciorys">
            <Zyciorys />
          </Route>
          <Route path="/malarstwo">
            <Malarstwo />
          </Route>
          <Route path="/kontakt">
            <Kontakt />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
