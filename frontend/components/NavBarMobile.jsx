import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoFull from '../static/logo-full.svg';
import BecomePartnerLink from './BecomePartnerLink.jsx';

const NavBarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Add effect to control body scroll when menu opens/closes
  useEffect(() => {
    if (menuOpen) {
      // Prevent scrolling on body when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const scrollToBottom = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="mb-4 relative z-50">
      <div className="flex justify-between items-start">
        <Link to="/" onClick={closeMenu}>
          <img src={logoFull} alt="Welcome logo" />
        </Link>
        
        <button 
          className="focus:outline-none relative pt-1 pr-8" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`absolute transition-opacity duration-150 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}>
            <svg width="30" height="30" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.3374 10.6626H28.3374M2.3374 1.99591H28.3374M2.3374 19.3292H28.3374" stroke="#FD6A05" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className={`absolute transition-opacity duration-150 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 2.44922L2 28.4492M2 2.44922L28 28.4492" stroke="#FD6A05" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
      
      {/* Full-screen menu overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-opacity duration-150 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '80px' }} // Adjust based on your navbar height
      >
        <div className=" max-w-[390px] mx-auto flex flex-col items-start justify-start h-full gap-6 pt-6 px-4">
          <Link 
            to="/about" 
            className="font-semibold hover:text-brand transition-colors text-2xl"
            onClick={closeMenu}
          >
            About
          </Link>
          <a 
            href="#" 
            onClick={scrollToBottom} 
            className="font-semibold hover:text-brand transition-colors text-2xl"
          >
            Contacts
          </a>
          <Link 
            to="/partners" 
            className="font-semibold hover:text-brand transition-colors text-2xl"
            onClick={closeMenu}
          >
            Partners
          </Link>
          <Link 
            to="/streaming-platforms" 
            className="font-semibold hover:text-brand transition-colors text-2xl"
            onClick={closeMenu}
          >
            Streaming platforms
          </Link>
          <Link 
            to="/socials" 
            className="font-semibold hover:text-brand transition-colors text-2xl"
            onClick={closeMenu}
          >
            Socials
          </Link>
          <div className="mt-2 w-[250px]">
            <BecomePartnerLink />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarMobile;