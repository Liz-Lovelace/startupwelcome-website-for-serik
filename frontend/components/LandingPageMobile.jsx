import React from 'react';
import NavBarMobile from './NavBarMobile.jsx';
import BecomePartnerLink from './BecomePartnerLink.jsx';
import WatchPresentationLink from './WatchPresentationLink.jsx';
import CircleCarousel from './CircleCarousel.jsx';
import FooterMobile from './FooterMobile.jsx';
import LandingVideo from './LandingVideo.jsx';
import PartnerCarousel from './PartnerCarousel.jsx';
import ExplainerBoxes from './ExplainerBoxes.jsx';
import { streamingPlatforms, socialMedia } from './carouselContents.js';
import { partners } from '../staticData.js';
import JoinUsBlock from './JoinUsBlock.jsx';

const LandingPageMobile = () => {
  // Order partners by specified country codes
  const orderedCountryCodes = ['FR', 'ES', 'US', 'IT', 'TR', 'MX', 'GB', 'DE', 'GR', 'AT'];
  
  // Create ordered partners array
  const orderedPartners = orderedCountryCodes
    .map(code => partners.find(partner => partner.countryCode === code))
    .filter(Boolean); // Remove any undefined entries (in case a country code doesn't match)

  return (
    <>
      <div className="max-w-[390px] mx-auto px-4 pt-4">
        <NavBarMobile />
        
        <div className="mt-8">
          <LandingVideo />
        </div>

        <h1 className="my-4 text-center text-4xl font-semibold">Show your country to the whole world!</h1>
        <p className="font-normal text-gray2 text-center mb-6">Welcome is a global tourism promoting streaming service and television channel.</p>
        <div className="flex flex-col gap-3">
          <BecomePartnerLink />
          <WatchPresentationLink />
        </div>
      </div>
        
      <div className="mt-16">
        <div className="px-4 max-w-[390px] mx-auto">
          <h2 className="text-2xl font-semibold mb-4">We stream at:</h2>
        </div>
        <CircleCarousel items={streamingPlatforms} fullListLink="/streaming-platforms" />
      </div>

      <div className="mt-16">
        <div className="px-4 max-w-[390px] mx-auto">
          <h2 className="text-2xl font-semibold mb-4">We work with UN countries:</h2>
        </div>
        <PartnerCarousel partners={orderedPartners} fullListLink="/partners" />
      </div>

      <div className="mt-16">
        <div className="px-4 max-w-[390px] mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Welcome</h2>
          <ExplainerBoxes />
        </div>
      </div>

      <div className="max-w-[390px] mx-auto px-4 mt-16">
        <JoinUsBlock />
      </div>

      <div className="mt-16 mb-16">
        <div className="px-4 max-w-[390px] mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Follow us on:</h2>
        </div>
        <CircleCarousel items={socialMedia} fullListLink="/socials" />
      </div>
      
      <FooterMobile />
    </>
  );
};

export default LandingPageMobile;
