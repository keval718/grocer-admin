import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Grocers</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Users</Link>
          </li>
          <li className="navbar-item">
          <Link to="/createStore" className="nav-link">Add Stores</Link>
          </li>
         
          <li className="navbar-item">
          <Link to="/storeList" className="nav-link">Stores</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}