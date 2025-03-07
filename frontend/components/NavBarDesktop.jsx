import React from 'react';
import { Link } from 'react-router-dom';
import logoFull from '../static/logo-full.svg';

const NavBarDesktop = () => {
  const scrollToBottom = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-8 items-start">
      <Link to="/">
        <img src={logoFull} alt="Welcome logo" className="h-16" />
      </Link>
      
      <div className="flex gap-8 mt-2">
        <Link to="/about" className="font-medium hover:text-brand transition-colors">
          About
        </Link>
        <a 
          href="#" 
          onClick={scrollToBottom} 
          className="font-medium hover:text-brand transition-colors cursor-pointer"
        >
          Contacts
        </a>
        <Link to="/partners" className="font-medium hover:text-brand transition-colors">
          Partners
        </Link>
        <Link to="/streaming-platforms" className="font-medium hover:text-brand transition-colors">
          Streaming
        </Link>
        <Link to="/socials" className="font-medium hover:text-brand transition-colors">
          Socials
        </Link>
      </div>
    </nav>
  );
};

export default NavBarDesktop; 