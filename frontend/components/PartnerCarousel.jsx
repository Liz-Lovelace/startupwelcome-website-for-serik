import React, { useRef } from 'react';
import PartnerCard from './PartnerCard.jsx';
import useMediaQuery from '../hooks/useMediaQuery.jsx';
import { Link } from 'react-router-dom';

const PartnerCarousel = ({ partners, fullListLink }) => {
  // No limit parameter - we'll use all partners passed to the component
  console.log(partners)
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const cardContext = isDesktop ? 'carousel-desktop' : 'carousel-mobile';
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto scrollbar-hide pt-4" ref={scrollContainerRef}>
        <div className="flex gap-4 px-4 pb-2">
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0">
              <PartnerCard
                countryCode={partner.countryCode}
                country={partner.country}
                partnerName={partner.partnerName}
                ministry={partner.ministry}
                partnerWebsite={partner.partnerWebsite}
                ministryWebsite={partner.ministryWebsite}
                context={cardContext}
              />
            </div>
          ))}
        </div>
      </div>
      {fullListLink && (
        <div className={`flex mt-4 px-4 ${isDesktop ? 'justify-center' : 'justify-end'} ${isDesktop ? 'max-w-7xl mx-auto' : 'max-w-[390px] mx-auto'}`}>
          {isDesktop && (
            <div className="flex gap-2 mr-4">
              <button onClick={scrollLeft} className="focus:outline-none cursor-pointer">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0555 16.6597L8.05554 12.6597M8.05554 12.6597L12.0555 8.65967M8.05554 12.6597H16.0555M2.05554 12.6597C2.05554 18.1825 6.53269 22.6597 12.0555 22.6597C17.5784 22.6597 22.0555 18.1825 22.0555 12.6597C22.0555 7.13682 17.5784 2.65967 12.0555 2.65967C6.53269 2.65967 2.05554 7.13682 2.05554 12.6597Z" stroke="#FD6A05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button onClick={scrollRight} className="focus:outline-none cursor-pointer">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0555 16.6597L16.0555 12.6597M16.0555 12.6597L12.0555 8.65967M16.0555 12.6597H8.05554M22.0555 12.6597C22.0555 18.1825 17.5784 22.6597 12.0555 22.6597C6.53269 22.6597 2.05554 18.1825 2.05554 12.6597C2.05554 7.13682 6.53269 2.65967 12.0555 2.65967C17.5784 2.65967 22.0555 7.13682 22.0555 12.6597Z" stroke="#FD6A05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          )}
          <Link to={fullListLink} className="text-sm text-brand font-semibold hover:underline flex items-center">
            Full list
            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
              <path d="M7.39496 3.78858L1.5458 0.498428C0.879199 0.123464 0.055542 0.605177 0.055542 1.37V7.95031C0.055542 8.71514 0.8792 9.19685 1.5458 8.82188L7.39496 5.53173C8.07461 5.14943 8.07461 4.17088 7.39496 3.78858Z" fill="#FD6A05"/>
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PartnerCarousel; 