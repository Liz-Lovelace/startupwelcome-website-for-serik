import React from 'react';

const AboutVideo = () => {
  return (
    <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden">
      <iframe 
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/efNu5aoTBjk" 
        title="Welcome to Travel Video"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </div>
  );
};

export default AboutVideo; 