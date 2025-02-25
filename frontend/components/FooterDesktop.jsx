import React from 'react';
import WelcomeLogo from './WelcomeLogo.jsx';

const FooterMobile = () => {

  return (
    <footer className="max-w-[1280px] mx-auto mt-6">
      <div className="bg-gray1 rounded-tl-2xl rounded-tr-2xl py-12 px-20">
        <div className="mt-6 mb-4">
          <WelcomeLogo />
        </div>
        
        <div className="mb-4">
          <a href="mailto:info@welcomestream.com" className="text-black font-bold underline block mb-4">
            info@welcomestream.com
          </a>
          <a href="tel:+77017226234" className="mb-8 text-black font-bold underline block">
            +7 701 722 6234
          </a>
        </div>
        
        <div className="text-gray2 text-sm">
          <p>© 2025 Welcome. All rights reserved.</p>
          <a href="#" className="block">Terms and conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile; 