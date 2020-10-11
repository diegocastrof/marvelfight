import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
  <nav>
    <div className="container">
      <NavLink to="/" className="brand-title" activeClassName="navlink-active" exact={true}>MarvelFight!</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down nav-links">
        <li><NavLink to="/" activeClassName="navlink-active" exact={true}>Dashboard</NavLink></li>
        <li><NavLink to="/fight" activeClassName="navlink-active">Fight!</NavLink></li>
      </ul>
    </div>  
  </nav>
)

export default Header