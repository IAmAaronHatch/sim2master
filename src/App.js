import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import Dashboard from './component/Dashboard'
import Wizard from './component/Wizard'
import Header from './component/Header'

//routing
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/wizard' component={Wizard} />
        </Switch>
      </div>
    );
  }
}

export default App;
