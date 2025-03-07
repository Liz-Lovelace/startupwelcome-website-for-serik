import React, { useState } from 'react';

const LandingVideo = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="rounded-2xl overflow-hidden border-1 border-gray1">
      {isLoading && (
        <div className="w-full aspect-video bg-gray-100"></div>
      )}
      <iframe
        src="https://player.vimeo.com/video/1061156830?h=9b27d21fe1&autoplay=1&loop=1&background=1"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay"
        title="Landing Video"
        className={`w-full aspect-video ${isLoading ? 'hidden' : ''}`}
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
};

export default LandingVideo; 