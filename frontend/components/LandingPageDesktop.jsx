import React from 'react';
import NavBarDesktop from './NavBarDesktop.jsx';
import BecomePartnerLink from './BecomePartnerLink.jsx';
import WatchPresentationLink from './WatchPresentationLink.jsx';
import LandingVideo from './LandingVideo.jsx';
import CircleCarousel from './CircleCarousel.jsx';
import { streamingPlatforms, socialMedia } from './carouselContents.js';
import FooterDesktop from './FooterDesktop.jsx';

const LandingPageDesktop = () => {
  return (
    <div className="min-h-screen">
      <NavBarDesktop />
      
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-5xl font-semibold mb-8">
              Show your country to the whole world!
            </h1>
            <div className="flex flex-row gap-4 max-w-md">
              <div className="w-1/2">
                <BecomePartnerLink />
              </div>
              <div className="w-1/2">
                <WatchPresentationLink />
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden">
            <LandingVideo />
          </div>
        </div>
        
        <div className="mb-16 mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-center">We stream at:</h2>
          <CircleCarousel items={streamingPlatforms} />
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-center">Follow us on:</h2>
          <CircleCarousel items={socialMedia} />
        </div>
      </div>
      <FooterDesktop />
    </div>
  );
};

export default LandingPageDesktop; 