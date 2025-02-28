import React from 'react';
import landingVideo from '../static/landing-video-360p.mp4';
import landingImage from '../static/image1.jpeg';
import SuspenseVideo from './SuspenseVideo.jsx';

/*
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
          preload="auto"
        />
      </Suspense>
    </div>
  );
};
*/

const LandingVideo = () => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1061156830?h=9b27d21fe1&autoplay=1&loop=1&background=1"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay"
        title="Landing Video"
        className="w-full aspect-video"
      ></iframe>
    </div>
  )
};

export default LandingVideo; 