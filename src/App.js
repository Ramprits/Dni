import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Import Components helpers..
import Header from "./components/UI/Header";
import Fruits from "./components/fruits";
class App extends Component {
  primary = "btn btn-primary";
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container mt-3">
            <Route exact path="/" component={Fruits} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
