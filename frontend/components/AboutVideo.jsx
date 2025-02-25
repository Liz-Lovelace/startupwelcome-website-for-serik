import React, { Suspense } from 'react';
import aboutVideo from '../static/about-video-720p.mp4';
import image1 from '../static/image1.jpeg';
import SuspenseVideo from './SuspenseVideo.jsx';

const VideoFallback = () => (
  <img 
    src={image1} 
    alt="Video loading" 
    className="w-full h-auto" 
  />
);

const AboutVideo = () => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <Suspense fallback={<VideoFallback />}>
        <SuspenseVideo 
          className="w-full h-auto"
          src={aboutVideo}
          controls
          playsInline
        />
      </Suspense>
    </div>
  );
};

export default AboutVideo; 