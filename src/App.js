import React from "react";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Testing from "pages/Testing";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/properties/:id" component={DetailsPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/testing" component={Testing} />
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
