import React from 'react';
import NavBarDesktop from './NavBarDesktop.jsx';
import BecomePartnerLink from './BecomePartnerLink.jsx';
import FooterDesktop from './FooterDesktop.jsx';
import AboutBody from './AboutBody.jsx';

const AboutPageDesktop = () => {
  return (
    <div className="min-h-screen">
      <NavBarDesktop />
      
      <div className="max-w-3xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-semibold mb-8 text-center">About</h1>
        
        <AboutBody />

        <div className="mt-16 mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Join us!</h2>
          <p className="mb-6 text-lg"> Attract new tourists from all over the world </p>
          <div className="max-w-md mx-auto">
            <BecomePartnerLink />
          </div>
        </div>
      </div>
      
      <FooterDesktop />
    </div>
  );
};

export default AboutPageDesktop; 