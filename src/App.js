import React, { Component } from 'react';
import RaffleContainer from "./components/RaffleContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <head>
              <link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css" type="text/css"></link>
          </head>
          <RaffleContainer/>
      </div>
    );
  }
}

export default App;
