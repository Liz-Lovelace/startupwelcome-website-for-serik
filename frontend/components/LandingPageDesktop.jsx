import React from 'react';
import NavBarDesktop from './NavBarDesktop.jsx';
import BecomePartnerLink from './BecomePartnerLink.jsx';
import WatchPresentationLink from './WatchPresentationLink.jsx';
import LandingVideo from './LandingVideo.jsx';
import Stream from './Stream.jsx';
import CircleCarousel from './CircleCarousel.jsx';
import PartnerCarousel from './PartnerCarousel.jsx';
import ExplainerBoxes from './ExplainerBoxes.jsx';
import { streamingPlatforms, socialMedia } from './carouselContents.js';
import { partners } from '../staticData.js';
import FooterDesktop from './FooterDesktop.jsx';
import JoinUsBlock from './JoinUsBlock.jsx';

const LandingPageDesktop = () => {
  // Order partners by specified country codes
  const orderedCountryCodes = ['FR', 'ES', 'US', 'IT', 'TR', 'MX', 'GB', 'DE', 'GR', 'AT'];
  
  // Create ordered partners array
  const orderedPartners = orderedCountryCodes
    .map(code => partners.find(partner => partner.countryCode === code))
    .filter(Boolean); // Remove any undefined entries (in case a country code doesn't match)

  return (
    <div className="min-h-screen">
      <NavBarDesktop />
      
      <div className="max-w-7xl mx-auto px-8 pt-12">
        <div className="grid grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-5xl font-semibold mb-4">
              Show your country to&nbsp;the whole world!
            </h1>
            <p className="font-normal text-gray2 mb-6">Welcome is a global tourism promoting streaming service and&nbsp;television&nbsp;channel.</p>
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
      </div>
        
      <div className="mb-8 mt-48 text-center">
        <h2 className="text-3xl font-semibold mb-4">We stream at:</h2>
        <CircleCarousel items={streamingPlatforms}/>
      </div>
          
      <div className="mb-48 max-w-4xl mx-auto px-8 rounded-2xl overflow-hidden">
        <Stream />
      </div>

      <div className="mb-48 text-center">
        <h2 className="text-3xl font-semibold mb-4">We work with UN countries:</h2>
        <PartnerCarousel partners={orderedPartners} fullListLink="/partners" />
      </div>

      <div className="mb-48 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Welcome</h2>
        <div className="max-w-7xl mx-auto px-8">
          <ExplainerBoxes />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mb-48">
        <JoinUsBlock isDesktop={true}/>
      </div>
        
      <div className="mb-48 text-center">
        <h2 className="text-3xl font-semibold mb-4">Follow us on:</h2>
        <CircleCarousel items={socialMedia}/>
      </div>
      
      <FooterDesktop />
    </div>
  );
};

export default LandingPageDesktop; 