import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard'
import Wizard from './component/Wizard'
import Header from './component/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
        <Wizard />
        <Header/>
      </div>
    );
  }
}

export default App;
