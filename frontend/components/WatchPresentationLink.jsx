import React from 'react';
import { Link } from 'react-router-dom';

export default function WatchPresentationLink() {
  return (
    <Link 
      to="/about" 
      className="flex gap-2 font-semibold items-center justify-center bg-white text-black py-3 px-6 rounded-full w-full text-center border border-black"
    >
      Watch&nbsp;presentation
      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99984 17.5579C14.6022 17.5579 18.3332 13.8269 18.3332 9.22455C18.3332 4.62217 14.6022 0.891212 9.99984 0.891212C5.39746 0.891212 1.6665 4.62217 1.6665 9.22455C1.6665 13.8269 5.39746 17.5579 9.99984 17.5579Z" stroke="#0A0A0A" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.33317 5.89121L13.3332 9.22455L8.33317 12.5579V5.89121Z" stroke="#0A0A0A" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </Link>
  );
}; 