import React from 'react';

export default function BecomePartnerLink() {
  return (
    <a 
      href="https://wa.me/77714701223" 
      className="flex gap-2 font-semibold items-center justify-center bg-brand hover:bg-brandlight text-white py-3 px-6 rounded-full w-full text-center"
    >
      Become&nbsp;a&nbsp;partner
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 8.22455H15M15 8.22455L8 1.22455M15 8.22455L8 15.2245" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  );
};