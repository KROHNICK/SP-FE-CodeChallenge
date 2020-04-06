import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/header";
import Products from "./components/products/products";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
        cart: []
    };
  }

  componentDidMount() {
    // axios
    //   .get("http://localhost:4000/products")
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Products products={this.props}/>
      </div>
    );
  }
  
}

export default App;
