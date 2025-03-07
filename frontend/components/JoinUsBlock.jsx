import React from 'react';
import BecomePartnerLink from './BecomePartnerLink.jsx';

const JoinUsBlock = ({ isDesktop = false }) => {
  return (
    <div className={`max-w-[390px] ${isDesktop ? 'mx-auto' : ''}`}>
      <h2 className={`${ isDesktop? 'text-3xl' : 'text-2xl'} font-semibold mb-2 mt-12 ${isDesktop ? 'text-center' : ''}`}>Join us!</h2>
      <p className={`mb-4 font-light ${isDesktop ? 'text-center' : ''}`}>Attract new tourists from all over the world</p>
      <BecomePartnerLink />
    </div>
  );
};

export default JoinUsBlock; 