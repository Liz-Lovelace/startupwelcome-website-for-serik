import React, { Suspense } from 'react';
import landingVideo from '../static/landing-video.mp4';
import landingImage from '../static/image1.jpeg';
import SuspenseVideo from './SuspenseVideo.jsx';

const VideoFallback = () => (
  <img 
    src={landingImage} 
    alt="Video loading" 
    className="w-full h-auto" 
  />
);

const LandingVideo = () => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <Suspense fallback={<VideoFallback />}>
        <SuspenseVideo 
          className="w-full h-auto"
          src={landingVideo}
          muted
          autoPlay
          playsInline
          loop
        />
      </Suspense>
    </div>
  );
};

export default LandingVideo; 