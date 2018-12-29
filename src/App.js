import React, { Component } from "react";
import { Button } from "reactstrap";

// Import Components helpers..
import Header from "./components/UI/Header";

class App extends Component {
  primary = "btn btn-primary";
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mt-3">
        <Button color="primary" size="sm">Primary</Button>
        </div>
      </div>
    );
  }
}

export default App;
