import React, { Component } from 'react';
import "./header.css";
import logo from "./0.png";

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="top-block">
                    <div className="home">
                        <span>
                        <i class="fas fa-home"></i>
                        </span>
                        <a>Home</a>
                    </div>
                    
                    <img src={logo} className="logo" alt="logo" />
                    <div className="signIn">
                        <a>Sign in</a>
                        <p>|</p>
                        <span>
                        <i class="fas fa-shopping-cart"></i>
                        </span>
                    </div>
                    
                
                </div>
                <div className="bot-block">
                    <div >
                    <h3>Sport Compass</h3>
                    <h1>Buy More, For Less.</h1>
                    </div>
                    
                    <br />

                    
                    
                    
                </div>
                <div className="tabs">
                    <a>Products</a>
                    <p>|</p>
                    <a>FAQ</a>
                    <p>|</p>
                    <a>Contact Us</a>
                    </div>
            </div>
        );
    }
};

export default Header;