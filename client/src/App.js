import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/header";
import jacket from "./1.jpg";
import shorts from "./2.jpg";
import shoes from "./3.jpg";

class App extends Component {
  constructor() {
    super();
    this.state = {
        cart: []
    };
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
                        <button>Add to cart</button>
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
