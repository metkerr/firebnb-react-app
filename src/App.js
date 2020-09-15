import React from "react";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Testing from "pages/Testing";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/testing" component={Testing}></Route>
      </Router>
    </div>
  );
}

export default App;
