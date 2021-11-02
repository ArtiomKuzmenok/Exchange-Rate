import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss'

const Navbar = () => {
  return ( 
    <div className="navbar">      
      <Link to="/exchange" className="navbar__item">Exchange</Link>
      <Link to="/settings" className="navbar__item">Settings</Link>
    </div>
   );
}
 
export default Navbar;