import React from 'react';
const iconImports = import.meta.glob('../static/logos/*.svg', { eager: true });

console.log('iconImports', iconImports);

let getIcon = (icon) => {
  console.log(`../static/logos/${icon}`, iconImports[`../static/logos/${icon}`]);
  return iconImports[`../static/logos/${icon}`]?.default || null;
}

const ExplainerBox = ({ title, children, icon }) => {
  return (
    <div className="rounded-2xl pt-[20px] pb-[24px] px-4 max-w-[390px]">
      <img src={getIcon(icon)} alt={title} className="w-[36px] h-[36px] mx-auto mb-1" />
      <h3 className="text-lg text-center font-semibold mb-1">{title}</h3>
      <p className="font-normal text-center text-gray2">{children}</p>
    </div>
  );
};

const ExplainerBoxes = () => {
  return (
    <div className="flex flex-wrap gap-[8px] justify-center text-left">
      <ExplainerBox title="Tourism Focus" icon="plane.svg">
        Welcome covers tourism in 193 United Nations countries around the world allowing our viewers to make a full journey around the planet every 12 hours.
      </ExplainerBox>
      
      <ExplainerBox title="Free and equal promotion" icon="career-growth.svg">
        As a part of our basic coverage, each one of the 193 countries receives an equal and free opportunity to promote tourism in their country.
      </ExplainerBox>
      
      <ExplainerBox title="Paid Projects" icon="usd-circle.svg">
        Additional coverage of your country is also possible via special paid projects.
      </ExplainerBox>
      
      <ExplainerBox title="Video Content" icon="clapperboard-play.svg">
        Welcome invites all United Nations member states to send us the video of your country and we will help you share it with the rest of the world!
      </ExplainerBox>
      
      <ExplainerBox title="QR code" icon="qr.svg">
        When we show a video about your country, viewers see your website and can scan a QR code to visit it.
      </ExplainerBox>
      
      <ExplainerBox title="Partnership" icon="people-network-partner.svg">
        Take this chance to showcase your country's best to the world!
      </ExplainerBox>
    </div>
  );
};

export default ExplainerBoxes; 