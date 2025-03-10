import React, { useState, useEffect } from 'react';
import NavBarDesktop from './NavBarDesktop.jsx';
import NavBarMobile from './NavBarMobile.jsx';
import FooterDesktop from './FooterDesktop.jsx';
import FooterMobile from './FooterMobile.jsx';
import PartnerCard from './PartnerCard.jsx';
import { partners } from '../staticData.js';
import JoinUsBlock from './JoinUsBlock.jsx';

const PartnersPage = ({ isDesktop }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Add scroll event listener to show/hide the scroll button
  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Filter partners based on search term
  const filteredPartners = partners.filter(partner => {
    const searchLower = searchTerm.toLowerCase();
    return (
      partner.country.toLowerCase().includes(searchLower) ||
      partner.partnerName.toLowerCase().includes(searchLower) ||
      partner.ministry.toLowerCase().includes(searchLower)
    );
  });

  // Function to distribute partners into columns
  const distributePartners = (partners, numColumns) => {
    const columns = Array(numColumns).fill().map(() => []);
    
    partners.forEach((partner, index) => {
      const columnIndex = index % numColumns;
      columns[columnIndex].push(partner);
    });
    
    return columns;
  };

  // Get 4 columns for desktop, 2 for mobile
  const columns = distributePartners(filteredPartners, isDesktop ? 4 : 2);

  return (
    <>
      <div className={isDesktop ? "max-w-[1280px] mx-auto px-8 mb-20" : "max-w-[390px] mx-auto px-4 pt-4 mb-16"}>
        {isDesktop ? <NavBarDesktop /> : <NavBarMobile />}
        
        <h1 className={`text-3xl font-semibold my-8 ${!isDesktop ? "text-left" : "text-center"}`}>All our {partners.length} Partners</h1>
        
        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <div className={`${isDesktop ? 'w-1/2' : 'w-full'} relative flex items-center bg-gray-100 rounded-full`}>
            <input
              type="text"
              placeholder="Search for country or agency"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-4 pl-8 pr-12 bg-gray-100 rounded-full focus:outline-none"
            />
            <div className="absolute right-6">
              {searchTerm ? (
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              ) : (
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.76 13.4945L20.49 19.2246L19 20.7146L13.27 14.9845C12.2 15.7546 10.91 16.2246 9.5 16.2246C5.91 16.2246 3 13.3145 3 9.72455C3 6.13455 5.91 3.22455 9.5 3.22455C13.09 3.22455 16 6.13455 16 9.72455C16 11.1345 15.53 12.4246 14.76 13.4945ZM9.5 5.22455C7.01 5.22455 5 7.23455 5 9.72455C5 12.2145 7.01 14.2245 9.5 14.2245C11.99 14.2245 14 12.2145 14 9.72455C14 7.23455 11.99 5.22455 9.5 5.22455Z" fill="#4D4639"/>
                </svg>
              )}
            </div>
          </div>
        </div>
        
        {filteredPartners.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No partners found matching "{searchTerm}"
          </div>
        ) : (
          <div className="flex justify-center gap-3">
            {columns.map((column, colIndex) => (
              <div 
                key={colIndex} 
                className={`${isDesktop ? 'w-1/4' : 'w-1/2'} flex flex-col gap-3`}
              >
                {column.map((partner, index) => (
                  <PartnerCard
                    key={index}
                    countryCode={partner.countryCode}
                    country={partner.country}
                    partnerName={partner.partnerName}
                    ministry={partner.ministry}
                    partnerWebsite={partner.partnerWebsite}
                    ministryWebsite={partner.ministryWebsite}
                    context={isDesktop ? "grid" : "carousel-grid-mobile"}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
        <JoinUsBlock isDesktop={isDesktop} />
      </div>
      
      {isDesktop ? <FooterDesktop /> : <FooterMobile />}
      
      {/* Scroll to top button */}
      {showScrollButton && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-brand hover:bg-brandlight text-white flex items-center justify-center shadow-md transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
      )}
    </>
  );
};

export default PartnersPage; 