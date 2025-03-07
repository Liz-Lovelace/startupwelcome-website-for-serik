import React from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery.jsx';

export default function CircleCarousel({ items, fullListLink }) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  return (
    <div className="w-full">
      <div className={`flex ${isDesktop ? 'justify-center' : ''} gap-6 overflow-x-auto scrollbar-hide px-4`}>
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-shrink-0">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2 border-1 border-gray1">
                <img src={item.image} alt={item.name} className="object-contain rounded-full" />
              </div>
              <p className="text-center font-medium text-sm">{item.name}</p>
            </a>
          </div>
        ))}
      </div>
      {fullListLink && (
        <div className={`flex mt-4 px-4 ${isDesktop ? 'justify-center' : 'justify-end'} ${isDesktop ? 'max-w-7xl mx-auto' : 'max-w-[390px] mx-auto'}`}>
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
} 