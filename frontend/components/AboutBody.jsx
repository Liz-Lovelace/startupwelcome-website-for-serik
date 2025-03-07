import React from 'react';
import image2 from '../static/tv_image.jpeg';
import AboutVideo from './AboutVideo.jsx';

const AboutBody = () => {
  return (
    <>
      <AboutVideo videoUrl="https://www.youtube.com/embed/yyfmBnmm6wU" />

      <p className="font-normal mt-6"> 
        <span className="font-bold">Welcome is a global tourism promoting streaming service and television channel.</span> In 2025, Welcome is already broadcasting in 20 countries around the world and will increase its ip/smarttv/cable/satellite coverage around the globe. 
      </p>
 
      <p className="font-normal mt-6"> 
        Welcome covers tourism in 193 United Nations countries around the world allowing our viewers to make a full journey around the planet every 12 hours. 
      </p>
 
      <p className="font-normal mt-6"> 
        As a part of our basic coverage, each one of the 193 countries receives an equal and free opportunity to promote tourism in their country. Additional coverage of your country is also possible via special paid projects. 
      </p>
  
      <p className="font-normal mt-6"> 
        We encourage you to take advantage of this unique opportunity and share the best your country has to offer with the rest of the world! 
      </p>

      <img className="rounded-2xl mt-6 w-full" src={image2} alt="Tourism destination" />

      <p className="font-normal mt-6"> 
        There are many great destinations around the world and each place is unique in its own way. Welcome invites all 193 United Nations member states to send us the video of your country and we will help you share it with the rest of the world! 
      </p>
  
      <p className="font-normal mt-6 mb-6"> 
        Promoting your country has never been easier! Reach out to us and let's do this together! 
      </p>

      <AboutVideo videoUrl="https://youtu.be/qQL0Jb-ENlk?si=H1_Dkd9ksz_tS4zV" />
    </>
  );
};

export default AboutBody; 