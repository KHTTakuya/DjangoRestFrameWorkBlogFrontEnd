import React from "react";
import "./NavBar.css"
import { Link } from 'react-router-dom'
import Logo from "./main-logo-blog.png"

export const NavBar = () => {
    return (
        <div className="main-navbar">
            <div className="navbar-top">
                <img src={Logo} alt="main-logo"/>
                <p>Python,JavaScriptを中心に備忘録としてつけておくサイト</p>
            </div>
            <nav className="navbar-site">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category=1">Python</Link></li>
                    <li><Link to="/category=2">JavaScript</Link></li>
                    <li><Link to="/category=3">MachineLearning</Link></li>
                </ul>
            </nav>
        </div>
    );
}