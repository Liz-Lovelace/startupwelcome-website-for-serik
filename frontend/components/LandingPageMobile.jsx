import React from 'react';
import logoFull from '../static/logo-full.svg'
import image1 from '../static/image1.jpeg'
import BecomePartnerLink from './BecomePartnerLink.jsx';
import WatchPresentationLink from './WatchPresentationLink.jsx';
import CircleCarousel from './CircleCarousel.jsx';

import megogo from '../static/logos/Streamings/Megogo.png';
import okko from '../static/logos/Streamings/beetv.png';
import netflix from '../static/logos/Streamings/beetv.png';
import youtube from '../static/logos/Streamings/beetv.png';
import megogoTv from '../static/logos/Streamings/beetv.png';
import instagram from '../static/logos/Socials/Instagram.png';
import telegram from '../static/logos/Socials/Telegram.png';
import facebook from '../static/logos/Socials/Facebook.png';

const LandingPageMobile = () => {
  const streamingPlatforms = [
    { name: 'Megogo', image: megogo, link: '#' },
    { name: 'Okko', image: okko, link: '#' },
    { name: 'Netflix', image: netflix, link: '#' },
    { name: 'Youtube', image: youtube, link: '#' },
    { name: 'Megogo', image: megogoTv, link: '#' },
  ];

  const socialMedia = [
    { name: 'Instagram', image: instagram, link: '#' },
    { name: 'Telegram', image: telegram, link: '#' },
    { name: 'Facebook', image: facebook, link: '#' },
    { name: 'Youtube', image: youtube, link: '#' },
    { name: 'Megogo', image: megogoTv, link: '#' },
  ];

  return (
    <div className="max-w-[390px] mx-auto px-4 pt-4">
      <img src={logoFull} alt="Welcome logo" />
      <img className="rounded-2xl mt-8" src={image1} />
      <h1 className="my-4 text-center text-4xl font-semibold">Show your country to the whole world!</h1>
      <div className="flex flex-col gap-3">
        <BecomePartnerLink />
        <WatchPresentationLink />
      </div>
      
      <h2 className="text-2xl font-semibold mb-4 mt-12">We stream at:</h2>
      <CircleCarousel items={streamingPlatforms} />

      <h2 className="text-2xl font-semibold mb-2 mt-12">Join us!</h2>
      <p className="mb-4 font-light"> Attract new tourists from all over the world </p>
      <BecomePartnerLink />

      <h2 className="text-2xl font-semibold mb-4 mt-12">Or follow us on:</h2>
      <CircleCarousel items={socialMedia} />
    </div>
  );
};

export default LandingPageMobile;
