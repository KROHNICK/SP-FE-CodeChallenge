import React, { Component } from 'react';
import "./header.css";
import logo from "./0.png";
import banner from "./1.jpg";

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="top">
                <div className="top-block">
                    
                    <div className="logo-block block">
                        <img src={logo} className="logo" alt="logo" />
                        <h3>Sport Compass</h3>
                    </div>

                    <div className="block">
                        <p>Products</p>
                    </div>

                

                    <div className="block">
                        <span>
                        <i class="fas fa-user"></i>
                        </span>
                    </div>


                    <div className="block">
                        <span>
                        <i class="fas fa-shopping-cart"></i>
                        </span>
                    </div>
                    
                    
                
                </div>
                </div>
                <div className="bot-block">
                    <img src={banner} className="banner" alt="banner" />
                    <h1>Do More, Feel Better.</h1>
                </div>
                
            </div>
        );
    }
};

export default Header;