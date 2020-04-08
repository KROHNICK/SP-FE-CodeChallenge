import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/header";
import Products from "./components/products/products";
import Basket from "./components/products/basket";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
        products: [],
        cart: []
    };
  }

  componentDidMount() {
    axios
    .get("http://localhost:4000/products")
    .then(res => {
      this.setState({ products: res.data })
    })
    .catch(err => {
      console.log(err);
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Products products={this.state.products} />
        <Basket />
      </div>
    );
  }
  
}

export default App;
