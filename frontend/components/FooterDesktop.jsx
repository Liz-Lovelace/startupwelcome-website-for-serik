import React from 'react';
import FooterBody from './FooterBody.jsx';

const FooterDesktop = () => {
  return (
    <footer className="max-w-7xl mx-auto mt-6">
      <div className="bg-gray1 rounded-tl-2xl rounded-tr-2xl py-12 px-20">
        <FooterBody />
      </div>
    </footer>
  );
};

export default FooterDesktop; 