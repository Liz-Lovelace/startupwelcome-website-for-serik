import React from 'react';
import NavBarDesktop from './NavBarDesktop.jsx';
import NavBarMobile from './NavBarMobile.jsx';
import FooterDesktop from './FooterDesktop.jsx';
import FooterMobile from './FooterMobile.jsx';
import { socialMedia } from './carouselContents.js';
import CircleCarousel from './CircleCarousel.jsx';
import JoinUsBlock from './JoinUsBlock.jsx';

const SocialsPage = ({ isDesktop }) => {
  return (
    <>
      <div className={isDesktop ? "max-w-[1280px] mx-auto px-8 mb-48" : "max-w-[390px] mx-auto px-4 pt-4 mb-16"}>
        {isDesktop ? <NavBarDesktop /> : <NavBarMobile />}
        
        <h1 className={`text-3xl font-semibold my-8 ${!isDesktop ? "text-left" : "text-center"}`}>Our Social media pages</h1>

        {isDesktop ? (
          <CircleCarousel items={socialMedia}/>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {socialMedia.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2 border-1 border-gray1">
                    <img src={item.image} alt={item.name} className="object-contain rounded-full" />
                  </div>
                  <p className="text-center font-medium text-sm">{item.name}</p>
                </a>
              </div>
            ))}
          </div>
        )}

        <div className={isDesktop ? "mt-48" : "mt-16"}>
          <JoinUsBlock isDesktop={isDesktop} />
        </div>
      </div>

      {isDesktop ? <FooterDesktop /> : <FooterMobile />}
    </>
  );
};

export default SocialsPage; 