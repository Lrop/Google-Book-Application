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
        </nav>
    );
}

export default NavBar;