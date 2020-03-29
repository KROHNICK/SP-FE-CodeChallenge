import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/header";
import Dashboard from "./components/dashboard/dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    );
  }
  
}

export default App;
