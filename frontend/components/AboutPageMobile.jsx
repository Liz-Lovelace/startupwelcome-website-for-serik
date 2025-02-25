import React from 'react';
import logoFull from '../static/logo-full.svg'
import image1 from '../static/image1.jpeg'
import image2 from '../static/image2.jpeg'
import BecomePartnerLink from './BecomePartnerLink.jsx';
import WatchPresentationLink from './WatchPresentationLink.jsx';
import FooterMobile from './FooterMobile.jsx';
import AboutVideo from './AboutVideo.jsx';
import AboutBody from './AboutBody.jsx';
import { Link } from 'react-router-dom';

const AboutPageMobile = () => {
  return (
    <>
      <div className="max-w-[390px] mx-auto px-4 pt-4">
        <Link to="/">
          <img src={logoFull} alt="Welcome logo" />
        </Link>
        
        <h1 className="mt-8 mb-6 text-2xl font-semibold">About</h1>
        
        <AboutBody />

        <h2 className="text-2xl font-semibold mb-2 mt-12">Join us!</h2>
        <p className="mb-4 font-light"> Attract new tourists from all over the world </p>
        <BecomePartnerLink />

      </div>
      <FooterMobile />
    </>
  );
};

export default AboutPageMobile; 