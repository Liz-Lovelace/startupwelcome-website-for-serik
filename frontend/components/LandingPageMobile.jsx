import React from 'react';
import logoFull from '../static/logo-full.svg'
import BecomePartnerLink from './BecomePartnerLink.jsx';
import WatchPresentationLink from './WatchPresentationLink.jsx';
import CircleCarousel from './CircleCarousel.jsx';
import FooterMobile from './FooterMobile.jsx';
import LandingVideo from './LandingVideo.jsx';
import { Link } from 'react-router-dom';
import { streamingPlatforms, socialMedia } from './carouselContents.js';

const LandingPageMobile = () => {
  return (
    <>
      <div className="max-w-[390px] mx-auto px-4 pt-4">
        <Link to="/">
          <img src={logoFull} alt="Welcome logo" />
        </Link>
        <div className="mt-8">
          <LandingVideo />
        </div>

        <h1 className="my-4 text-center text-4xl font-semibold">Show your country to the whole world!</h1>
        <div className="flex flex-col gap-3">
          <BecomePartnerLink />
          <WatchPresentationLink />
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 mt-18">We stream at:</h2>
        <CircleCarousel items={streamingPlatforms} />

        <h2 className="text-2xl font-semibold mb-4 mt-18">Follow us on:</h2>
        <CircleCarousel items={socialMedia} />
      </div>
      <FooterMobile />
    </>
  );
};

export default LandingPageMobile;
