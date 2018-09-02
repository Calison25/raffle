import React, { Component } from 'react';
import Raffle from "./containers/Raffle";

class App extends Component {
  render() {
    return (
      <div className="App">
          <link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css" type="text/css"></link>
          <Raffle/>
      </div>
    );
  }
}

export default App;
