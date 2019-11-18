import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Admin from './Administrator/Admin';
import Home from './NewUpdate/NewUpdate';
import { Route, Switch } from 'react-router-dom';
import Alert from './Questions/Alert';

class App extends Component {



  render() {
    return (
      <div>
        <NavBar />
        <h2 align="center">GREYHOUND STATUS MONITOR</h2>
        <div align="center"><Alert /> </div>
        <div align="center" ><Switch><Route path="/Admin" component={Admin} /></Switch> </div>
        <div align="center" ><Switch><Route path="/Home" component={Home} /></Switch> </div>
      </div>
    );
  }
}

export default App;