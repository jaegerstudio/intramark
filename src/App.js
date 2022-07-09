import * as PropTypes from "prop-types";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Privacy from "./components/privacy/Privacy";
import MarkPortal from "./components/mark-portal/MarkPortal";
import TermsOfUse from "./components/terms-of-use/TermsOfUse";

Route.propTypes = {
  component: PropTypes.any,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

class App extends Component {

  render() {
    return (
      <section className="App">
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/faq" component={FAQ}/>
          <Route exact path="/privacy" component={Privacy}/>
          <Route exact path="/terms-of-use" component={TermsOfUse}/>
          <Route exact path="/intramark" component={MarkPortal}/>
        </Switch>
        <Footer />
      </section>
    );
  }
}

export default App;
