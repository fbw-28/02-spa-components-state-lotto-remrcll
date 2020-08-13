import React, { Component } from "react";
import Lucky from "./Lucky";
import "./style.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lotto 6/49</h1>
        <h3>Generating lucky numbers</h3>
        <Lucky />
      </div>
    );
  }
}

export default App;
