import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/header";
import jacket from "./1.jpg";
import shorts from "./2.jpg";
import shoes from "./3.jpg";
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
    console.log(this.state);
  }

  addToCart = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/cart", this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
      this.setState({
        name: ""
      });
  }




  render() {
    return (
      <div className="App">
        <Header />
        <div className="dashboard">
                <div className="card">
                    <img src={jacket} className="prod" alt="" />
                    <div className="sub">
                        <p>$PRICE</p>
                        <button onClick={this.addToCart} >Add to cart</button>
                    </div>
                </div>

                <div className="card">
                    <img src={shorts} className="prod" alt="" />
                    <div className="sub">
                        <p>$PRICE</p>
                        <button>Add to cart</button>
                    </div>
                </div>

                <div className="card">
                    <img src={shoes} className="prod" alt="" />
                    <div className="sub">
                        <p>$PRICE</p>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
      </div>
    );
  }
  
}

export default App;
