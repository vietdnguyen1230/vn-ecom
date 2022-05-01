import React from "react";

const Video = () => {
  return (
    <div className="container my-20 mx-auto px-4">
      <div className="aspect-w-16 aspect-h-9 md:my-7">
        <iframe
          src="https://player.vimeo.com/video/577331697?h=ead8e04d9b"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
