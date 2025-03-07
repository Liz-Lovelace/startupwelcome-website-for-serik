import React from 'react';
import FooterBody from './FooterBody.jsx';

const FooterMobile = () => {
  return (
    <footer className="max-w-[580px] mx-auto mt-6">
      <div className="bg-gray1 rounded-tl-2xl rounded-tr-2xl p-6">
        <FooterBody />
      </div>
    </footer>
  );
};

export default FooterMobile; 