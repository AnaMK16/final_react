import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css'; 

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/books">Books</Link>
    </nav>
  </header>
);

export default Header;

