import React, { Component } from "react";
import "./products.css";
import Product from "./product";
import axios from "axios";
import util from "../../util";

class Products extends Component {
    render() {
        const productItems = this.props.products.map(p => (
            <div className="prodCard">
                <a href={`#${p.id}`}>
                    <img src={`/products/${p.id}.jpg`} alt={p.title} />
                    <p>{p.title}</p>
                </a>
                <div>
                    <b>{util.formatCurrency(p.price)}</b>
                    <button>Add To Cart</button>
                </div>
            </div>
        )
        )

        return (
            <div className="prodBox">
                {productItems}
            </div>
        );
    }
    
};

export default Products;