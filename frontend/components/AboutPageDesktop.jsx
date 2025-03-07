import React from 'react';
import NavBarDesktop from './NavBarDesktop.jsx';
import BecomePartnerLink from './BecomePartnerLink.jsx';
import FooterDesktop from './FooterDesktop.jsx';
import AboutBody from './AboutBody.jsx';
import JoinUsBlock from './JoinUsBlock.jsx';

const AboutPageDesktop = () => {
  return (
    <div className="min-h-screen">
      <NavBarDesktop />
      
      <div className="max-w-3xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-semibold mb-8 text-center">About</h1>
        
        <AboutBody />

        <div className="mt-24 mb-14">
          <JoinUsBlock isDesktop={true}/>
        </div>
      </div>
      
      <FooterDesktop />
    </div>
  );
};

export default AboutPageDesktop; 