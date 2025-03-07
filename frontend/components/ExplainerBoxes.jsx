import React from 'react';

const ExplainerBox = ({ title, children }) => {
  return (
    <div className="bg-gray1 rounded-2xl py-3 px-4 max-w-[390px]">
      <h3 className="text-lg text-brand font-semibold mb-2">{title}</h3>
      <p className="font-normal">{children}</p>
    </div>
  );
};

const ExplainerBoxes = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-center text-left">
      <ExplainerBox title="Tourism Focus">
        Welcome covers tourism in 193 United Nations countries around the world allowing our viewers to make a full journey around the planet every 12 hours.
      </ExplainerBox>
      
      <ExplainerBox title="Free and equal promotion">
        As a part of our basic coverage, each one of the 193 countries receives an equal and free opportunity to promote tourism in their country.
      </ExplainerBox>
      
      <ExplainerBox title="Paid Projects">
        Additional coverage of your country is also possible via special paid projects.
      </ExplainerBox>
      
      <ExplainerBox title="Video Content">
        Welcome invites all United Nations member states to send us the video of your country and we will help you share it with the rest of the world!
      </ExplainerBox>
      
      <ExplainerBox title="QR code">
        When we show a video about your country, viewers see your website and can scan a QR code to visit it.
      </ExplainerBox>
      
      <ExplainerBox title="Partnership">
        Take this chance to showcase your country's best to the world!
      </ExplainerBox>
    </div>
  );
};

export default ExplainerBoxes; 