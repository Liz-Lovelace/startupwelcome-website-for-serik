import React from 'react';
import NavBarMobile from './NavBarMobile.jsx';
import FooterMobile from './FooterMobile.jsx';
import AboutBody from './AboutBody.jsx';
import JoinUsBlock from './JoinUsBlock.jsx';

const AboutPageMobile = () => {
  return (
    <>
      <div className="max-w-[390px] mx-auto px-4 pt-4">
        <NavBarMobile />
        
        <h1 className="mt-8 mb-8 text-2xl font-semibold">About</h1>
        
        <AboutBody />

        <div className="my-16">
          <JoinUsBlock />
        </div>

      </div>
      <FooterMobile />
    </>
  );
};

export default AboutPageMobile; 