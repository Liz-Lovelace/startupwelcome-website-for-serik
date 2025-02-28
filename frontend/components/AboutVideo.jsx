import React from 'react';

const AboutVideo = () => {
  return (
    <div className="rounded-2xl overflow-hidden aspect-video">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/yyfmBnmm6wU"
        title="Welcome Presentation Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default AboutVideo; 