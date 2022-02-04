import React from "react";
import "./NavBar.css"
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
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Python</a></li>
                    <li><a href='/'>JavaScript</a></li>
                    <li><a href='/'>MachineLearning</a></li>
                </ul>
            </nav>
        </div>
    );
}