import React from 'react';
import { render } from 'react-dom';

const Footer = (props) => {
    
    return (
        <div>
        <nav className="navbar  navbar-expand-sm navbar-dark navbar-custom">
            <ul className="navbar-nav flex-row mb-2 text-right">
                <li className="nav-item active mx-3">
                    <a className="nav-link" href="#">Privacy</a>
                </li>
                <li className="nav-item active mx-3">
                    <a className="nav-link" href="#">Accesibility</a>
                </li>
                <li className="nav-item active mx-3">
                    <a className="nav-link" href="#">Terms of use</a>
                </li>
            </ul>
        </nav>
        </div>
    );
    
}

export default Footer;