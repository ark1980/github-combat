import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="App-header">
      <div className="App-logo">
        <h2><Link style={{color:"rgb(223, 222, 222)"}} to="/">GITHUB COMBAT</Link></h2>
      </div>
      <nav className="navbar">
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/battle">Battle</NavLink></li>
          <li><NavLink to="/popular">Popular</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;