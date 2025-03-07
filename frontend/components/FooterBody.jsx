import React, { useState } from 'react';
import WelcomeLogo from './WelcomeLogo.jsx';
import Toast from './Toast.jsx';
import { Link, useNavigate } from 'react-router-dom';

const FooterBody = () => {
  const navigate = useNavigate();
  const [toast, setToast] = useState({
    visible: false,
    message: ''
  });

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setToast({
          visible: true,
          message: `${type} copied to clipboard`
        });
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        setToast({
          visible: true,
          message: 'Failed to copy to&nbsp;clipboard'
        });
      });
  };

  const closeToast = () => {
    setToast({ ...toast, visible: false });
  };

  const handleNavigation = (path, e) => {
    e.preventDefault(); // Prevent default link behavior
    
    navigate(path);
    
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <>
      <div className="mb-4">
        <a 
          href="/" 
          onClick={(e) => handleNavigation('/', e)}
          className="inline-block"
        >
          <WelcomeLogo />
        </a>
      </div>
      
      <div className="mb-4">
        <button 
          onClick={() => copyToClipboard('info@welcomestream.com', 'Email')}
          className="text-black font-bold block mb-4 cursor-pointer hover:text-gray-700"
        >
          info@welcomestream.com
        </button>
        <button 
          onClick={() => copyToClipboard('+7 771 470 1223', 'Phone')}
          className="text-black font-bold block mb-4 cursor-pointer hover:text-gray-700"
        >
          +7 771 470 1223
        </button>
      </div>

      <div className="mb-6 mt-12">
        <div className="flex flex-col flex-wrap gap-6 mb-8">
          <a 
            href="/about" 
            className="text-black font-semibold hover:text-brand transition-colors"
            onClick={(e) => handleNavigation('/about', e)}
          >
            About
          </a>
          <a 
            href="/partners" 
            className="text-black font-semibold hover:text-brand transition-colors"
            onClick={(e) => handleNavigation('/partners', e)}
          >
            Partners
          </a>
          <a 
            href="/streaming-platforms" 
            className="text-black font-semibold hover:text-brand transition-colors"
            onClick={(e) => handleNavigation('/streaming-platforms', e)}
          >
            Streaming
          </a>
          <a 
            href="/socials" 
            className="text-black font-semibold hover:text-brand transition-colors"
            onClick={(e) => handleNavigation('/socials', e)}
          >
            Socials
          </a>
        </div>
      </div>
      
      
      <div className="text-gray2 text-sm">
        <p>© 2025 Welcome. All rights reserved.</p>
      </div>

      <Toast 
        message={toast.message} 
        isVisible={toast.visible} 
        onClose={closeToast} 
      />
    </>
  );
};

export default FooterBody; 