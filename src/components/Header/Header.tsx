import React from 'react';
import "./style.css";

const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <h1 className="logo">LOGO</h1>
            <ul className="nav-menu">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Service</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
            <div className="btn-group">
                <button className='btn'>Connect</button>
            </div>
        </div>
    </div>
  )
}

export default Header;