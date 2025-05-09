import React, { useState } from 'react';

const LandingVideo = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [showControls, setShowControls] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden border-1 border-gray1 relative group" >
      {isLoading && (
        <div className="w-full aspect-video bg-gray-100"></div>
      )}
      <iframe
        src="https://player.twitch.tv/?channel=welcomestreamtv&parent=localhost&parent=https://welcomestream.com/&autoplay=true&muted=true&hide_ui=1"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen={true}
        scrolling="no"
        allow="autoplay"
        title="Landing Video"
        className={`w-full aspect-video ${isLoading ? 'hidden' : ''}`}
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
};

export default LandingVideo; 