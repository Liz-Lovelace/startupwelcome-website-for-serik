import React, { useState } from 'react';

const AboutVideo = ({ videoUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Extract YouTube video ID from different URL formats
  const getYoutubeEmbedUrl = (url) => {
    if (!url) return '';
    
    // Handle youtu.be format
    if (url.includes('youtu.be')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    
    // Handle youtube.com/embed format
    if (url.includes('/embed/')) {
      return url;
    }
    
    // Handle youtube.com/watch format
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1]);
      const id = urlParams.get('v');
      return `https://www.youtube.com/embed/${id}`;
    }
    
    // Default case - return the URL as is
    return url;
  };

  const embedUrl = getYoutubeEmbedUrl(videoUrl);

  return (
    <div className="rounded-2xl overflow-hidden aspect-video border-1 border-gray1 mb-6">
      {isLoading && (
        <div className="w-full h-full bg-gray-100"></div>
      )}
      <iframe
        className={`w-full h-full ${isLoading ? 'hidden' : ''}`}
        src={embedUrl}
        title="Welcome Presentation Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
};

// Default props in case no URL is provided
AboutVideo.defaultProps = {
  videoUrl: "https://www.youtube.com/embed/yyfmBnmm6wU"
};

export default AboutVideo; 