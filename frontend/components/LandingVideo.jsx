import React from 'react';
import landingVideo from '../static/landing-video.mp4';

const LandingVideo = () => {

  return (
    <div className="rounded-2xl overflow-hidden">
      <video 
        className="w-full h-auto"
        src={landingVideo}
        muted
        autoPlay
        playsInline
        loop
        controls={false}
      />
    </div>
  );
};

export default LandingVideo; 