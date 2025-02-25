import React, { useState, useEffect } from 'react';

const SuspenseVideo = ({ src, fallbackSrc, ...props }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [promise, setPromise] = useState(null);

  useEffect(() => {
    // Create a promise that resolves when the video can play
    const videoPromise = new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.src = src;
      
      video.addEventListener('canplay', () => {
        resolve();
      });
      
      video.addEventListener('error', (err) => {
        reject(err);
      });
    });
    
    setPromise(videoPromise);
    
    // Try to preload the video
    videoPromise
      .then(() => setVideoLoaded(true))
      .catch(err => console.error('Video loading error:', err));
  }, [src]);

  // Suspend if the video isn't loaded yet
  if (!videoLoaded && promise) {
    throw promise;
  }

  return (
    <video src={src} {...props} />
  );
};

export default SuspenseVideo; 