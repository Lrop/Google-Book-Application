<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';


import "./navbar.css";

function NavBar() {
    return (

        <nav className="nav-container">
            <li className="header"><a className="nav-link" href="https://books.google.com/" target="_blank" rel="noopener noreferrer">Google Books</a></li>
            <ul className="nav-list">

                
                <li classNam="button-one"><Link to="/" className="nav-link">Search</Link></li>
                <br></br>
                <li className="button-two"><Link to="/saved" className="nav-link">Saved</Link></li>
            </ul>
=======
import React from "react";
import "./navbar.css";


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Google Book Search</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">Search Books</button></a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/saved"><button type="button" className="btn btn-warning text-white">Saved Books</button></a>
                    </li>
                </ul>
            </div>
>>>>>>> 7e7382eebc49543efa45b44a81fa47332756affc
        </nav>
    );
}

export default Nav;