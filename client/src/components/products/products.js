import React, { Component } from "react";
import "./products.css";
import Product from "./product";
import axios from "axios";

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
      }

    componentDidMount() {
        axios
      .get("http://localhost:4000/products")
      .then(res => {
        console.log(res.data);
        this.setState({ products: res.data })
      })
      .catch(err => {
        console.log(err);
      })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                {this.state.products.map(p => {
                    return (
                        <div>
                            <Product 
                            id={p.id}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
    
};

export default Products