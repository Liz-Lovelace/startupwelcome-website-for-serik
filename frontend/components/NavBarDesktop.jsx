import React from 'react';
import { Link } from 'react-router-dom';
import logoFull from '../static/logo-full.svg';

const NavBarDesktop = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8">
      <Link to="/">
        <img src={logoFull} alt="Welcome logo" className="h-16" />
      </Link>
      
      <div className="flex gap-8">
        <Link to="/" className="font-medium hover:text-brand transition-colors">
          Home
        </Link>
        <Link to="/about" className="font-medium hover:text-brand transition-colors">
          About
        </Link>
      </div>
    </nav>
  );
};

export default NavBarDesktop; 