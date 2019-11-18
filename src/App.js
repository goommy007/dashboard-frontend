import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Alert from './Alerts/Alert';


class App extends Component {



  render() {
    return (
      <div>
        <h2 align="center">GREYHOUND STATUS MONITOR</h2>
        <div align="center"><Alert /> </div>
      </div>
    );
  }
}

export default App;